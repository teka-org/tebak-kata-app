import {create} from 'zustand';

interface UserEmailState {
  userEmail: string | null;
  setUserEmail: (email: string) => void;
}

export const useUserEmailStore = create<UserEmailState>((set) => ({
  userEmail: null,
  setUserEmail: (email: string) => set({ userEmail: email }),
}));
