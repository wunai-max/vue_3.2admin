<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#fff"
    router
  >
    <el-sub-menu index="1" v-for="item in menuData" :key="item.id">
      <template #title>
        <el-icon><location /></el-icon>
        <span>{{ item.authName }}</span>
      </template>
      <el-menu-item
        :index="'/' + it.path"
        v-for="it in item.children"
        :key="it.id"
      >
        {{ it.authName }}
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { menuList } from '@/api/menu.js'
import { ref } from 'vue'

const menuData = ref(null)

const getMenuList = async () => {
  const res = await menuList()
  menuData.value = res
  console.log('>>>>>', res)
}

getMenuList()
</script>

<style lang="scss" scoped></style>
