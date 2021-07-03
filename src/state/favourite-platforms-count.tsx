import React, { useContext, useReducer } from "react";

interface ReducerState {
    count: number;
}

enum ActionTypes {
    INCREMENT = "INCREMENT",
    DECREMENT = "DECREMENT",
}

const defaultState: ReducerState = { count: 0 };
const CountContext = React.createContext<{
    state: ReducerState;
    increment: () => void;
    decrement: () => void;
}>({ state: defaultState, increment: () => {}, decrement: () => {} });

const reducer = (state: ReducerState, action: { type: ActionTypes }) => {
    switch (action.type) {
        case ActionTypes.INCREMENT:
            return { ...state, count: state.count + 1 };
        case ActionTypes.DECREMENT:
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
};

interface Props {
    children: React.ReactNode;
}

export const FavouritePlatformsCountContextProvider: React.FC<Props> = ({ children }: Props) => {
    const [state, dispatch] = useReducer(reducer, defaultState);
    const increment = () => dispatch({ type: ActionTypes.INCREMENT });
    const decrement = () => dispatch({ type: ActionTypes.DECREMENT });
    return <CountContext.Provider value={{ state, increment, decrement }}>{children}</CountContext.Provider>;
};

export const useFavouritePlatformsCountContext = () => useContext(CountContext);
