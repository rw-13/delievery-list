<template>
    <div class="modal"
        v-bind:class="{ modal_active: modal.visible }"
    >
        <form class="form">
            <div class="modal__header">
                <h2>Адрес доставки</h2>
                
            </div>
            <div class="modal__body">
                <div class="form__field form__field_suggest">
                    <label for="address" class="form__label">Введите адрес</label>
                    <input type="text"
                        id="address" 
                        class="form__input" 
                        ref="address"
                        autocomplete="off"
                        @input="changeAddress"
                        v-model="address"
                    />
                    <SuggestView 
                        v-if="suggestVisible"
                        :items="suggestItems" 
                        :setItem="setAddress"
                    />
                </div>
            </div>
            <div class="modal__actions">
                <button class="button button_blue"
                    @click.prevent="saveAddress"
                >
                    Сохранить
                </button>
                <button class="button button_red"
                    @click.prevent="closeModal"
                >
                    Отмена
                </button>
            </div>
        </form>
    </div>
</template>

<script>
    import load from 'ymaps-loader';
    import { mapGetters, mapMutations } from 'vuex';
    import SuggestView from './SuggestView';

    let ymaps = null;

    export default {
        data() {
            return {
                address: '',
                suggestItems: [],
                suggestVisible: false,
            }
        },
        computed: {
            ...mapGetters([
                'modal'
            ])
        },
        beforeCreate() {
            load({ apiKey: 'apikey=b14b13a9-3738-42cb-9bec-ddd09ca7af18'})
            .then(instance => {
                ymaps = instance;
            })
            .catch(err => {
                console.log(err);
            })
        },
        methods: {
            ...mapMutations({
                setVisibleForm: 'SET_VISIBLE_FORM',
                addDelievery: 'ADD_DELEVERY',
            }),
            changeAddress() {
                this.suggestVisible = true;

                ymaps.suggest(this.address).then(items => {
                    console.log(items);
                    this.suggestItems = items.map(obj => {
                        return {
                            value: obj.value,
                        }
                    });
                });
            },
            setAddress(value) {
                this.suggestVisible = false;
                this.address = value;
            },
            saveAddress() {
                if (!this.address) {
                    return;
                }
                this.addDelievery({
                    value: this.address,
                });
                this.address = '';
                this.setVisibleForm(false);
            },
            closeModal() {
                this.address = '';
                this.setVisibleForm(false);
            }
        },
        components: {
            SuggestView,
        }
    }
</script>

<style>
    .modal {
        display: block;
        width: 700px;
        position: fixed;
        visibility: hidden;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        box-shadow: 0px 0px 30px -10px #9e9e9e;
        border-radius: 20px;
        padding: 20px;
        background: #FFF;
        z-index: -1;
        transition: opacity 0.3s ease-in-out;
        opacity: 0;
    }
    .modal.modal_active {
        visibility: visible;
        z-index: 1000;
        transition: opacity 0.3s ease-in-out;
        opacity: 1;
    }
    .modal__header {
        border-bottom: 1px solid #9e9e9e;
        padding-bottom: 20px;
        text-align: center;
    }
    .modal__body {
        width: 500px;
        margin: 40px auto 0;
    }
    .modal__actions {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        width: 500px;
        margin: 40px auto 30px;
    }
    .form {
        display: flex;
        flex-direction: column;
    }
    .form__field {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .form__field.form__field_suggest {
        position: relative;
    }
    .form__label {
        width: 30%;
        margin-right: 30px;
        text-align: right;
        color: #949494;
    }
    .form__input {
        width: auto;
        flex: 1 1 auto;
        padding: 10px 7px;
        font-size: 16px;
        border: 1px solid #949494;
        outline: none;
    }
    .form__input:focus {
        border: 1px solid #45a9ff ;
    }
    .button {
        margin-left: 15px;
        padding: 15px 7px;
        border: none;
        border-radius: 3px;
        color: white;
        background: #45a9ff;
        outline: none;
        cursor: pointer;
    }
    .button.button_blue {
        background: #45a9ff;     
    }
    .button.button_red {
        background: #f55959;
    }
</style>