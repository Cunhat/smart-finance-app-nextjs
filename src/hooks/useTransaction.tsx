import React, { useReducer } from 'react';
import { DropdownChangeParams } from 'primereact/dropdown';


let initialState = {
  value: undefined as string | undefined,
  date: new Date(),
  description: '' as string,
  tagName: null as null | {},
  category: null as null | {},
  account: null as null | {},
};

type ACTIONTYPE =
  | { type: 'setDescription'; payload: string }
  | { type: 'setDate'; payload: Date }
  | { type: 'setValue'; payload: string }
  | { type: 'setTagName'; payload: string }
  | { type: 'setCategory'; payload: string }
  | { type: 'setAccount'; payload: string }
  | { type: 'clear' };

function reducer(state: typeof initialState, action: ACTIONTYPE): typeof initialState {
  switch (action.type) {
    case 'setDescription':
      return { ...state, description: action.payload };
    case 'setDate':
      return { ...state, date: action.payload };
    case 'setValue':
      return { ...state, value: action.payload };
    case 'setTagName':
      return { ...state, tagName: action.payload };
    case 'setCategory':
      return { ...state, category: action.payload };
    case 'setAccount':
      return { ...state, account: action.payload };
    case 'clear':
      return initialState;
    default:
      throw new Error();
  }
}

export const useTransaction = (initialValue: typeof initialState | undefined) => {
  let [state, dispatch] = useReducer(reducer, initialValue || initialState);

  const handleChange = (type: string, e: DropdownChangeParams | React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: type, payload: e.target.value });
  };

  const clearState = () => {
    dispatch({ type: 'clear' });
  };

  return [state, handleChange, clearState] as const;
};
