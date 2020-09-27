export default {
    SET_VISIBLE_FORM (state, payload) {
        state.form.visible = payload;
    },
    ADD_DELEVERY (state, payload) {
        state.list.push(payload);
    }
};