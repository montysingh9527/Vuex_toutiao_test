<template>
  <div>
    <ul class="catagtory">
      <!-- 遍历分类数组。如果当前id等于当前选中分类,则添加高亮select类 -->
      <!--原始方式调用子模块 @click="$store.commit('home/updateCurrentHome', item.id)" -->
      <li
        @click="updateHome(item.id)"
        :class="{ select: item.id === currenthome }"
        v-for="item in homelist"
        :key="item.id"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "home",
  computed: {
    // 导入分类数组和当前选中分类
    ...mapGetters(["homelist", "currenthome"]),
  },
  created() {
    // 调用子模块的actions
    this.$store.dispatch("home/gethomelist");
    this.updateHome();
  },
  methods: {
    // 调用子模块actions的updateCurrentHome传递载荷itemid
    updateHome: function (itemid) {
      this.$store.commit("home/updateCurrentHome", itemid);
    },
  },
  components: {},
};
</script>
