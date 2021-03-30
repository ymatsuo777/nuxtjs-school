<template>
  <div @click="clickData">
    <span>{{ no }}</span>
    <span>{{ name }}</span>
  </div>
</template>

<script>
export default {
  name: 'UserItem',
  // コンポーネントの外側から渡されるデータをpropsという
  props: {
    no: {
      type: Number, // 渡されるデータの型
      default: 0 // デフォルト値
    },
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    clickData() {
      alert(`${this.name} がクリックされました`)
    }
  }
}
</script>
