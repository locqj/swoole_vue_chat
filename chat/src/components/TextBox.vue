<template>
  <div class="right">
    <div class="text-box">
      <div class="text-input">
        <textarea name="" id="" placeholder="Press enter to send"></textarea>
      </div>
      <div class="text-footer">
        <button>发送</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextBox',
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
  height: 26%;
  float: right;
  border-bottom-right-radius: 8px
}
.text-box {
  width: 100%;
  height: 96%;
  background-color: #fff;
}
.text-box .text-input {
  height: 74%;
  border-top: 1px solid #ddd;
}
.text-box .text-input textarea {
  padding: 10px;
  resize: none;
  width: 100%;
  height: 100%;

  border: none;
  outline: none;
  padding-top: 20px;
}
.text-box .text-footer {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 10px 20px;
  background: #fff;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -webkit-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end;
  border-bottom-right-radius: 8px

}

.text-box .text-footer button {
  background: #fff;
  padding: 3px 20px;
  color: #222;
  border: 1px solid #c1c1c1;
  border-radius: 3px;
}

</style>
