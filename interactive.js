import readline from 'readline'
import chalk from 'chalk';


export function solveQuadraticEquation(a, b, c) {
  console.log(`Equation is: (${a})x^2 + (${b})x +(${c}) = 0 `)
  if (a === 0) return console.log('a must be not 0')
  let discriminant = b * b - 4 * a * c;

  if (isNaN(discriminant)) {
    console.log(chalk.red('Please enter numerical values for a, b, c'));
    return;
  }
  if (discriminant < 0) {
    console.log(chalk.red('There is 0 roots'));
  } else if (discriminant === 0) {
    let x = -b / (2 * a);
    console.log(chalk.yellow(`There is 1 root:\nx = ${x}`));
  } else {
    let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    console.log(chalk.yellow(`There are 2 roots:\n x1 = ${x1}\n x2 = ${x2}`));
  }
}


export const interactiveMode = () => {

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function promptUser(question) {
      return new Promise((resolve) => {
        rl.question(`${question}`, (answer) => {
          if (isNaN(answer)) {
            console.log(chalk.red('Please enter a numerical value'));
            promptUser(question).then(resolve);
          } else {
            resolve(parseFloat(answer));
          }
        });
      });
    }
  
  // prompt user for input and solve quadratic equation
  (async function() {
    let a = await promptUser('Enter the coefficient a: ');
    let b = await promptUser('Enter the coefficient b: ');
    let c = await promptUser('Enter the coefficient c: ');
    console.log(`a = ${chalk.green(a)}`);
    console.log(`b = ${chalk.green(b)}`,);
    console.log(`c = ${chalk.green(c)}`,);
    solveQuadraticEquation(a, b, c);
    rl.close();
  })();
}

