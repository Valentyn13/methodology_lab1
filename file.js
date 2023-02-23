import { solveQuadraticEquation } from "./interactive.js";
import { readFileSync, existsSync } from "fs";

const isDatavalid = (data) =>
/^-?\d+(\.\d+)? -?\d+(\.\d+)? -?\d+(\.\d+)?$/.test(data);

export const fileMod = () => {
  const filePath = process.argv[2];
  if (!existsSync(filePath)) {
    console.log(`Error: file ${filePath} does not exist`);
    return;
  }

  const fileData = readFileSync(filePath).toString();
  if (!isDatavalid(fileData)) {
    console.log("invalid file format");
    return
  }
  const params = fileData
  .split("\n")[0]
  .split(" ")
  .map((string) => parseFloat(string));
if (params[0] === 0) {
  console.log("Error. a cannot be 0");
  return;
}
solveQuadraticEquation(...params)
}
