import React, { useState, useEffect } from "react";
import "./Index.css";
export default function Index() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [num, setNum] = useState(10);
  //dijalankan 1 kali
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
 
