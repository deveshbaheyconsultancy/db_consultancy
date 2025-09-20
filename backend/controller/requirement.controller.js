import transporter from "../config/mailer.js";

export const sendRequirement = async (req, res) => {
  const {
    name,
    phone,
    email,
    bookingDate,
    message,
    service,
    Comname,
    comSize,
    comUrl,
  } = req.body;
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: "New Requirement From Submission",
      text: `
        Name: ${name}
        Phone: ${phone}
        Email: ${email}
        Booking Date: ${bookingDate}
        Service: ${service}
        Company Name: ${Comname}
        Company Size: ${comSize}
        Company URL: ${comUrl}
        
        Message:
        ${message}
      `,
    });

    res.json({
      success: true,
      error: false,
      message: "Requirement form sent successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: true,
      message: "Failed to send requirement form ",
    });
  }
};
