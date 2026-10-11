import { Eye, Mail, Phone, Trash2, CheckCheckIcon } from "@animateicons/react/lucide";
import { useEffect, useState } from "react";
import { getContact, deleteContactMessage } from "../services/api";

const ContactCard = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchContacts = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await getContact();
      setContacts(response?.data || []);
    } catch (error) {
      console.error("Failed to fetch contacts:", error);
      setError("Unable to load contact messages.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if(window.confirm("Are you sure you want to delete this message?")) {
      try {
        await deleteContactMessage(id);
        fetchContacts();
      } catch (err) {
        alert("Failed to delete contact.");
      }
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-gray-200 border-t-blue-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-64 flex-col items-center justify-center rounded-xl border border-red-200 bg-red-50 text-center p-6 shadow-sm">
        <p className="text-sm font-medium text-red-600">{error}</p>
        <button
          onClick={fetchContacts}
          className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-xs font-medium text-white hover:bg-blue-700 transition"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <section className="w-full">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Contact Messages</h1>
          <p className="mt-1 text-sm text-gray-500">Manage messages from your portfolio.</p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white px-4 py-2 shadow-sm">
          <p className="text-xs font-medium text-gray-500">Total</p>
          <p className="text-lg font-bold text-blue-600">{contacts.length}</p>
        </div>
      </div>

      {contacts.length === 0 ? (
        <div className="flex h-64 flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 bg-white shadow-sm">
          <p className="text-sm font-medium text-gray-500">No Messages Found</p>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {contacts.map((contact) => (
            <div key={contact._id || contact.id} className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition hover:shadow-md">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 font-bold border border-blue-100">
                    {contact.name?.charAt(0)?.toUpperCase()}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">{contact.name}</h3>
                    <p className="text-xs text-gray-500">
                       {contact.createdAt ? new Date(contact.createdAt).toLocaleDateString() : contact.date || "-"}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleDelete(contact._id || contact.id)}
                  className="text-gray-400 hover:text-red-500 transition p-1 rounded-md hover:bg-red-50"
                >
                  <Trash2 size={16} />
                </button>
              </div>

              <div className="space-y-2 mb-4">
                <a href={`mailto:${contact.email}`} className="flex items-center gap-2 text-xs text-gray-500 hover:text-blue-600 transition">
                  <Mail size={14} /> {contact.email}
                </a>
                <a href={`tel:${contact.phone}`} className="flex items-center gap-2 text-xs text-gray-500 hover:text-blue-600 transition">
                  <Phone size={14} /> {contact.phone}
                </a>
              </div>

              <div className="rounded-lg bg-gray-50 border border-gray-100 p-3">
                <p className="text-xs font-semibold text-gray-800 mb-1">{contact.subject}</p>
                <p className="text-xs text-gray-500 line-clamp-3">{contact.message || "No message content."}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ContactCard;
