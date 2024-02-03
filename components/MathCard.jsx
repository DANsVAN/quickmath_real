import { useState, useEffect } from "react";
import { motion } from "framer-motion";
let denominatorValue = 0;

export default function MathCard({
  randomNumber1,
  randomNumber2,
  pickedAvailableSigns,
  numerator,
  wholeNumberAnswer,
  denominator,
  nextProblem,
  AnswerHistory,
}) {
  const [answerValue, setAnswerValue] = useState({
    wholeNumber: undefined,
    numerator: undefined,
    denominator: undefined,
  });

  const divisionForm = (
    <motion.form
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0, x: [5, 0, 5, 0] }}
      exit={{ opacity: 0, y: -60 }}
    >
      <div className="columns-2">
        <motion.input
          placeholder=""
          whileHover={{ scale: 1.1 }}
          type="number"
          name="wholeNumber"
          className="text-purple-700 bg-purple-50 text-center border-purple-400 rounded-none border-2 hover:border-purple-600 accent-purple-700 w-24 h-20 text-3xl remove-arrow"
          value={answerValue.wholeNumber}
          onChange={(e) => {
            setAnswerValue({
              wholeNumber: Number(e.target.value),
              numerator: answerValue.numerator,
              denominator: answerValue.denominator,
            });
          }}
        />

        <div>
          <motion.input
            placeholder=""
            whileHover={{ scale: 1.1 }}
            type="number"
            name="numerator"
            className="text-purple-700 bg-purple-50 text-center border-purple-400 rounded-none border-2 hover:border-purple-600 accent-purple-700 w-24 h-10 remove-arrow"
            value={answerValue.numerator}
            onChange={(e) => {
              setAnswerValue({
                wholeNumber: answerValue.wholeNumber,
                numerator: Number(e.target.value),
                denominator: answerValue.denominator,
              });
            }}
          />
          <br></br>
          <motion.input
            whileHover={{ scale: 1.1 }}
            type="number"
            name="denominator"
            placeholder=""
            className="text-purple-700 bg-purple-50 text-center border-purple-400 rounded-none border-2 hover:border-purple-600 accent-purple-700 w-24 h-10 remove-arrow"
            value={answerValue.denominator}
            onChange={(e) => {
              setAnswerValue({
                wholeNumber: answerValue.wholeNumber,
                numerator: answerValue.numerator,
                denominator: Number(e.target.value),
              });
            }}
          ></motion.input>
          <br></br>
        </div>
      </div>
      <div className="columns-1 ">
        {/* <span className="mx-2">{AnswerHistory.wrongAnswers}</span> */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={() => nextProblem(answerValue)}
          type="button"
          className="mt-6 focus:outline-none text-purple-50 border-purple-50 border-4 bg-purple-400 hover:bg-purple-400 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-lg py-2 mb-2 w-5/6 bg-opacity-40 hover:text-purple-700 hover:border-purple-700"
        >
          Submit
        </motion.button>
        {/* <span className="mx-2">{AnswerHistory.rightAnswers}</span> */}
      </div>
    </motion.form>
  );

  const Form = (
    <motion.form>
      <motion.input
        whileHover={{ scale: 1.1 }}
        placeholder=""
        type="number"
        name="wholeNumberAnswer"
        className="text-purple-700 bg-purple-50 text-center border-purple-400 rounded-none border-2 hover:border-purple-600 accent-purple-700 w-52 h-20 text-3xl remove-arrow mb-8 "
        value={answerValue.wholeNumber}
        onChange={(e) => {
          setAnswerValue({
            wholeNumber: Number(e.target.value),
            numerator: answerValue.numerator,
            denominator: answerValue.denominator,
          });
        }}
      />
      <br></br>
      <div className="mx-2">
        {/* <span className="">{AnswerHistory.wrongAnswers}</span> */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={() => nextProblem(answerValue)}
          type="button"
          className="mt-6focus:outline-none text-purple-50 border-purple-50 border-4 bg-purple-400 hover:bg-purple-400 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-lg py-2 mb-2 w-5/6 bg-opacity-40 hover:text-purple-700 hover:border-purple-700"
        >
          Submit
        </motion.button>
        {/* <span className="">{AnswerHistory.rightAnswers}</span> */}
      </div>
    </motion.form>
  );
  return (
    <motion.div
      className="text-center rounded-3xl p-10 text-lg bg-purple-300 bg-opacity-40 text-purple-50 border-purple-200 border-b-8"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0, x: [5, 0, 5, 0] }}
      exit={{ opacity: 0, y: -60 }}
    >
      <h1 className="pb-6 text-3xl">
        <span>{randomNumber1}</span>
        <span className="mx-2">{pickedAvailableSigns}</span>
        <span>{randomNumber2}</span>
      </h1>
      {pickedAvailableSigns === "÷" ? divisionForm : Form}
    </motion.div>
  );
}
