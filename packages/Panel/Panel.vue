<script setup lang="ts">

export interface PanelProps {
    user: string;
    name?: string;
    age?: number;
}

const props = withDefaults(defineProps<PanelProps>(), {
    name: "fjc",
    age: 18,
});

defineExpose(props);

</script>

<template>
    <div class="">
        <h1>vv3-test</h1>
        <h2 class="user">user: {{ user }}</h2>
        <h2 class="name">name: {{ name }}</h2>
        <h2 class="age">age: {{ age }}</h2>
    </div>
</template>
