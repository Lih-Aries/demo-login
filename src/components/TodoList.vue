<template>
  <div class="layer">
    <div class="input">
      <input
        v-model="inputVal"
        type="text"
        placeholder="请输入内容，按下Enter完成输入..."
        @keyup.enter="handleSubmit"
      >
    </div>
    <ul class="list">
      <todo-item
        v-for="(item, index) of list"
        :key="index"
        :content="item"
        :index="index"
        @del="handleDel">
      </todo-item>
    </ul>
    <div class="footer">
      <span>{{list.length}}item</span>
      <button @click="clear()">clear item</button>
    </div>
  </div>
</template>

<script>
import TodoItem from './TodoItem'
export default {
  components: {
    'todo-item': TodoItem
  },
  data () {
    return {
      inputVal: '',
      list: []
    }
  },
  methods: {
    handleSubmit(){
      this.list.push(this.inputVal);
      this.inputVal = ''
    },
    handleDel(index){
      this.list.splice(index, 1)
    },
    clear(){
      this.list = [];
    }
  }
}
</script>

<style scoped>
.layer{
  width: 60%;
  margin: 0 auto;
}
.input{
  margin: 15px auto;
  border-bottom: 1px solid #ddd;
}
.input input{
  width: 90%;
  font-size: 24px;
  color: #aaa;
  line-height: 48px;
  border:none;
  outline: none;
}
.list{
  margin:30px auto;
}
.footer{
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  border-top: 1px solid #ddd;
}
</style>
