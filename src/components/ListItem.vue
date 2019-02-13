<template>
    <div class="container">
        <div v-if="item.mode === 'read'">
            <ListText :item="item" />
        </div>
        <div v-else>
            <ListInput :item="item" />
        </div>
    </div>

</template>


<script>
import ListText from './ListText.vue';
import ListInput from './ListInput.vue';

export default {
    name: 'ListItem',
    components: {
        ListText,
        ListInput
    },
    data () {
        return {
            hey: "hey"
        }
    },
    props: {
        item: {
            required: true,
            type: Object
        }
    }
}
</script>


<style scoped>
.container {
    display: flex;
}
</style>
