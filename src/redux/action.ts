
export const ActionTypes = {
    ADD_TODO: "ADD_TODO",
    REMOVE_TODO: "REMOVE_TODO",
    REMOVE_ALL: "REMOVE_ALL"
  } as const;
  
  export type ActionTypes = typeof ActionTypes[keyof typeof ActionTypes];
  

interface Action<T, P = undefined> {
  type: T;
  payload?: P;
}

export type AddTodoAction = Action<typeof ActionTypes.ADD_TODO, string>;
export type RemoveTodoAction = Action<typeof ActionTypes.REMOVE_TODO>;
export type RemoveAllAction = Action<typeof ActionTypes.REMOVE_ALL>;

export type TodoActionTypes = AddTodoAction | RemoveTodoAction | RemoveAllAction;


const createAction = <T extends ActionTypes, P = undefined>(type: T) => (payload?: P) => ({
  type,
  payload
});

export const addTodo = createAction<typeof ActionTypes.ADD_TODO, string>(ActionTypes.ADD_TODO);
export const removeTodo = createAction<typeof ActionTypes.REMOVE_TODO>(ActionTypes.REMOVE_TODO);
export const removeAll = createAction<typeof ActionTypes.REMOVE_ALL>(ActionTypes.REMOVE_ALL);
