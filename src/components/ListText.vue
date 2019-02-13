<template>
    <div class="text-container">
        <input type="checkbox" />
        <div> {{ item.title }} </div>
    </div>
</template>

<script>

export default {
    name: "ListText",
    props: {
        item: {
            required: true,
            type: Object
        }
    },
    methods: {

    }
}


</script>
