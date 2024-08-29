"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const promiseFunction = () => {
  new Promise((resolve, reject) => {
    const a = 1;
    const b = 2;

    const sum = a + b;

    if (sum === 4) {
      resolve("Success");
    } else {
      reject("Error");
    }
  })
    .then((value) => {
      console.log(value, "success");
    })
    .catch((error) => {
      console.log(error, "error");
    })
    .finally(() => {
      console.log("first finally");
    });
};

const calculateSum = async () => {
  const a = 1;
  const b = 2;

  const sum = a + b;

  if (sum === 3) {
    return "Success";
  } else {
    throw new Error("Error adding sum");
  }
};

const Contact = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("");

  const getValue = async () => {
    try {
      const value = await calculateSum();
      console.log(value);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("FInally");
    }
  };

  useEffect(() => {
    getValue();
  }, []);

  const fetchApi = async() => {
    const response = await fetch ("https://fakestoreapi.com/products");

    console.log(response);
  };

  useEffect(() => {
    fetchApi();
  }, []);


  return (
    <>
      <div>
        Contact
        <button onClick={promiseFunction}>Click</button>
       
      </div>
    </>
  );
};

export default Contact;