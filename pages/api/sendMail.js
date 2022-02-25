const path = require('path');
const fsPromises = require('fs').promises;

const API_KEY = '5f8a7e9580ae2c60dabfef26e87a68e9-c4d287b4-45e8444e';
const DOMAIN = 'sandbox019046466fed4b25b06823bfb407f401.mailgun.org';

const formData = require('form-data');
const Mailgun = require('mailgun.js');
// const Redis = require("ioredis");

// let client = new Redis("rediss://:863b0ba588864ab1a12dd972996fdcc6@eu1-good-quetzal-35510.upstash.io:35510");

const mailgun = new Mailgun(formData);
const client = mailgun.client({ username: 'api', key: API_KEY });

const sendMediaFile = async () => {
  const filepath = path.join(__dirname, 'sample.png');
//   console.log(path.join(__dirname, 'sample.png'));
  try {
    const file = {
      filename: 'sample.png',
      data: await fsPromises.readFile(filepath)
    };
    const attachment = [file];

    const data = {
      from: 'support@digitalxtwin.io',
      to: ['excelrock_mitesh@yahoo.com'],
    //   cc: 'baz@example.com',
    //   bcc: 'bar@example.com',
      subject: 'Regarding accessorizing the profile picture',
      text: 'Hey awesome people, How high are you?',
      html: '<html>HTML version of the body</html>',
      attachment
    };

    const result = await client.messages.create(DOMAIN, data);
    return result
    // console.log(result);
  } catch (error) {
    // console.error(error);
    return error
  }
}
sendMediaFile()


