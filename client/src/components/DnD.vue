<template>
  <div :id="id" :class="[classes]" v-on="listeners">
    <slot />
  </div>
</template>

<script>
import _ from "lodash";

export default {
  name: "DnD",
  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    id: {
      type: String,
      required: false,
    },
    playing: {
      type: Boolean,
      required: true,
      default: false,
    },
    throttleMs: {
      type: Number,
      required: true,
      default: 33.333,
    },
  },
  data() {
    return {
      dragged: { active: false },
    };
  },
  computed: {
    canDrag() {
      return this.playing && !this.disabled;
    },
    classes() {
      return {
        board: true,
      };
    },
    dragging() {
      const { active = false } = this.dragged;
      return active;
    },
    listeners() {
      return this.playing
        ? {
            mousedown: ($event) => this.dragStart($event),
            touchstart: ($event) => this.dragStart($event),
            mouseup: ($event) => this.dragEnd($event),
            touchend: ($event) => this.dragEnd($event),
            mousemove: ($event) => this.throttledDrag($event),
            touchmove: ($event) => this.throttledDrag($event),
          }
        : {};
    },
    throttledDrag() {
      return _.throttle(this.drag, this.throttleMs, { trailing: true });
    },
  },
  methods: {
    dragStart(event) {
      event.preventDefault();

      if (!this.canDrag) return;

      const target = event.target.classList.contains("draggable")
        ? event.target
        : event.target.closest(".draggable");

      if (!target) return;

      const initialX =
        event.type === "touchstart" ? event.touches[0].clientX : event.clientX;

      const initialY =
        event.type === "touchstart" ? event.touches[0].clientY : event.clientY;

      const { top, left } = target.getBoundingClientRect();

      this.dragged = {
        active: true,
        dragId: target.id,
        offsetX: initialX - left,
        offsetY: initialY - top,
        initialX,
        initialY,
      };
    },
    drag(event) {
      event.preventDefault();

      if (!this.canDrag || !this.dragging) return;

      /*** MOVE  ***/
      const { dragId, initialX, initialY, overId } = this.dragged;
      const x =
        event.type === "touchmove"
          ? event.touches[0].clientX - initialX
          : event.clientX - initialX;

      const y =
        event.type === "touchmove"
          ? event.touches[0].clientY - initialY
          : event.clientY - initialY;

      this.$emit("drag", { dragId, dragX: x, dragY: y });

      /*** OVER  ***/
      const { id: dropId = "" } =
        document
          .elementsFromPoint(
            event.type === "touchmove"
              ? event.touches[0].clientX
              : event.clientX,
            event.type === "touchmove"
              ? event.touches[0].clientY
              : event.clientY
          )
          .find((el) => el.classList.contains("droppable")) || {};

      /**
       * if "over item" is different than before
       * overId = previous value
       * dropId = current value
       */

      if (overId !== dropId) {
        this.$emit("over", { dropId });
        this.dragged = {
          ...this.dragged,
          overId: dropId,
        };
      }
    },
    dragEnd(event) {
      event.preventDefault();
      this.throttledDrag.cancel(); // cancel bottled up move events

      if (!this.canDrag || !this.dragging) return; // exit if not playing or tile drag is explicitly disabled

      const { dragId, initialX, initialY, offsetX, offsetY } = this.dragged; // grab needed its from state

      // Get location of "pointer" upon drop
      const x =
        event.type === "touchend"
          ? event.changedTouches[0].clientX
          : event.clientX;

      const y =
        event.type === "touchend"
          ? event.changedTouches[0].clientY
          : event.clientY;

      // Has a drop occurred over a valid drop zone?
      const drop = document
        .elementsFromPoint(x, y)
        .find((el) => el.classList.contains("droppable"));

      // Grab info and perform calculations necessary for hit/miss transforms
      const { id: dropId } = drop || {};
      const { top, left } = (drop && drop.getBoundingClientRect()) || {};

      // Fire event that allows application of custom hit/miss logic
      this.$emit("drop", {
        drag: {
          id: dragId,
          x: drop ? x - initialX : x,
          y: drop ? y - initialY : y,
        },
        drop: drop
          ? {
              id: dropId,
              x: Math.round(left - initialX + offsetX), // apply original "pointer" location offsets
              y: Math.round(top - initialY + offsetY), // apply original "pointer" location offsets
            }
          : null,
      });

      // No matter what, current drag is over (reset) state
      this.dragged = { active: false };
    },
  },
  mounted() {
    console.log(this.$options.name, "mounted...");
  },
};
</script>

<style scoped>
.board {
  position: relative;
  overflow: hidden;
  transform-style: "preserve-3d";
}
</style>
