<template>
  <div class="hello">
    <h2>Essential Links</h2>
    <div>
      <input v-model="inputVal" type="text">
      <button @click="handleSubmit" type="submit">提交</button>
    </div>
    <ul>
      <todo-item
        v-for="(item, index) of list"
        :key="index"
        :content="item"
        :index="index"
        @del="handleDel">
      </todo-item>
    </ul>
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
    }
  }
}
</script>

<style scoped>
ul{
  width:240px;
  margin:30px auto;
}
</style>
