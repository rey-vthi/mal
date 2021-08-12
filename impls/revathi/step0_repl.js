const readline = require("readline");
const { stdin, stdout } = require("process");

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

const READ = (str) => str;
const EVAL = (str) => str;
const PRINT = (str) => str;

const rep = (str) => PRINT(EVAL(READ(str)));

const loop = () => {
  rl.question("user> ", (str) => {
    console.log(rep(str));
    loop();
  });
};

loop();
