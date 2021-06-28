import React, { createContext, useContext, useState } from "react";

const CountContext = React.createContext<{
  count: number;
  increment: Function;
  decrement: Function;
}>({ count: 0, increment: () => {}, decrement: () => {} });

export const FavouritePlatformsCountContextProvider: React.FC = ({
  children,
}) => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return (
    <CountContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CountContext.Provider>
  );
};

export const useFavouritePlatformsCountContext = () => useContext(CountContext);
