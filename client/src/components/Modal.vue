<template>
  <div>
    <teleport to="#modals">
      <transition
        :appear="appear"
        name="modal"
        :duration="500"
        @after-leave="$emit('exited')"
      >
        <div v-if="show" class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
              <slot name="header">
                <button @click="$emit('close')">Close</button>
              </slot>
              <slot name="body"></slot>
              <slot name="footer"></slot>
            </div>
          </div>
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script>
export default {
  name: "Modal",
  inheritAttrs: false,
  props: ["appear", "show"],
  emits: ["close", "exited"],
};
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  //transition: opacity 100ms ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 500ms ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-active,
.modal-enter-from {
  opacity: 0;
  transition: all 500ms ease;
}

.modal-enter-active .modal-container,
.modal-enter-from .modal-container {
  -webkit-transform: scale(5);
  transform: scale(5);
}

.modal-enter-to {
  opacity: 1;
}

.modal-enter-to .modal-container {
  -webkit-transform: scale(1);
  transform: scale(1);
}

.modal-leave-active,
.modal-leave-from {
  opacity: 1;
  transition: all 500ms ease;
}

.modal-leave-active .modal-container,
.modal-leave-from .modal-container {
  -webkit-transform: scale(1);
  transform: scale(1);
}

.modal-leave-to {
  opacity: 0;
}

.modal-leave-to .modal-container {
  -webkit-transform: scale(0);
  transform: scale(0);
}
</style>
