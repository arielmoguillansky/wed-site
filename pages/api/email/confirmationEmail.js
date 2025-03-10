import {
  ConfirmEmailTemplate,
  VirtualEmailTemplate,
} from "@/components/EmailTemplate";
import { Resend } from "resend";

const RESEND_API_KEY = process.env.RESEND_API_KEY;

const handler = async (req, res) => {
  const formData = JSON.parse(req.body);

  try {
    const resend = new Resend(RESEND_API_KEY);

    resend.emails.send({
      from: "Boda Lau & Ari <vercel@resend.dev>",
      to: formData.email,
      subject: "Confirmación de asistencia",
      react: formData.willAttend
        ? ConfirmEmailTemplate({})
        : VirtualEmailTemplate({}),
    });
    console.log("~~~~~~ RESEND SENT~~~~~~~~~~");

    res.status(200).json({ message: "Email sent" });
  } catch (err) {
    console.error(`ERROR: Something went wrong URL`, err);
    res.status(500).json(err);
  }
};

export default handler;
