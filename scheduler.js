const schedule = require("node-schedule");
const moment = require("moment-timezone");
const User = require("./User");
const sendBirthdayMessage = require("./messageService");

const sendBirthdayMessages = async () => {
  const currentDate = new Date();

  try {
    const users = await User.find();
    const promises = users.map(async (user) => {
      const { _id, first_name, location } = user;

      const birthday = moment(user.birthday)
        .tz(location)
        .hours(9)
        .minutes(0)
        .seconds(0);

      if (currentDate.getTime() === birthday.toDate().getTime()) {
        await sendBirthdayMessage(first_name);
      }
    });

    await Promise.all(promises);
  } catch (error) {
    console.error("Error sending birthday messages:", error);
  }
};

schedule.scheduleJob("0 9 * * *", sendBirthdayMessages);
