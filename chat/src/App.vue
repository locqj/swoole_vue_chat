<template>
  <div id="app">
    <user-list></user-list>
    <message></message>
    <text-box></text-box>
    <button type="button" name="button" @click="testa">sadassd</button>
  </div>
</template>

<script>

import UserList from './components/UserList'
import Message from './components/Message'
import TextBox from './components/TextBox'

export default {
  name: 'app',
  components: {
    UserList, Message, TextBox
  },

  created : function(){
    let conn = new WebSocket('ws://127.0.0.1:9522')
    conn.onopen = function(evt){
        console.log("open")
        // _this.showNotice(' 连接成功！','success');
        // _this.changeStatus(true);
    }
    conn.onclose = function(evt){
        console.log("close")
        // _this.showNotice(' 已断开连接！','error');
        // _this.changeStatus(false);
    }
    conn.onmessage = function(evt){
        console.log("message")
        let msg = JSON.parse(evt.data)
        // switch(msg.type){
        //     case 'connect':
        //         _this.addUser(msg.data);
        //         _this.setCount(msg.data.count);
        //         break;
        //     case 'disconnect':
        //         _this.removeUser(msg.data.id);
        //         _this.setCount(msg.data.count);
        //         break;
        //     case 'self_init':
        //         _this.setUser(msg.data);
        //         console.log(msg.data);
        //         _this.setCount(msg.data.count);
        //         break;
        //     case 'other_init':
        //         _this.addUser(msg.data);
        //         break;
        //     case 'message':
        //         _this.addMessage(msg.data);
        //         break;
        // }
    }
    // 保存conn


  },
  methods: {
    testa() {
      console.log('123');
      this.$store.dispatch('testa')
    }
  },
}
</script>

<style>
#app {
  margin: 0 auto;
  margin-top: 8%;
  width: 800px;
  height: 600px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}



</style>
