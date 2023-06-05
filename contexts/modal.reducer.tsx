interface IInitState {
  authModal: boolean
}

interface IAction {
  type: 'SHOW_AUTH_MODAL' | ''
}

const actions = {
  SHOW_AUTH_MODAL:"SHOW_AUTH_MODAL" 
}

export const modalAuthReducer = (state: IInitState, action: IAction) => {
  switch (action.type) {
    case actions.SHOW_AUTH_MODAL:
      return { ...state, modalAuth: true };
    default:
      return state;
  }
};