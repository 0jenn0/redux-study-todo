import { ActionTypes, TodoActionTypes } from "./action";


const initialState: string[] = ["Redux 공부하기", "코드 리뷰하기"];

const todoReducer = (state = initialState, action: TodoActionTypes): string[] => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return [...state, action.payload!];

    case ActionTypes.REMOVE_TODO:
      return state.slice(0, -1);

    case ActionTypes.REMOVE_ALL:
      return [];

    default:
      return state;
  }
};

export default todoReducer;
