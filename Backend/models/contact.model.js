import mongoose from 'mongoose'


const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        email : {
            type:String,
            required: true,
            index: true,
        },
        phone: {
            type: String,
            required: true,
            unique: true,
        },
        subject: {
            type: String,
            required: true,
            unique: true,
        },
        message: {
            type: String,
        }
    }, 
    {
        timestamps: true
    }
)

const Contact  = mongoose.model('Contact', contactSchema);

export default Contact;