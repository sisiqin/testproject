export default {
  editTest(state, item) {
    let targetItem = state.lists.map(ele => ele.id === item.id);
    targetItem = Object.assign({}, item);
  }
}
