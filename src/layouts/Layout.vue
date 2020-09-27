<template>
    <div class="container">
        <Delieveres />
        <AddAddressForm />
    </div>
</template>

<script>
    import Delieveres from '../components/Delieveries';
    import AddAddressForm from '../components/AddAddressForm.vue';

    export default {
        components: {
            Delieveres,
            AddAddressForm
        },
    }
</script>

<style>
    .container {
        width: 1024px;
        margin: 0 auto;
    }
</style>