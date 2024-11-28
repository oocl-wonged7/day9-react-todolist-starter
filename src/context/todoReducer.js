export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, {id: Date.now(), text: action.payload, done: false}];
    case "TOGGLE_TODO":
      return state.map((todoItem) => {
        if (todoItem.id === action.payload) {
          return {...todoItem, done: !todoItem.done};
        }
        return todoItem;
      });
    case "DELETE_TODO":
      return state.filter((todoItem) => todoItem.id !== action.payload);
    default:
      return state;
  }
};