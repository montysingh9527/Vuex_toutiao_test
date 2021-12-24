<template>
  <div>
    <div class="list">
      <div class="article_item" v-for="item in currentList" :key="item.art_id">
        <h3 class="van-ellipsis">{{ item.title }}</h3>
        <div class="img_box" v-if="item.cover.type === 1">
          <img :src="item.cover.images[0]" class="w100" />
        </div>
        <div class="img_box" v-else-if="item.cover.type === 3">
          <img :src="item.cover.images[0]" class="w33" />
          <img :src="item.cover.images[1]" class="w33" />
          <img :src="item.cover.images[2]" class="w33" />
        </div>
        <div class="info_box">
          <span>{{ item.aut_name }}</span>
          <span>{{ item.comm_count }}评论</span>
          <span>{{ item.pubdate }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "about",
  computed: {
    // 导入当前选中分类的id、当前选中分类下的数据列表
    ...mapGetters(["currenthome", "currentList"]),
  },
  watch: {
    // 监听当前选中分类id,触发获取新闻action
    currenthome:function(newValue) {
      // console.log('new',newValue)
      // newValue 是最新的激活分类id
      this.$store.dispatch("about/getNewList", newValue);
    },
  },
};
</script>
