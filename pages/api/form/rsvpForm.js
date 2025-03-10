import emailMisspelled, { all } from "email-misspelled";

const customDomains = [...all, "protonmail.com", "hey.com", "usa.com"];
const emailChecker = emailMisspelled({ domains: customDomains });

const handler = async (req, res) => {
  const formData = JSON.parse(req.body);
  const emailSuggestions = emailChecker(formData["104"]);

  const originalInput =
    emailSuggestions.length > 0 ? emailSuggestions[0].original : "";
  const curedEmailAddress =
    emailSuggestions.length > 0
      ? emailSuggestions[0].corrected
      : formData.email;

  try {
    const response = await fetch(
      `https://api.jotform.com/form/${process.env.NEXT_PUBLIC_JOTFORM_ID}/submissions`,
      {
        method: "post",
        mode: "cors",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
          APIKEY: process.env.NEXT_PUBLIC_JOTFORM_API_KEY,
        },
      }
    );

    const data = await response.json();

    res.status(200).json({ ...data });
  } catch (err) {
    console.error(`ERROR: Something went wrong URL`, err);
    res.status(500).json(err);
  }
};

export default handler;
