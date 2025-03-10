import {
  ConfirmEmailTemplate,
  VirtualEmailTemplate,
} from "@/components/EmailTemplate";
import { Resend } from "resend";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const resend = new Resend(RESEND_API_KEY);

const handler = async (req, res) => {
  const formData = JSON.parse(req.body);

  try {
    const { data, error } = await resend.emails.send({
      from: "Boda Lau & Ari <vercel@resend.dev>",
      to: formData.email,
      subject: "Confirmación de asistencia",
      text: "HGOLA",
    });
    console.log("~~~~~~ RESEND SENT~~~~~~~~~~", data);

    res.status(200).json({ message: "Email sent" });
  } catch (err) {
    console.error(`ERROR: Something went wrong URL`, err);
    res.status(500).json(err);
  }
};

export default handler;
