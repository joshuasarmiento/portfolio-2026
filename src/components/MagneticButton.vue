<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  strength: { type: Number, default: 20 }, // How far it moves
  as: { type: String, default: 'button' } // 'button' or 'a' or 'router-link'
})

const root = ref(null)
const x = ref(0)
const y = ref(0)

const onMouseMove = (e) => {
  const { left, top, width, height } = root.value.getBoundingClientRect()
  const centerX = left + width / 2
  const centerY = top + height / 2
  
  // Calculate distance from center
  const deltaX = e.clientX - centerX
  const deltaY = e.clientY - centerY

  // Apply magnetic pull
  x.value = deltaX / props.strength
  y.value = deltaY / props.strength
}

const onMouseLeave = () => {
  x.value = 0
  y.value = 0
}

</script>

<template>
  <component 
    :is="as" 
    ref="root"
    class="magnetic-wrap inline-block transition-transform duration-200 ease-out will-change-transform"
    :style="{ transform: `translate3d(${x}px, ${y}px, 0)` }"
    @mousemove="onMouseMove"
    @mouseleave="onMouseLeave"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>