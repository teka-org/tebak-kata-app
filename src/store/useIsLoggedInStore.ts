import {create} from 'zustand';

interface isLoggedInState {
  isLoggedIn: boolean;
  isRegister: boolean;
  setIsLoggedIn: (inputLoggedIn: boolean) => void;
  setIsRegister: (inputRegister: boolean) => void;
}

export const useIsLoggedInStore = create<isLoggedInState>((set) => ({
  isLoggedIn: false,
  isRegister: false,
  setIsLoggedIn: (inputLoggedIn: boolean) => set({ isLoggedIn: inputLoggedIn }),
  setIsRegister: (inputRegister: boolean) => set({ isRegister: inputRegister }),
}));
