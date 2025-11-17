import {create} from 'zustand';

interface StoreState {
    isOpen: boolean
    setIsOpen: (value: boolean) => void
    toggleIsOpen: () => void
  }
  
  export const useStore = create<StoreState>((set) => ({
    isOpen: false,
  
    setIsOpen: (value) => set({ isOpen: value }),
  
    toggleIsOpen: () => set((state) => ({
      isOpen: !state.isOpen
    })),
  }))
  