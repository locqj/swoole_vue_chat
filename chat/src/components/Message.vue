<template>
  <div class="right">
    <div class="message-title">
      <p>test</p>
    </div>
    <div class="message">
      <!-- 发送的信息 -->
      <div class="message-content" v-for="t in 10">
          <div class="message-time">
            <p>2017-10-09 09:09:90</p>
          </div>
          <div class="message-content-send">
            <img src="https://avatars3.githubusercontent.com/u/4375169?s=400&v=4" alt="">
            <span>as</span>
          </div>
      </div>
      <!-- 接受的信息 -->
      <div class="message-content">
          <div class="message-time">
            <p>2017-10-09 09:09:90</p>
          </div>
          <div class="message-content-send self">
            <img src="https://avatars3.githubusercontent.com/u/4375169?s=400&v=4" alt="">
            <span>acess 测试数据 我咋都撒到3ea6fb3ea6fb3ea6fb3ea6fb3ea6fb3ea6fb3ea6fb3ea6fb3ea6fb3ea6fb3ea6fb3ea6fb3ea6fb3ea6fb3ea6fb3ea6fb3ea6fb</span>
          </div>
        <!-- 接受的信息 -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Message',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.right {
  width: 70%;
  height: 74%;
  float: right;
}

.message {
  width: 100%;
  height: 92%;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #eee;
  overflow-y:scroll;
}
.message-title {
  background-color: #eee;
  width: 100%;
  height: 10%;
  border-top-right-radius: 8px

}
.message-title p {
  padding-top: 2%;
  font-size: 18px;
  color: #666;
}

.message-time p{
  width: 30%;
  align-self: center;
  padding: 0 18px;
  font-size: 12px;
  color: #fff;
  border-radius: 2px;
  background-color: #dcdcdc;
  margin: 5px auto;
}

.message-content .message-content-send {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
}
.message-content .message-content-send span{
  margin: 7px 18px;
  padding: 10px;
  min-height: 30px;
  font-size: 14px;
  text-align: left;
  word-break: break-all;
  background: #fafafa;
  border-radius: 4px;
  line-height: 1.4;

}
.message-content .message-content-send img{
  width: 40px;
  height: 40px;
  margin-left: 1%;
  margin-right: 1%;
  -ms-flex-negative: 0;
  flex-shrink: 0;
}
.message-content .self {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse;
}
.message-content .self span {
  background-color: #3ea6fb;
}

</style>
