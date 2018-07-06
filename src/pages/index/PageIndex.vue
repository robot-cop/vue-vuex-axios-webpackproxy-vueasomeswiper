<template>
  <div class="index">
        <div>
            <SearchGoods/>
            <img/>
        </div>
        <Classification/>
        <SwiperPages/>
  </div>
</template>

<script>

import SearchGoods from "./components/SearchGoods.vue";
import Classification from "./components/Classification.vue";
import SwiperPages from "./components/SwiperPages.vue";

export default {
  name: "PageIndex",
  props: {
    msg: String
  },
  components: {
    SearchGoods,
    Classification,
    SwiperPages,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.maxWidth {
  width: 100%;
}

</style>
