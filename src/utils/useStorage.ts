import { create } from 'zustand';
import { computed } from 'zustand-computed-state';

interface State {
    isOpen: boolean;
    setIsOpen: (newValue: boolean) => void;
}

export const useStorage = create<State>()(
    computed((set, get) => ({
        isOpen: false,
        setIsOpen: newValue => {
            set(state => ({
                ...state,
                isOpen: newValue,
            }));
        },
    })),
);
