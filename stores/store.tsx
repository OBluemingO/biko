import { create } from "zustand";

interface IModalStore {
  modal_auth: boolean;
  action_modal_auth: (new_state: boolean) => void;
}

export const useModalStore = create<IModalStore>((set) => ({
  modal_auth: false,
  action_modal_auth: (new_state) => set((state) => ({...state, modal_auth: new_state})),
}));
