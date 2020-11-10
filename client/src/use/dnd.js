import { computed, reactive, toRefs, watch, onMounted } from "vue";
import _ from "lodash";

export default function useDnD({
  active,
  element,
  throttleMs = 0,
  debug = false,
  emit,
}) {
  const state = reactive({
    dragged: {},
    listeners: [],
    throttledDrag: computed(() =>
      _.throttle(drag, throttleMs, { trailing: true })
    ),
  });

  const handlers = {
    mousedown: dragStart,
    mousemove: state.throttledDrag,
    mouseup: dragEnd,
    touchstart: dragStart,
    touchmove: state.throttledDrag,
    touchend: dragEnd,
  };

  function addListeners(lsnrs) {
    lsnrs.forEach((event) => {
      debug && console.log(`adding ${event}...`);
      element.value.addEventListener(event, handlers[event]);
      state.listeners = state.listeners
        .concat(lsnrs)
        .filter((v, i, a) => a.indexOf(v) === i);
    });
  }

  function removeListeners(lsnrs) {
    lsnrs.forEach((event) => {
      debug && console.log(`removing ${event}...`);
      element.value.removeEventListener(event, handlers[event]);
      state.listeners = state.listeners.filter((v) => lsnrs.indexOf(v) < 0);
    });
  }

  function enableDnD() {
    addListeners(["mousedown", "touchstart"]);
  }

  function disableDnD() {
    state.dragged = {};
    removeListeners(state.listeners);
  }

  function dragStart(e) {
    e.stopPropagation();

    debug &&
      console.log(
        `${
          state.dragged.id ? `${e.type} (${state.dragged.id}) ` : `${e.type}`
        }...`
      );

    const drag = e.target.classList.contains("draggable")
      ? e.target
      : e.target.closest(".draggable");

    if (!drag) return;

    const initialX = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
    const initialY = e.type === "touchstart" ? e.touches[0].clientY : e.clientY;
    const { top, left } = drag.getBoundingClientRect();

    state.dragged = {
      id: drag.id,
      offsetX: initialX - left,
      offsetY: initialY - top,
      initialX,
      initialY,
    };

    const lsnrs =
      e.type === "touchstart"
        ? ["touchmove", "touchend"]
        : ["mousemove", "mouseup"];

    addListeners(lsnrs);
  }

  function drag(e) {
    e.stopPropagation();
    debug &&
      console.log(
        `${e.target.id ? `${e.type} (${e.target.id}) ` : `${e.type}`}...`
      );

    /*** MOVE  ***/
    const { id: dragId, initialX, initialY, overId } = state.dragged;
    const x =
      e.type === "touchmove"
        ? e.touches[0].clientX - initialX
        : e.clientX - initialX;

    const y =
      e.type === "touchmove"
        ? e.touches[0].clientY - initialY
        : e.clientY - initialY;

    emit("drag", { dragId, dragX: x, dragY: y });

    /*** OVER  ***/
    const { id: dropId = "" } =
      document
        .elementsFromPoint(
          e.type === "touchmove" ? e.touches[0].clientX : e.clientX,
          e.type === "touchmove" ? e.touches[0].clientY : e.clientY
        )
        .find((el) => el.classList.contains("droppable")) || {};

    /**
     * if "over item" is different than before
     * overId = previous value
     * dropId = current value
     */

    if (overId !== dropId) {
      debug && console.log(`${dragId} is over ${dropId}...`);
      emit("over", { overId: dropId });
      state.dragged = {
        ...state.dragged,
        overId: dropId,
      };
    }
  }

  function dragEnd(e) {
    e.stopPropagation();
    state.throttledDrag.cancel(); // cancel bottled up move events
    const { id: dragId, initialX, initialY, offsetX, offsetY } = state.dragged; // grab needed its from state

    debug &&
      console.log(`${dragId ? `${e.type} (${dragId}) ` : `${e.type}`}...`);

    // Get location of "pointer" upon drop
    const x = e.type === "touchend" ? e.changedTouches[0].clientX : e.clientX;
    const y = e.type === "touchend" ? e.changedTouches[0].clientY : e.clientY;

    // Has a drop occurred over a valid drop zone?
    const drop = document
      .elementsFromPoint(x, y)
      .find((el) => el.classList.contains("droppable"));

    // Grab info and perform calculations necessary for hit/miss transforms
    const { top, left } = (drop && drop.getBoundingClientRect()) || {};

    // Fire event that allows application of custom hit/miss logic
    emit("drop", {
      dragId: dragId,
      dragX: drop ? x - initialX : x,
      dragY: drop ? y - initialY : y,
      dropId: drop ? drop.id : null,
      dropX: drop ? Math.round(left - initialX + offsetX) : null, // apply original "pointer" location offsets
      dropY: drop ? Math.round(top - initialY + offsetY) : null, // apply original "pointer" location offsets
    });

    // No matter what, current drag is over (reset) state
    state.dragged = {};

    const lsnrs =
      e.type === "touchstart"
        ? ["touchmove", "touchend"]
        : ["mousemove", "mouseup"];

    removeListeners(lsnrs);
  }

  // the DOM element ref passed in is only available after initial render
  onMounted(() => {
    debug &&
      console.log(`dnd mounted (${active.value ? "active" : "inactive"})...`);
    active.value && addListeners(["mousedown", "touchstart"]);
  });

  watch(active, (newValue, oldValue) => {
    debug && console.log("active changed: ", oldValue, "=>", newValue);
    return newValue && !oldValue ? enableDnD() : disableDnD();
  });

  return {
    ...toRefs(state),
  };
}
