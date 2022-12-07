import create from "zustand";

const useStoreZustand = create((set) => ({
  likes: 0,
  addLike: () => set((state) => ({ likes: state.likes + 1 })),
}));

export default useStoreZustand;
