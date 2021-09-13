import client from 'twilio';
import dotenv from 'dotenv';
dotenv.config();

const
    accountSid = process.env.TWILIO_ACCOUNT_SID,
    authToken = process.env.TWILIO_AUTH_TOKEN,
    twilio = client(accountSid, authToken);

twilio.messages
    .create({ body: '\nSup, sent this via twilio from my code. Also, MobiWorks (AMS) also has twilio built in as well, I already tested it. \n-Jason', from: '+18306943244', to: '+17577520437' })
    .then(message => console.log(message.sid));