<template>
  <button 
    class="button"
    :class="[
      variantClass,
      sizeClass,
      disabled ? 'opacity-50 cursor-not-allowed' : '',
      fullWidth ? 'w-full' : ''
    ]"
    @click="$emit('click')"
    :disabled="disabled">
    <i class="fa" :class="icon" v-if="icon"></i>
    <span v-if="icon" class="ml-2">{{ label }}</span>
    <span v-else>{{ label }}</span>
    <slot></slot>
  </button>
</template>

<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  // 按钮文本
  label: {
    type: String,
    default: ''
  },
  // 按钮图标 (Font Awesome)
  icon: {
    type: String,
    default: ''
  },
  // 按钮变体
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => [
      'primary', 'secondary', 'success', 'danger', 'outline'
    ].includes(value)
  },
  // 按钮大小
  size: {
    type: String,
    default: 'medium',
    validator: (value) => [
      'small', 'medium', 'large'
    ].includes(value)
  },
  // 是否禁用
  disabled: {
    type: Boolean,
    default: false
  },
  // 是否占满宽度
  fullWidth: {
    type: Boolean,
    default: false
  }
})

// 按钮变体样式
const variantClass = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-blue-600 text-white hover:bg-blue-700'
    case 'secondary':
      return 'bg-gray-200 text-gray-800 hover:bg-gray-300'
    case 'success':
      return 'bg-green-600 text-white hover:bg-green-700'
    case 'danger':
      return 'bg-red-600 text-white hover:bg-red-700'
    case 'outline':
      return 'border border-gray-300 hover:bg-gray-100'
    default:
      return 'bg-blue-600 text-white hover:bg-blue-700'
  }
})

// 按钮大小样式
const sizeClass = computed(() => {
  switch (props.size) {
    case 'small':
      return 'px-3 py-1 text-sm rounded'
    case 'medium':
      return 'px-4 py-2 rounded'
    case 'large':
      return 'px-6 py-3 text-lg rounded'
    default:
      return 'px-4 py-2 rounded'
  }
})
</script>

<style scoped>
.button {
  transition: all 0.2s ease;
  font-weight: 500;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.button:focus {
  outline: 2px solid rgba(59, 130, 246, 0.5);
  outline-offset: 2px;
}
</style>
    