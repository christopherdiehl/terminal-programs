require("dotenv").load(); // uncomment if you set the ENV vars in bashrc
const twilio = require("twilio");
const chalk = require("chalk");

const TWILIO_ACCOUNT_SID = process.env["TWILIO_ACCOUNT_SID"];
const TWILIO_AUTH_TOKEN = process.env["TWILIO_AUTH_TOKEN"];

const client = new twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
const myNumber = "+15704122638";
const twilioNumber = "+15704735604";

const log = console.log;
async function orderFood(food) {
  try {
    const message = await client.messages.create({
      body: `Can I please get ${food}`,
      to: myNumber, // Text this number
      from: twilioNumber // From a valid Twilio number
    });
    log(chalk.green(`Message sent successfully with sid: ${message.sid}`));
  } catch (error) {
    log(chalk.red(err));
  }
}

let args = process.argv;
if (args.length < 3) {
  log(chalk.red("please specify at least one food you would like to order"));
  return;
}
args.splice(0, 2);
const food = args.reduce((sum, food) => {
  return `${sum} & ${food}`;
});

orderFood(food);
//cleanup here
