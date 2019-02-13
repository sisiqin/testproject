<template>
    <div>
        <input v-model="text" />
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
            console.log("text??", this.text)
            // send text to vuex store ; )
        }
    }
}
</script>
