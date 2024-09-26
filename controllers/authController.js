const Contact = require('../models/contact');
// const Donation = require('../models/donation');
// const rezorpay = require('razorpay');


// const razorpay = new rezorpay({
//     key_id: process.env.KEY_ID,
//     key_secret: process.env.KEY_SECRET
// })


const contactForm = async (req, res) => {
    const contact = new Contact({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    });
    try {
        const savedContact = await contact.save();
        res.send(savedContact);
    } catch (error) {
        res.send(error);
    }
}

// const donate = async (req, res) => {
//     const options = {
//         amount: amount * 100, // Amount in the smallest unit (paise for INR)
//         currency,
//         receipt: crypto.randomBytes(10).toString('hex'),
//     };

//     try {
//         const order = await razorpay.orders.create(options);
//         res.status(200).json({ orderId: order.id });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// }

// const verifyPayment = async (req, res) => {
//     const { razorpay_order_id, razorpay_payment_id, razorpay_signature, name, email, amount } = req.body;

//     const hmac = crypto.createHmac('sha256', 'YOUR_RAZORPAY_KEY_SECRET');
//     hmac.update(razorpay_order_id + "|" + razorpay_payment_id);
//     const generated_signature = hmac.digest('hex');

//     if (generated_signature === razorpay_signature) {
//         try {
//             // Save the donation details to the database
//             const donation = new Donation({
//                 name,
//                 email,
//                 amount,
//                 paymentId: razorpay_payment_id,
//                 orderId: razorpay_order_id
//             });

//             await donation.save();

//             res.status(200).json({ message: "Payment verified and donation saved successfully!" });
//         } catch (error) {
//             res.status(500).json({ error: "Error saving donation data." });
//         }
//     } else {
//         res.status(400).json({ error: "Payment verification failed." });
//     }
// }

module.exports = {
    contactForm,
    // donate,
    // verifyPayment
}