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

export default {
  name: 'Home',
  components: {
      ListItem
  },
  data () {
    return {
      lists: [
          {
              id: 1,
              title: "one thing",
              mode: "read"
          },
          {
              id: 2,
              title: 'another thing',
              mode: "read"
          },
          {
              id: 3,
              title: "one more thing",
              mode: "read"
          }
      ]
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
