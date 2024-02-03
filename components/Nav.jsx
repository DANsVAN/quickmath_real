"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { globalContent } from "./Content";
export default function Nav() {
  const [logo, setLogo] = useState("Quick Maths ?");
  function onMouseOverHandler() {
    setLogo(<span className="text-purple-500">Quick Maths ¿</span>);
  }
  function onMouseOutHandler() {
    setLogo("Quick Maths ?");
  }
  ////////////////////////////////////////
  let lastAnswerCorrectness = useContext(globalContent);

  //////////////////////////////////////////
  return (
    <motion.nav className="flex bg-purple-300 bg-opacity-60 text-center text-purple-50 p-5 rounded-b-3xl  divide-solid border-purple-200 border-b-8 w-2/3 justify-center m-auto text-3xl font-bold">
      <Link
        href={"/"}
        onClick={() => {
          location.href = "/";
        }}
        onMouseOver={onMouseOverHandler}
        onMouseOut={onMouseOutHandler}
      >
        <motion.h1
          className="hover:text-purple-700"
          whileHover={{ scale: 1.2 }}
        >
          {logo}
          <motion.span whileHover={{ scale: 1.2, rotate: 180 }}></motion.span>
        </motion.h1>
      </Link>
    </motion.nav>
  );
}
// onMouseOver={onMouseOverHandler} onMouseOut={onMouseOutHandler}>
//         {logo}
