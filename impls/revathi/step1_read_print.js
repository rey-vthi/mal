const readline = require("readline");
const { stdin, stdout } = require("process");
const read_ast = require("./reader");
const pr_str = require("./printer");

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

const READ = (str) => read_ast(str);
const EVAL = (str) => str;
const PRINT = (ast) => pr_str(ast);

const rep = (str) => PRINT(EVAL(READ(str)));

const loop = () => {
  rl.question("user> ", (str) => {
    try {
      console.log(rep(str));
    } catch (err) {
      console.log(err);
    } finally {
      loop();
    }
  });
};

loop();
