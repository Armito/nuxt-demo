<template>
    <div>
        <!-- <h1>欢迎来到易师傅的第一个页面</h1> -->
        <NuxtLayout name="header" />
        <NuxtLink to="/list">进入列表页</NuxtLink>
        <div>{{ foo }}</div>
    </div>
</template>

<script setup>
const foo = useFoo();
</script>
