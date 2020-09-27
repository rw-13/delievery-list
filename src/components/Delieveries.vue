<template>
    <div>
        <header class="header">
            <h1 class="header__title">
                Список доставок
            </h1>
            <div class="header__tools">
                <button
                    class="button button_add"
                    @click="addNewDelievery" 
                >+</button>
            </div>
        </header>
        <ul class="delievery">
            <li
                class="delievery__item"
                v-for="(item, index) in getList" 
                :key="index"
            >
                {{ item.value }}
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex';

    export default {
        data() {
            return {
                listItems: ['item-1', 'item-2']
            }
        },
        computed: {
            ...mapGetters([
                'getList'
            ])
        },
        methods: {
            ...mapMutations({
                setVisibleForm: 'SET_VISIBLE_FORM'
            }),
            addNewDelievery() {
                this.setVisibleForm(true);
            },
        }
    }
</script>

<style>
    .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    .delievery {
        padding-left: 0px;
        list-style: none;
    }
    .delievery__item {
        margin-bottom: 15px;
        padding: 20px 30px;
        background: #e8e8e8;
        font-size: 16px;
    }
    .button.button_add {
        display: block;
        height: 30px;
        width: 30px;
        padding: 0;
        margin-left: 0px;
        line-height: 30px;
        border-radius: 50%;
    }
</style>