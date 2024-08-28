<script setup lang="ts">

export interface PanelProps {
    user: string;
    name?: string;
    age?: number;
}

withDefaults(defineProps<PanelProps>(), {
    name: "fjc",
    age: 18,
});

</script>

<template>
    <div class="">
        <h1>vv3-test</h1>
        <h2>user: {{ user }}</h2>
        <h2>name: {{ name }}</h2>
        <h2>age: {{ age }}</h2>
    </div>
</template>
