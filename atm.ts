#! usr/bin/env node
import inquirer from "inquirer";

let myPin: number = 1122;
let myBalance: number = 30000;

let Mypin = await inquirer.prompt([
  {
    name: "Pin",
    type: "number",
    message: "Please ENTER your PIN",
  },
]);
if (Mypin.Pin === myPin) {
  console.log("Your PIN is Correct");
  let userNeed = await inquirer.prompt([
    {
      name: "requirement",
      type: "list",
      message: "Please Select one below",
      choices: ["Cash Withdrawal", "Fast Cash", "Check Balance"],
    },
  ]);
  if (userNeed.requirement === "Cash Withdrawal") {
    let amount = await inquirer.prompt([
      {
        name: "userInput",
        type: "number",
        message: "Please ENTER your Amount",
      },
    ]);
    if (amount.userInput > myBalance) {
      console.log("Your have Insufficient Balance");
    } else {
      myBalance = myBalance - amount.userInput;
      console.log(`Your Balance is ${myBalance}`);
    }
  } else if (userNeed.requirement === "Fast Cash") {
    let fastWithdraw = await inquirer.prompt([
      {
        name: "Fastans",
        type: "list",
        message: "Please Select your amount",
        choices: ["500", "1000", "2000", "5000", "10000"],
      },
    ]);
    if (fastWithdraw.Fastans > myBalance) {
      console.log("Your have Insufficient Balance");
    } else {
      myBalance = myBalance - fastWithdraw.Fastans;
      console.log(`Your Balance is ${myBalance}`);
    }
  } else if (userNeed.requirement === "Check Balance") {
    console.log(`Your Balance is ${myBalance}`);
  }
} else {
  console.log("Your PIN is Incorrect");
}
