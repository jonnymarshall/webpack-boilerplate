import regeneratorRuntime from "regenerator-runtime";
import { doPrint } from "./print";
import "./style.scss";

doPrint();

const findNumber = async () => {
  const a = Math.random(12);
  const b = Math.random(12);
  return a / b;
};

const logNumber = async () => {
  const result = await findNumber();
  return result;
};

console.log(logNumber());
