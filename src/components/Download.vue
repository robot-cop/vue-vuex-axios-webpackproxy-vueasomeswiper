<template>
  <div class="download">
    <img class="maxWidth" src="http://img0.imgtn.bdimg.com/it/u=406175518,4037495904&fm=200&gp=0.jpg">
  </div>
</template>

<script>
export default {
  name: "Download",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.download {
  background-color: #f8f8f8;
}
.maxWidth {
  width: 100%;
}

</style>
