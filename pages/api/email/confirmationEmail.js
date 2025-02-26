import emailMisspelled, { all } from "email-misspelled";
import sgMail from '@sendgrid/mail'



const customDomains = [...all, "protonmail.com", "hey.com", "usa.com"];
const emailChecker = emailMisspelled({ domains: customDomains });

const handler = async (req, res) => {
  const formData = JSON.parse(req.body);


  try {

    sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY)
const msg = {
  to: 'test@example.com', // Change to your recipient
  from: 'test@example.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent SGMAIL')
  })
  .catch((error) => {
    console.error(error)
  })


    res.status(200).json({ ...data });
  } catch (err) {
    console.error(`ERROR: Something went wrong URL`, err);
    res.status(500).json(err);
  }
};

export default handler;
