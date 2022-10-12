<script setup lang="ts">
import { NLayout, NSpace, NLayoutSider, NLayoutHeader, NLayoutContent, NSwitch } from 'naive-ui';
import { useData } from 'vitepress';
import { ref } from 'vue';

const inverted = ref(false);
const data = useData();
console.log(data)

</script>

<template>
  <n-layout has-sider class="h-screen">
    <n-layout-sider :inverted="inverted" bordered content-style="padding: 24px;">
      海淀桥2
    </n-layout-sider>
    <n-layout>
      <n-layout-header :inverted="inverted" bordered>
        <n-space><n-switch v-model:value="inverted" /> inverted </n-space>
      </n-layout-header>
      <n-layout-content :inverted="inverted" content-style="padding: 24px;">
        平山道
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<style lang="scss" scoped>

</style>