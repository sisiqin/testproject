<template>
    <div>
        <input v-model="text" @keyup.enter="handleClick" />
        <button @click="handleClick"> save </button>

    </div>
</template>


<script>
export default {
    name: "ListInput",
    props: {
        item: {
            required: true,
            type: Object
        }
    },
    data() {
        return {
            text: this.item.title || ""
        }
    },
    methods: {
        handleClick() {
            const newItem = this.item;
            this.item.title = this.text;
            this.$store.dispatch( "editTest", { item: newItem });
        }
    }
}
</script>
