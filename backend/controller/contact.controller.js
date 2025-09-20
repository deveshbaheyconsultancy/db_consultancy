import transporter from "../config/mailer.js";

export const sendContact = async (req, res) => {
  const { name, phone, email, position, message } = req.body;

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER, // 👈 sender is always your Gmail
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nPosition: ${position}\nMessage: ${message}`,
    });

    res.json({
      success: true,
      error: false,
      message: "Form sent successfully!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: true,
      message: "Failed to send info",
    });
  }
};
