import { motion } from "framer-motion";
import { useState } from "react";
import { Progress } from "@material-tailwind/react";
let clockCounter = 0;
let barColor = "green";
export default function Footer({ answerHistory, time, getGameOverState }) {
  let [totalTimeLeftState, setTotalTimeLeftState] = useState(time);
  createTimer(time);
  function createTimer(time) {
    let timeleft = time;
    clockCounter++;
    if (clockCounter === 1) {
      setInterval(() => {
        setTotalTimeLeftState(timeleft--);
      }, 1000);
    }
  }
  let barPercent = (totalTimeLeftState / time) * 100;
  if (totalTimeLeftState < 0) {
    getGameOverState(true);
  }

  if (barPercent > 75) {
    barColor = "green";
  } else if (barPercent > 50) {
    barColor = "amber";
  } else if (barPercent > 25) {
    barColor = "red";
  }
  let css =
    "fixed container m-auto bottom-0 inset-x-0.5 w-2/3 bg-purple-300 bg-opacity-60 text-center text-purple-50 p-5 rounded-t-3xl divide-solid border-purple-200 border-t-8  text-3xl font-bold  w-2/3 justify-items-center";
  if (answerHistory.lastAnswerCorrectness === undefined) {
    css =
      "fixed container m-auto bottom-0 inset-x-0.5 w-2/3 bg-purple-300 bg-opacity-60 text-center text-purple-50 p-5 rounded-t-3xl divide-solid border-purple-200 border-t-8  text-3xl font-bold  w-2/3 justify-items-center";
  } else if (answerHistory.lastAnswerCorrectness) {
    css =
      "fixed container m-auto bottom-0 inset-x-0.5 w-2/3 bg-green-300 bg-opacity-60 text-center text-purple-50 p-5 rounded-t-3xl divide-solid border-purple-200 border-t-8  text-3xl font-bold  w-2/3 justify-items-center";
  } else {
    css =
      "fixed container m-auto bottom-0 inset-x-0.5 w-2/3 bg-red-300 bg-opacity-60 text-center text-purple-50 p-5 rounded-t-3xl divide-solid border-purple-200 border-t-8  text-3xl font-bold  w-2/3 justify-items-center";
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0, x: [5, 0, 5, 0] }}
      exit={{ opacity: 0, y: -60 }}
      className={css}
    >
      <div className=" flex justify-between pb-2">
        <div className="text-red-300 ">{answerHistory.wrongAnswers} wrong </div>
        <div className="">{totalTimeLeftState} Secondes Left</div>
        <div className="text-green-300">
          {" "}
          Correct {answerHistory.rightAnswers}
        </div>
      </div>
      <motion.div transition={{ delay: 0.5 }}>
        <Progress
          value={barPercent}
          variant="gradient"
          size="lg"
          color={barColor}
        />
      </motion.div>
    </motion.div>
  );
}
// fixed container bg-purple-300 bg-opacity-60 text-center text-purple-50 p-5 rounded-t-3xl  divide-solid border-purple-200 border-t-8 w-2/3  m-auto text-3xl font-bold bottom-0 inset-x-0.5 justify-around justify-items-stretch";
//<Progress value={50} variant="gradient" size="lg" color="purple" />
