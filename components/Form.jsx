"use client";
import { data } from "autoprefixer";
import { useAnimate } from "framer-motion";
import { motion } from "framer-motion";
let errorKey = [];
import { useContext, useState } from "react";
import Link from "next/link";
import { globalContent } from "./Content";
let timecss =
  " w-10/12 text-center text-purple-700 bg-purple-50 border-purple-400 rounded-none border-4 hover:border-purple-600 remove-arrow";
let maxcss =
  "text-purple-700 bg-purple-50 text-center border-purple-400 rounded-none border-4 hover:border-purple-600 remove-arrow";
let mincss =
  "text-purple-700 bg-purple-50 text-center border-purple-400 rounded-none border-4 hover:border-purple-600 remove-arrow";
let signscss = "accent-purple-600 ";
export default function Form() {
  let { gameData } = useContext(globalContent);
  const [scope, shackAnimate] = useAnimate();
  // const gamedata = {
  //   time: "",
  //   min: "",
  //   max: "",
  //   signs: ["", "", "", ""],
  //   valid: false,
  // };
  const [formValidity, setFormValidity] = useState({
    time: false,
    min: false,
    max: false,
    signs: false,
  });
  // const [gameData, setGameData] = useState(gamedata);
  const [submit, setSubmit] = useState(
    <button
      onClick={() => {
        valdateInputFilds();
      }}
      type="button"
      className="ml-20 hover:text-purple-700"
    >
      Submit
    </button>
  );

  function checkIfValid() {
    let undefinedTracker = 0;
    errorKey = [];
    for (let Data in gameData) {
      if (gameData[Data] == gameData.signs) {
        if (
          gameData.signs[0] === "" &&
          gameData.signs[1] === "" &&
          gameData.signs[2] === "" &&
          gameData.signs[3] === ""
        ) {
          errorKey.push(Data);
          undefinedTracker++;
        }
      } else if (gameData[Data] == "") {
        errorKey.push(Data);
        undefinedTracker++;
      }

      if (undefinedTracker === 0) {
        gameData.valid = true;
      } else {
        gameData.valid = false;
      }
    }

    if (gameData.valid == true) {
      setSubmit(
        <Link href="/Questions" className="ml-20 hover:text-purple-700">
          Submit
        </Link>
      );
    } else {
      setSubmit(
        <button
          onClick={() => {
            valdateInputFilds();
          }}
          type="button"
          className="ml-20 hover:text-purple-700"
        >
          Submit
        </button>
      );
    }
  }
  function onChangeHandler(val, objectkey, index) {
    if (objectkey === "signs") {
      if (val !== gameData.signs[index]) {
        gameData.signs[index] = val;
      } else {
        gameData.signs[index] = "";
      }
    } else {
      gameData[objectkey] = val;
    }
    checkIfValid();
  }

  const [invalidNotification, setInvalidNotification] = useState(true);

  function valdateInputFilds() {
    if (gameData.valid) {
      setInvalidNotification(true);
    } else {
      setInvalidNotification(false);
    }
  }

  return (
    <motion.div>
      <motion.form
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0, x: [5, 0, 5, 0] }}
        exit={{ opacity: 0, y: -60 }}
        className="text-center rounded-3xl pt-5 pb-5 text-lg bg-purple-300 bg-opacity-40 text-purple-50 border-purple-200 border-b-8 "
        ref={scope}
      >
        <div className="">
          <label className="" title="time">
            Time In Seconds
          </label>
          <br></br>
          <motion.input
            whileHover={{ scale: 1.1 }}
            className={timecss}
            type="number"
            id="time"
            name="time"
            value={gameData.time}
            onChange={(e) => onChangeHandler(e.target.value, "time")}
          ></motion.input>
          <br></br>
          <div className="columns-2 pt-2 pl-2 pr-2 pb-5 sm:pr-16 sm:pl-16 text-center">
            <label className="" title="min number">
              Number 1
            </label>
            <br></br>
            <motion.input
              whileHover={{ scale: 1.07 }}
              className={mincss}
              type="number"
              id="min number"
              name="min number"
              value={gameData.min}
              onChange={(e) => onChangeHandler(e.target.value, "min")}
            ></motion.input>
            <br></br>
            <label title="max number">Number 2</label>
            <br></br>
            <motion.input
              whileHover={{ scale: 1.07 }}
              type="number"
              id="max number"
              name="max number "
              className={maxcss}
              value={gameData.max}
              onChange={(e) => onChangeHandler(e.target.value, "max")}
            ></motion.input>
          </div>
          <span className="">
            <motion.input
              whileHover={{ scale: 1.3, rotate: 360 }}
              type="checkbox"
              id="+"
              name="+"
              value="+"
              className={signscss}
              onChange={(e) => onChangeHandler(e.target.value, "signs", 0)}
            ></motion.input>
            <label>+</label>
            <motion.input
              whileHover={{ scale: 1.3, rotate: 360 }}
              type="checkbox"
              id="-"
              name="-"
              value="-"
              className={signscss}
              onChange={(e) => onChangeHandler(e.target.value, "signs", 1)}
            ></motion.input>
            <label>-</label>
            <motion.input
              whileHover={{ scale: 1.3, rotate: 360 }}
              type="checkbox"
              id="x"
              name="x"
              value="x"
              className={signscss}
              onChange={(e) => onChangeHandler(e.target.value, "signs", 2)}
            ></motion.input>
            <label>x</label>
            <motion.input
              whileHover={{ scale: 1.3, rotate: 360 }}
              type="checkbox"
              id="÷"
              name="÷"
              value="÷"
              className={signscss}
              onChange={(e) => onChangeHandler(e.target.value, "signs", 3)}
            ></motion.input>
            <label className="mr-20">÷</label>
            {invalidNotification ? (
              <span></span>
            ) : (
              <motion.span
                className={""}
                whileInView={{
                  opacity: [
                    1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.15, 0.1, 0.05,
                    0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9,
                  ],
                }}
                transition={{ repeat: Infinity }}
              >
                Invalid Input
              </motion.span>
            )}
            <motion.span whileHover={{ scale: 1.4 }}>{submit}</motion.span>
          </span>
        </div>
      </motion.form>
    </motion.div>
  );
}
