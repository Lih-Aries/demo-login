<template>
    <li>
      <label>{{index}}--{{content}}</label>
      <span @click="itemDel">删除</span>
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
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  padding:15px 10px;
  border-bottom: 1px solid #eee;
  list-style-position: inside;
}
label{
  display: inline-block;
}
span{
  visibility: hidden;
  cursor: pointer;
}
li:hover{
  background-color: beige;
}
li:hover span{
  visibility: visible;
}
</style>
