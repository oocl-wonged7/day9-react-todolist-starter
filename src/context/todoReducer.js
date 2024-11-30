export const ACTION = {
  INIT_TODO: "INIT_TODO",
  ADD_TODO: "ADD_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  DELETE_TODO: "DELETE_TODO",
  UPDATE_TODO: "UPDATE_TODO",
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case ACTION.INIT_TODO:
      return action.payload;
    case ACTION.ADD_TODO:
      return [...state, { id: Date.now(), text: action.payload, done: false }];
    case ACTION.TOGGLE_TODO:
      return state.map((todoItem) => {
        if (todoItem.id === action.payload) {
          return { ...todoItem, done: !todoItem.done };
        }
        return todoItem;
      });
    case ACTION.DELETE_TODO:
      return state.filter((todoItem) => todoItem.id !== action.payload);
    case ACTION.UPDATE_TODO:
      return state.map((todoItem) => {
        if (todoItem.id === action.payload.id) {
          return { ...todoItem, text: action.payload.text};
        }
        return todoItem;
      });
    default:
      return state;
  }
};
