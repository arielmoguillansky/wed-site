import {
  ConfirmEmailTemplate,
  VirtualEmailTemplate,
} from "@/components/EmailTemplate";
import { Resend } from "resend";

const handler = async (req, res) => {
  const formData = JSON.parse(req.body);

  try {
    const resend = new Resend("re_Zg2c6oVU_HgL6JVFY9iNdfZVcXanZPY17");
    console.log(formData.willAttend);

    resend.emails.send({
      from: "Boda Lau & Ari <vercel@resend.dev>",
      to: formData.email,
      subject: `- Confirmación de asistencia - ${
        formData.willAttend
          ? "Hemos recibido tu confirmación!"
          : "Lamentamos que no puedas asistir"
      }`,
      react: formData.willAttend
        ? ConfirmEmailTemplate({})
        : VirtualEmailTemplate({}),
    });

    res.status(200).json({ message: "Email sent" });
  } catch (err) {
    console.error(`ERROR: Something went wrong URL`, err);
    res.status(500).json(err);
  }
};

export default handler;
