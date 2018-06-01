#!/usr/bin/env node
require("dotenv").load(); // uncomment if you set the ENV vars in bashrc
const TWILIO_ACCOUNT_SID = process.env["TWILIO_ACCOUNT_SID"];
const TWILIO_AUTH_TOKEN = process.env["TWILIO_AUTH_TOKEN"];
const twilio = require("twilio");
const client = new twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
const myNumber = "+15704122638";
const twilioNumber = "+15704735604";
client.messages
  .create({
    body: "Can I please get a coffee?",
    to: myNumber, // Text this number
    from: twilioNumber // From a valid Twilio number
  })
  .then(message => console.log(message.sid))
  .catch(err => console.error(err));
