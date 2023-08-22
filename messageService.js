const axios = require("axios");

const sendBirthdayMessage = async (fullName) => {
  const message = `Hey, ${fullName}, it’s your birthday`;
  const emailServiceURL = "https://email-service.digitalenvision.com.au"; // Update with actual URL

  try {
    const response = await axios.post(`${emailServiceURL}/send`, { message });
    return response.data;
  } catch (error) {
    console.error("Error sending birthday message:", error.message);
    return { error: "Error sending birthday message" };
  }
};

module.exports = sendBirthdayMessage;
