import { defineStore } from 'pinia'

export const useToastStore = defineStore('toast', {
  state: () => ({
    message: '',
    show: false,
    type: 'info'
  }),
  actions: {
    showToast(message, type = 'info') {
      this.message = message
      this.type = type
      this.show = true
      
      // 3秒后自动关闭
      setTimeout(() => {
        this.show = false
      }, 3000)
    }
  }
})
    