import {create} from 'zustand';

interface StoreState {
    isOpen: boolean
    setIsOpen: (value: boolean) => void
    toggleIsOpen: () => void
    isFirstLoad: boolean;
    setIsFirstLoad: (value: boolean) => void;
  }
  
  export const useStore = create<StoreState>((set) => ({
    isOpen: false,
  
    setIsOpen: (value) => set({ isOpen: value }),
  
    toggleIsOpen: () => set((state) => ({
      isOpen: !state.isOpen
    })),

    isFirstLoad: false,
    setIsFirstLoad: (value) => set({ isFirstLoad: value }),  
  }))
  