export const sendMail = data => MailApp.sendEmail(data.to, data.subject, data.content);
