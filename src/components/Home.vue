<template>
  <div>
      <h1> This is a to-do list </h1>
      <div v-for="item in lists">
          <div @dblclick="toggleMode(item.id)" >
              <ListItem
                    :item="item"
                    :key="item.id"
              />
          </div>
      </div>
  </div>
</template>


<script>
import ListItem from './ListItem.vue'
import ListInput from './ListInput.vue'

export default {
  name: 'Home',
  components: {
      ListItem,
      ListInput
  },
  data () {
    return {
      lists: this.$store.getters.getLists
    }
  },
  methods: {
      toggleMode(id) {
          for(let item of this.lists) {
              if(item.id === id) {
                  item.mode = "edit";
              }
          }
      }
  }

}
</script>
