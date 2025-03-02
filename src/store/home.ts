import { create } from "zustand";

export type HomeStore = {
  selectedTag: string | null;
  setSelectedTag: (tag: string | null) => void;
  isEditTagsModalOpen: boolean;
  setIsEditTagsModalOpen: (isOpen: boolean) => void;
};

export const useHomeStore = create<HomeStore>((set) => ({
  selectedTag: null,
  setSelectedTag: (tag: string | null) =>
    set((state) => ({ ...state, selectedTag: tag })),
  isEditTagsModalOpen: false,
  setIsEditTagsModalOpen: (isOpen: boolean) =>
    set((state) => ({
      ...state,
      isEditTagsModalOpen: isOpen,
    })),
}));
