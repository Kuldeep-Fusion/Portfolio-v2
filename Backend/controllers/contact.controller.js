import Contact from "../models/contact.model.js";

export async function ContactData(req,res) {
    try {
        console.log(req.body); 
        const {name, email, phone, subject, message} =  await req.body;

        if(!name || !email || !phone ||  !subject || !message){
            return res.status(400).json({
                message: 'ALL FILEDS ARE REQUIRD ',
                success: false,
            });
        }

        const data = await Contact.create({
            name,
            email,
            phone,
            subject,
            message,
        });

        return res.status(201).json({
            message: 'Contact Created',
            success: true,
        });

    } catch (error) {
         return res.status(500).json({
            message: 'Failed to Created',
            success: false,
        });
        
    }    
}


export async function ContactGet(req, res) {
    try {
        const data = await Contact.find().sort({ createdAt: -1 });

        res.status(201).json({
            message: "GET DATA",
            success: true,
            data: data,
        });
    } catch (error) {
        console.log(error)
        res.status(201).json({
            message: "Failed to GET DATA",
            success: false,
        });
    }
    
}