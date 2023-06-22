import { create } from "zustand";


interface IModalInit {
  modal_auth: boolean;
}

interface IModalAction {
  action_modal_auth: (new_state: boolean) => void;
}

interface IAuthInit {
  user_info: {
    username: string
    password: string
    image: string
    address: string
  }
}

interface IAuthAction {
  action_login_user: (new_state: boolean) => void;
} 

const modalStore = create<IModalInit & IModalAction>((set) => ({
  modal_auth: false,
  action_modal_auth: (new_state) => set((state) => ({...state, modal_auth: new_state})),
}))

const authStore = create<IAuthAction & IAuthInit>((set) => ({
  user_info: {
    username: '',
    password: '',
    address: '',
    image: '',
  },
  action_login_user: (new_state) => set((state) => ({...state, modal_auth: new_state})),
}))

export const useAuthStore = authStore
export const useModalStore = modalStore 