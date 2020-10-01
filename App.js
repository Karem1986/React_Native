import React, { useState } from "react";
import ListScreen from "./src/screens/ListScreen";

export default function App() {
  //1.First we grab the value the user enters with state
  const [addItem, setAddItem] = useState("");
  //2. Second, we store the values the user enters, that is an [] initialState
  const [storeItem, setStoreItem] = useState([]);

  const addList = () => {
    setStoreItem([...storeItem, addItem]);
    console.log("testing storeItem", storeItem);
  };

  return <ListScreen />;
}
