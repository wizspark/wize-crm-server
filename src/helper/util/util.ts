import * as nodeMailer from "nodemailer";

export async function sendEmail() {
    const transporter = nodeMailer.createTransport({
        service: '__SERVICE_PROVIDER__',
        auth: {
            user: '__USER__',
            pass: '__PASSWORD__'
        }
    });

    return new Promise((resolve, reject) => {
        transporter.sendMail({
            from: 'anjani@wizni.com',
            to: 'anjani@wizni.com',
            subject: 'Test Email From TypeScript Client',
            text: 'Test Body',
            html: 'Test Body'
        }, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
}