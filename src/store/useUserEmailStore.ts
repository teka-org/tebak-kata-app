import create from 'zustand';

interface UserEmailState {
  userEmail: string;
  setUserEmail: (email: string) => void;
}

export const useUserEmailStore = create<UserEmailState>((set) => ({
  userEmail: '',
  setUserEmail: (email: string) => set({ userEmail: email }),
}));
