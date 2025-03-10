import {
  ConfirmEmailTemplate,
  VirtualEmailTemplate,
} from "@/components/EmailTemplate";
import { Resend } from "resend";

const RESEND_API_KEY = process.env.RESEND_API_KEY;

const handler = async (req, res) => {
  const resend = new Resend(RESEND_API_KEY);
  const formData = JSON.parse(req.body);

  try {
    const { data, error } = await resend.emails.send({
      from: "Boda Lau & Ari <noreply@laurayariel.site>",
      to: formData.email,
      subject: "Confirmación de asistencia",
      react: formData.willAttend
        ? ConfirmEmailTemplate({})
        : VirtualEmailTemplate({}),
    });

    if (error) {
      res
        .status(400)
        .json({ message: `Email could not be sent: ${JSON.stringify(error)}` });
    }

    res.status(200).json({ message: "Email sent" });
  } catch (err) {
    console.error(`ERROR: Something went wrong URL`, err);
    res.status(500).json(err);
  }
};

export default handler;
