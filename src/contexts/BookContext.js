import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { title: "name of the wind", id: 1 },
    { title: "No fundo do oceano os animais invisiveis", id: 2 },
    { title: "Lean", id: 3 },
    { title: "Auto da compadecida", id: 4 }
  ]);
  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
