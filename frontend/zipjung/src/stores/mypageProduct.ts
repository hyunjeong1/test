import {create} from 'zustand';

import {persist} from 'zustand/middleware';

type MyList = number[];

interface IMypageProductStore {
  zustandLikedProduct: MyList;
  setZustandLikedProduct: (newProduct: number) => void;
  deleteZustandLikedProduct: (targetProduct: number) => void;
  zustandLikedCombination: MyList;
  setZustandLikedCombination: (newCombination: number) => void;
  deleteZustandLikedCombination: (targetCombination: number) => void;
}

const useMypageProductStore = create<IMypageProductStore>()(
  persist(
    set => ({
      zustandLikedProduct: [],
      setZustandLikedProduct: (newProduct: number) =>
        set(state => ({
          ...state,
          zustandLikedProduct: Array.from(
            new Set([...state.zustandLikedProduct, newProduct]),
          ),
        })),
      deleteZustandLikedProduct: (targetProduct: number) =>
        set(state => ({
          ...state,
          zustandLikedProduct: state.zustandLikedProduct.filter(
            product => product !== targetProduct,
          ),
        })),
      zustandLikedCombination: [],
      setZustandLikedCombination: (newCombination: number) =>
        set(state => ({
          ...state,
          zustandLikedCombination: Array.from(
            new Set([...state.zustandLikedCombination, newCombination]),
          ),
        })),
      deleteZustandLikedCombination: (targetCombination: number) =>
        set(state => ({
          ...state,
          zustandLikedCombination: state.zustandLikedCombination.filter(
            combination => combination !== targetCombination,
          ),
        })),
    }),
    {
      name: 'MypageProduct',
    },
  ),
);

export default useMypageProductStore;
export type {IMypageProductStore};