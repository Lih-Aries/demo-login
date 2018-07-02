<template>
    <li @click="itemDel">
      {{index}}--{{content}}
    </li>
</template>

<script>
  export default {
    props: ['content', 'index'],
    methods: {
      itemDel(){
        this.$emit('del', this.index);
      }
    }
  }
</script>

<style scoped>
li{
  padding:6px 10px;
  text-align: left;
  cursor: pointer;
}
</style>
