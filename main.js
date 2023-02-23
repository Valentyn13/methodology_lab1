
import { interactiveMode } from "./interactive.js";
import { fileMod } from "./file.js";

if (process.argv.length < 3) {
    interactiveMode();
  } else {
    fileMod();
  }