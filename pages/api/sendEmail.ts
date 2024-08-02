// pages/api/sendEmails.ts
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
require('dotenv').config();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const {
            firstname,
            lastname,
            email,
            phone,
            address,
            city,
            zipcode,
            availableappointmenttime,
            services,
            message
        } = req.body;

        console.log({
          firstname,
          lastname,
          email,
          phone,
          address,
          city,
          zipcode,
          availableappointmenttime,
          services,
          message,
        });

        try {
            // Configuración del transportador de Nodemailer
            const transporter = nodemailer.createTransport({
                host: 'mail.foxexteriorsolutionswny.com',
                port: 465,
                secure: true, // true para el puerto 465
                auth: {
                    user: process.env.SMTP_USER, // Coloca tus credenciales aquí
                    pass: process.env.SMTP_PASS,
                },
            });

            // Configuración del correo electrónico
            const mailOptions = {
                from: 'foxexteriorsolutionswny@foxexteriorsolutionswny.com',
                to: 'alexism@foxexteriorsolutionswny.com, josep@foxexteriorsolutionswny.com, support@foxexteriorsolutionswny.com',
                subject: 'New Contact Form Submission',
                html: `<p><strong>First Name:</strong> ${firstname}</p>
                       <p><strong>Last Name:</strong> ${lastname}</p>
                       <p><strong>Email:</strong> ${email}</p>
                       <p><strong>Phone:</strong> ${phone}</p>
                       <p><strong>Address:</strong> ${address}</p>
                       <p><strong>City:</strong> ${city}</p>
                       <p><strong>Zip Code:</strong> ${zipcode}</p>
                       <p><strong>Available Appointment Time:</strong> ${availableappointmenttime}</p>
                       <p><strong>Services:</strong> ${services}</p>
                       <p><strong>Message:</strong> ${message}</p>`,
            };

            // Enviar el correo electrónico
            await transporter.sendMail(mailOptions);

            return res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ message: 'Error sending email' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
