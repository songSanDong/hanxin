<template>
  <div>
       <h2 class="sub-header">射手英雄</h2>
        <router-link class="btn btn-success" to="/heroes/add">添加</router-link>
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>姓名</th>
                <th>性别</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>

              <tr v-for="(item,index) in list" :key="item.id">
                <td>{{ index + 1 }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.gender }}</td>
                <td>
                  <!-- <a href="edit.html">edit</a> -->
                  <router-link :to="'/heroes/' + item.id">edit</router-link>
                  &nbsp;&nbsp;
                  <a @click="handDelete(item.id)" href="javascript:void(0)">delete</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  </div>
</template>
<script>
 import axios from 'axios';
  export default {
    // 导入axios模块

      data() {
        return  {
          list: []
        };
      },
       // 发送异步请求，获取数据
      created() {
        this.loadData()
      },
      methods: {
        loadData(){
          axios
          .get('http://127.0.0.1:3001/heroes')
          .then((response)=>{
            if(response.status == 200) {
              this.list = response.data;
            }
          })
          .catch((err)=>{
            console.log(err);
          })
        },
        handDelete(id) {
          if(!confirm('是否确认删除数据')){
            return;
          }
          axios
            .delete(`http://127.0.0.1:3001/heroes/${id}`)
            .then((response)=>{
              if(response.status == 200){
                this.loadData();
              } else {
                alert('删除失败');
              }
            })
            .catch((err)=>{
              console.log(err);
            })
        }
      }

  }
</script>
<style>

</style>
