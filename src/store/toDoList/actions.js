export default {
  editTest: (context, { item }) => {
      item.mode = "read";
      context.commit("editTest", item)
  }

}
