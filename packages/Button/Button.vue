<template>
    <div>{{ count }} x {{ times }} = {{ result }}</div>
    <button class="MyButton" @click="times += 1">Increase</button>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";

const props = defineProps<{ count: number }>();

const times = ref(2);
const result = computed(() => props.count * times.value);

defineExpose(props);
</script>

<style>
.MyButton {
    color: red;
}
</style>
