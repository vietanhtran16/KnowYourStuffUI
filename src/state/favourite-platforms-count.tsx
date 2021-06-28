import React, { useContext, useState } from "react";

const CountContext = React.createContext<{
    count: number;
    increment: () => void;
    decrement: () => void;
}>({ count: 0, increment: () => {}, decrement: () => {} });

interface Props {
    children: React.ReactNode;
}

export const FavouritePlatformsCountContextProvider: React.FC<Props> = ({ children }: Props) => {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    return <CountContext.Provider value={{ count, increment, decrement }}>{children}</CountContext.Provider>;
};

export const useFavouritePlatformsCountContext = () => useContext(CountContext);
