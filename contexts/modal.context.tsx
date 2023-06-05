import React , { createContext, useReducer } from 'react'
import { modalAuthReducer } from './modal.reducer'

interface IModal {
  authModal: boolean
}

interface IProps {
  children: React.ReactNode;
}

const initStateModal:IModal = {
  authModal: false
} 

const ModalContext = createContext<{
  state: IModal;
  dispatch: React.Dispatch<any>;
}>({
  state: initStateModal,
  dispatch: () => null,
});

const ModalProvider: React.FC<IProps> = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(modalAuthReducer ,initStateModal)
  return (
    <ModalContext.Provider value={{ state, dispatch }}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalProvider, ModalContext };
