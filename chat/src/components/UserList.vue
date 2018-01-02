<template>
  <div class="list">
    <div class="info">
      <img src="https://avatars0.githubusercontent.com/u/23146656?s=400&u=51ab27e70cd141c1f628052991613c69779f3401&v=4" alt="">
      <p>cqj</p>
    </div>
    <div class="friends-list">
      <div class="friends-li" v-for="t in 15">
        <img src="https://avatars1.githubusercontent.com/u/5032206?s=400&v=4" alt="">
        <span>test</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserList',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.list {
  width: 30%;
  height: 100%;
  float: left;
  background-color: #383840;
  color: #fff;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}
.list .info {
  height: 25%;
  padding-top: 20px;
  border-bottom: 1px solid #272525;
}

.list .info img {
  width: 35%;
  border-radius: 50%;
}


.list .friends-list {
  height: 75%;
  overflow-y:scroll;
}

.list .friends-list .friends-li {
  height: 15%;
  padding: 4%;
  border-bottom: 0.5px solid #272525;
}
.list .friends-list .friends-li:hover {
  height: 15%;
  padding: 4%;
  background-color: #26292e;
}
.list .friends-list .friends-li:active {
  height: 15%;
  padding: 4%;
  background-color: #383840;
}
.list .friends-list .friends-li img {
  width: 20%;
  border-radius: 25%;
  float: left;
}
.list .friends-list .friends-li span {
  float: left;
  margin-left: 5%;
  margin-top: 5%
}
.friends-list:last-child{
  border-bottom-left-radius: 8px;
}
</style>
