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
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          done: action.payload.done,
        },
      ];
    case ACTION.TOGGLE_TODO:
      return state.map((todoItem) => {
        if (todoItem.id === action.payload.id) {
          return { ...todoItem, done: action.payload.done };
        }
        return todoItem;
      });
    case ACTION.DELETE_TODO:
      return state.filter((todoItem) => todoItem.id !== action.payload);
    case ACTION.UPDATE_TODO:
      return state.map((todoItem) => {
        if (todoItem.id === action.payload.id) {
          return { ...todoItem, text: action.payload.text };
        }
        return todoItem;
      });
    default:
      return state;
  }
};
