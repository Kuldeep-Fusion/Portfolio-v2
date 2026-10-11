import Contact from "../models/contact.model.js";

// @desc    Get all contacts
// @route   GET /api/contact
// @access  Public (or Private depending on your auth)
export async function getContacts(req, res) {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            message: "Contacts retrieved successfully",
            data: contacts,
        });
    } catch (error) {
        console.error("Error in getContacts:", error);
        return res.status(500).json({
            success: false,
            message: "Server Error: Failed to retrieve contacts",
        });
    }
}

// @desc    Get single contact by ID
// @route   GET /api/contact/:id
// @access  Public
export async function getContactById(req, res) {
    try {
        const contact = await Contact.findById(req.params.id);

        if (!contact) {
            return res.status(404).json({
                success: false,
                message: "Contact not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Contact retrieved successfully",
            data: contact,
        });
    } catch (error) {
        console.error("Error in getContactById:", error);
        return res.status(500).json({
            success: false,
            message: "Server Error: Failed to retrieve contact",
        });
    }
}

// @desc    Create a new contact
// @route   POST /api/contact
// @access  Public
export async function createContact(req, res) {
    try {
        const { name, email, phone, subject, message } = req.body;

        if (!name || !email || !phone || !subject || !message) {
            return res.status(400).json({
                success: false,
                message: "Please provide all required fields (name, email, phone, subject, message)",
            });
        }

        const newContact = await Contact.create({
            name,
            email,
            phone,
            subject,
            message,
        });

        return res.status(201).json({
            success: true,
            message: "Contact created successfully",
            data: newContact,
        });
    } catch (error) {
        console.error("Error in createContact:", error);
        return res.status(500).json({
            success: false,
            message: "Server Error: Failed to create contact",
        });
    }
}

// @desc    Update a contact
// @route   PUT /api/contact/:id
// @access  Public
export async function updateContact(req, res) {
    try {
        let contact = await Contact.findById(req.params.id);

        if (!contact) {
            return res.status(404).json({
                success: false,
                message: "Contact not found",
            });
        }

        contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        return res.status(200).json({
            success: true,
            message: "Contact updated successfully",
            data: contact,
        });
    } catch (error) {
        console.error("Error in updateContact:", error);
        return res.status(500).json({
            success: false,
            message: "Server Error: Failed to update contact",
        });
    }
}

// @desc    Delete a contact
// @route   DELETE /api/contact/:id
// @access  Public
export async function deleteContact(req, res) {
    try {
        const contact = await Contact.findById(req.params.id);

        if (!contact) {
            return res.status(404).json({
                success: false,
                message: "Contact not found",
            });
        }

        await Contact.findByIdAndDelete(req.params.id);

        return res.status(200).json({
            success: true,
            message: "Contact deleted successfully",
            data: {},
        });
    } catch (error) {
        console.error("Error in deleteContact:", error);
        return res.status(500).json({
            success: false,
            message: "Server Error: Failed to delete contact",
        });
    }
}