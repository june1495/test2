const { writeFile } = require("fs").promises;
const { result } = require("./names.js");
const start = async () => {
  try {
    await writeFile("./mind-grenade", `${result}`);
    console.log("Code working");
  } catch (error) {
    console.log(error);
  }
};
start();
