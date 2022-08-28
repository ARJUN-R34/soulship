<script lang="ts" setup>
interface IModal {
  type: string
}
interface IModalEmit<V = any> {
  (e: 'click:close', value: V): void
}
defineProps<IModal>()
const emit = defineEmits<IModalEmit>()
</script>

<template>
  <div
    class="fixed top-0 right-0 bottom-0 left-0 flex justify-center z-20 bg-secondary bg-opacity-40 overflow-y-hidden"
    :class="$style.modal"
  >
    <div class="bg-secondary opacity-75 w-full h-full absolute top-0 left-0" />
    <div class="m-auto bg-secondary-100 shadow-navigation relative p-16 shadow-modal rounded-[70px]" :class="$style['modal-box']">
      <button
        class="btn btn-sm btn-circle btn-ghost absolute right-10 top-10 text-xl text-gray-400 font-black"
        @click="emit('click:close', false)"
      >
        ✕
      </button>

      <div v-if="type === 'SUCCESS'" class="w-full m-auto mb-8" :class="$style['ui-success']">
        <svg class="m-auto" viewBox="0 0 87 90" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Group-3" transform="translate(2.000000, 2.000000)">
              <circle id="Oval-2" stroke="rgba(165, 220, 134, 0.2)" stroke-width="4" cx="41.5" cy="41.5" r="41.5" />
              <circle id="Oval-2" :class="$style['ui-success-circle']" stroke="#A5DC86" stroke-width="4" cx="47.5" cy="47" r="41.5" />
              <polyline id="Path-2" :class="$style['ui-success-path']" stroke="#A5DC86" stroke-width="4" points="19 38.8036813 31.1020744 54.8046875 63.299221 28" />
            </g>
          </g>
        </svg>
      </div>
      <div v-if="type === 'ERROR'" class="w-full m-auto mb-8" :class="$style['ui-error']">
        <svg class="m-auto" viewBox="0 0 87 87" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Group-2" transform="translate(2.000000, 2.000000)">
              <circle id="Oval-2" stroke="rgba(252, 191, 191, .5)" stroke-width="4" cx="41.5" cy="41.5" r="41.5" />
              <circle :class="$style['ui-error-circle']" stroke="#F74444" stroke-width="4" cx="41.5" cy="41.5" r="41.5" />
              <path id="Line" :class="$style['ui-error-line1']" d="M22.244224,22 L60.4279902,60.1837662" stroke="#F74444" stroke-width="3" stroke-linecap="square" />
              <path id="Line" :class="$style['ui-error-line2']" d="M60.755776,21 L23.244224,59.8443492" stroke="#F74444" stroke-width="3" stroke-linecap="square" />
            </g>
          </g>
        </svg>
      </div>

      <div class="w-full text-left text-lg text-gray-400 font-bold mb-8">
        <slot name="title" />
      </div>
      <slot name="content" />
      <div class="modal-action" :class="(type === 'SUCCESS' || type === 'ERROR') ? 'justify-center' : 'justify-end'">
        <!-- <a href="#" class="btn btn-primary text-base-100">Yay!</a> -->
        <slot name="buttons" />
        <button
          v-if="type === 'SUCCESS'" class="btn btn-success font-bold" :class="$style.btn"
          @click="emit('click:close', false)"
        >
          Continue
        </button>
        <button
          v-if="type === 'ERROR'" class="btn btn-error font-bold" :class="$style.btn"
          @click="emit('click:close', false)"
        >
          Try again
        </button>
      </div>
    </div>
  </div>
</template>

<style module lang="postcss">
.btn {
  min-width: 60%;
  @apply shadow-3xl rounded-md w-auto;
}
.modal {
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-property: transform, opacity;
  overscroll-behavior: contain;
  .modal-box {
    max-height: calc(100vh - 5em);
    height: fit-content;
    transition-property: color, background-color, border-color, fill, stroke,
      opacity, box-shadow, transform, filter, -webkit-text-decoration-color,
      -webkit-backdrop-filter;
    transition-property: color, background-color, border-color,
      text-decoration-color, fill, stroke, opacity, box-shadow, transform,
      filter, backdrop-filter;
    transition-property: color, background-color, border-color,
      text-decoration-color, fill, stroke, opacity, box-shadow, transform,
      filter, backdrop-filter, -webkit-text-decoration-color,
      -webkit-backdrop-filter;
    transition-duration: 200ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    width: 91.666667%;
    max-width: 40rem;
    --tw-scale-x: 0.9;
    --tw-scale-y: 0.9;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y))
      rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    overflow-y: auto;
    overscroll-behavior: contain;
  }
}
.ui-success,
.ui-error {
  width: 100px;
  height: 100px;
}

.ui-success {
  .ui-success-circle {
    stroke-dasharray: 260.75219024795285px, 260.75219024795285px;
    stroke-dashoffset: 260.75219024795285px;
    transform: rotate(220deg);
    transform-origin: center center;
    stroke-linecap: round;
    animation: ani-success-circle 1s ease-in both;
  }
  .ui-success-path {
    stroke-dasharray: 60px 64px;
    stroke-dashoffset: 62px;
    stroke-linecap: round;
    animation: ani-success-path 0.4s 1s ease-in both;
  }
}

@keyframes ani-success-circle {
  to {
    stroke-dashoffset: 782.2565707438586px;
  }
}

@keyframes ani-success-path {
  0% {
    stroke-dashoffset: 62px;
  }
  65% {
    stroke-dashoffset: -5px;
  }
  84% {
    stroke-dashoffset: 4px;
  }
  100% {
    stroke-dashoffset: -2px;
  }
}

.ui-error {
  .ui-error-circle {
    stroke-dasharray: 260.75219024795285px, 260.75219024795285px;
    stroke-dashoffset: 260.75219024795285px;
    animation: ani-error-circle 1.2s linear;
  }
  .ui-error-line1 {
    stroke-dasharray: 54px 55px;
    stroke-dashoffset: 55px;
    stroke-linecap: round;
    animation: ani-error-line 0.15s 1.2s linear both;
  }
  .ui-error-line2 {
    stroke-dasharray: 54px 55px;
    stroke-dashoffset: 55px;
    stroke-linecap: round;
    animation: ani-error-line 0.2s 0.9s linear both;
  }
}

@keyframes ani-error-line {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes ani-error-circle {
  0% {
    stroke-dasharray: 0, 260.75219024795285px;
    stroke-dashoffset: 0;
  }
  35% {
    stroke-dasharray: 120px, 120px;
    stroke-dashoffset: -120px;
  }
  70% {
    stroke-dasharray: 0, 260.75219024795285px;
    stroke-dashoffset: -260.75219024795285px;
  }
  100% {
    stroke-dasharray: 260.75219024795285px, 0;
    stroke-dashoffset: -260.75219024795285px;
  }
}
</style>
