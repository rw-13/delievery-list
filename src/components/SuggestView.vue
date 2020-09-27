<template>
    <ul class="suggest-view">
        <li class="suggest-view__item"
            v-for="item in items"
            :key="item.value"
            v-on:click="setItem(item.value)"
        >
            {{ item.value }}
        </li>
    </ul>
</template>

<script>
    export default {
        props: [ 'items', 'setItem' ],
        // data() {
        //     return {
        //         suggestItems: []
        //     }
        // },
        mounted() {
            console.log(this);
        },
        methods: {
            setAddress(event) {
                this.setValue(event);
                console.log(this);
                console.log(event);
            }
        }
    }
</script>

<style>
    .suggest-view {
        position: absolute;
        top: calc(100% + 5px);
        right: 0;
        padding: 0;
        margin: 0;
        list-style: none;
        background: white;
        box-shadow: 0px 10px 20px 0px #d4d4d4;
    }
    .suggest-view__item {
        padding: 3px 5px;
        cursor: pointer;
    }
    .suggest-view__item:hover {
        background: #e3e3e3;
    }
</style>