<template>
    <button class="MyButton" type="button">
        我是一个按钮组件
    </button>
</template>

<script lang="ts">
export default {
    name: 'MyButton', //组件名称，必须设置
    data() {
        return {}
    },
    methods: {},
    filters: {},
    created() { }
}
</script>

<style>
.MyButton {
    color: red;
}
</style>
