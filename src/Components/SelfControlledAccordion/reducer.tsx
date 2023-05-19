export const TOGGLE_COLLAPSED = "TOGGLE-COLLAPSED";

type ActionType = {
  type: string;
};

export type StateType = {
  collapsed: boolean;
};

export const reducer = (state: StateType, action: ActionType): StateType => {
  console.log(state);
  switch (action.type) {
    case "TOGGLE-COLLAPSED":
        return { ...state, collapsed: !state. collapsed };

    //   const stateCopy = { ...state };
    //   stateCopy.collapsed = !state.collapsed;
    //   return stateCopy;
  }
  return state;
};
