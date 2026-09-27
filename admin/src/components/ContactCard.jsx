
import {
  CheckCheckIcon,
  Eye,
  Mail,
  Phone,
  Trash2,
} from "@animateicons/react/lucide";

import { useEffect, useState } from "react";

import { getContact } from "../services/api";

const ContactCard = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // =========================================
  // FETCH CONTACTS
  // =========================================

  const fetchContacts = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getContact();

      console.log("Contact response:", response);

      setContacts(response.data || []);
    } catch (error) {
      console.error(
        "Failed to fetch contacts:",
        error
      );

      setError("Unable to load contact messages.");
    } finally {
      setLoading(false);
    }
  };

  // =========================================
  // INITIAL FETCH
  // =========================================

  useEffect(() => {
    fetchContacts();
  }, []);

  // =========================================
  // LOADING
  // =========================================

  if (loading) {
    return (
      <section className="w-full">
        <div className="flex min-h-[300px] items-center justify-center">
          <div className="text-center">
            <div className="mx-auto h-6 w-6 animate-spin rounded-full border-2 border-white/10 border-t-[#9CFF00]" />

            <p className="mt-4 text-[8px] font-bold uppercase tracking-[0.25em] text-gray-600">
              Loading Messages
            </p>
          </div>
        </div>
      </section>
    );
  }

  // =========================================
  // ERROR
  // =========================================

  if (error) {
    return (
      <section className="w-full">
        <div className="flex min-h-[300px] items-center justify-center border border-red-500/10 bg-red-500/[0.02]">
          <div className="text-center">
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-red-400">
              {error}
            </p>

            <button
              type="button"
              onClick={fetchContacts}
              className="
                mt-4
                border
                border-white/10
                px-4
                py-2
                text-[7px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-gray-400
                transition
                hover:border-[#9CFF00]/30
                hover:text-[#9CFF00]
              "
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full">
      {/* =====================================
          HEADER
      ===================================== */}

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-2 text-[8px] font-bold uppercase tracking-[0.3em] text-[#9CFF00]">
            Communication
          </p>

          <h1 className="text-2xl font-black uppercase tracking-[-0.04em] text-white sm:text-3xl">
            Contact Messages
            <span className="text-[#9CFF00]">
              .
            </span>
          </h1>

          <p className="mt-2 text-xs text-gray-600">
            Manage messages received from your
            portfolio website.
          </p>
        </div>

        {/* Total Messages */}

        <div className="border border-white/[0.06] bg-white/[0.02] px-4 py-3">
          <p className="text-[7px] font-bold uppercase tracking-[0.2em] text-gray-600">
            Total Messages
          </p>

          <p className="mt-1 text-lg font-black text-[#9CFF00]">
            {contacts.length}
          </p>
        </div>
      </div>

      {/* =====================================
          EMPTY STATE
      ===================================== */}

      {contacts.length === 0 ? (
        <div className="flex min-h-[300px] items-center justify-center border border-dashed border-white/[0.08]">
          <div className="text-center">
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-gray-600">
              No Messages Found
            </p>

            <p className="mt-2 text-[8px] text-gray-700">
              Contact messages will appear here.
            </p>
          </div>
        </div>
      ) : (
        /* =====================================
           TABLE
        ===================================== */

        <div className="overflow-hidden border border-white/[0.06] bg-[#050805]">
          {/* Table Header */}

          <div className="hidden border-b border-white/[0.06] bg-white/[0.02] lg:grid lg:grid-cols-[1.5fr_1.5fr_1fr_1.4fr_1fr_0.8fr_100px]">
            <TableHeading>
              Name
            </TableHeading>

            <TableHeading>
              Email
            </TableHeading>

            <TableHeading>
              Phone
            </TableHeading>

            <TableHeading>
              Subject
            </TableHeading>

            <TableHeading>
              Date
            </TableHeading>

            <TableHeading>
              Status
            </TableHeading>

            <TableHeading>
              Actions
            </TableHeading>
          </div>

          {/* Rows */}

          <div className="divide-y divide-white/[0.05]">
            {contacts.map((contact) => (
              <ContactRow
                key={contact._id || contact.id}
                contact={contact}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

/* =========================================
   TABLE HEADING
========================================= */

const TableHeading = ({ children }) => {
  return (
    <div className="px-4 py-3 text-[7px] font-bold uppercase tracking-[0.2em] text-gray-600">
      {children}
    </div>
  );
};

/* =========================================
   CONTACT ROW
========================================= */

const ContactRow = ({ contact }) => {
  const contactId =
    contact._id || contact.id;

  const status =
    contact.status || "New";

  return (
    <div
      className="
        group
        grid
        gap-4
        p-4
        transition-all
        duration-300
        hover:bg-[#9CFF00]/[0.025]
        lg:grid-cols-[1.5fr_1.5fr_1fr_1.4fr_1fr_0.8fr_100px]
        lg:items-center
        lg:gap-0
        lg:p-0
      "
    >
      {/* Name */}

      <div className="lg:px-4 lg:py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#9CFF00]/20 bg-[#9CFF00]/[0.04]">
            <span className="text-[10px] font-black text-[#9CFF00]">
              {contact.name
                ?.charAt(0)
                ?.toUpperCase()}
            </span>
          </div>

          <div className="min-w-0">
            <p className="truncate text-[10px] font-bold uppercase tracking-wide text-white">
              {contact.name}
            </p>

            <p className="mt-1 text-[7px] uppercase tracking-[0.15em] text-gray-700">
              ID #
              {String(contactId).slice(-6)}
            </p>
          </div>
        </div>
      </div>

      {/* Email */}

      <div className="flex items-center gap-2 lg:px-4 lg:py-4">
        <Mail
          size={13}
          className="shrink-0 text-gray-700"
        />

        <a
          href={`mailto:${contact.email}`}
          className="truncate text-[9px] text-gray-500 transition hover:text-[#9CFF00]"
        >
          {contact.email}
        </a>
      </div>

      {/* Phone */}

      <div className="flex items-center gap-2 lg:px-4 lg:py-4">
        <Phone
          size={13}
          className="shrink-0 text-gray-700"
        />

        <a
          href={`tel:${contact.phone}`}
          className="text-[9px] text-gray-500 transition hover:text-[#9CFF00]"
        >
          {contact.phone}
        </a>
      </div>

      {/* Subject */}

      <div className="lg:px-4 lg:py-4">
        <p className="text-[9px] font-medium text-gray-400">
          {contact.subject}
        </p>
      </div>

      {/* Date */}

      <div className="lg:px-4 lg:py-4">
        <p className="text-[8px] uppercase tracking-wide text-gray-600">
          {contact.createdAt
            ? new Date(
                contact.createdAt
              ).toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })
            : contact.date || "-"}
        </p>
      </div>

      {/* Status */}

      <div className="lg:px-4 lg:py-4">
        <span
          className={`
            inline-flex
            items-center
            gap-1.5
            border
            px-2
            py-1
            text-[7px]
            font-bold
            uppercase
            tracking-[0.15em]
            ${
              status === "New"
                ? "border-[#9CFF00]/20 bg-[#9CFF00]/[0.05] text-[#9CFF00]"
                : "border-white/[0.08] bg-white/[0.02] text-gray-600"
            }
          `}
        >
          {status === "New" && (
            <span className="h-1 w-1 rounded-full bg-[#9CFF00]" />
          )}

          {status}
        </span>
      </div>

      {/* Actions */}

      <div className="flex items-center gap-1 lg:px-4 lg:py-4">
        {/* View */}

        <button
          type="button"
          title="View message"
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            border
            border-white/[0.06]
            text-gray-600
            transition-all
            hover:border-[#9CFF00]/30
            hover:bg-[#9CFF00]/[0.04]
            hover:text-[#9CFF00]
          "
        >
          <Eye size={13} />
        </button>

        {/* Mark as read */}

        <button
          type="button"
          title="Mark as read"
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            border
            border-white/[0.06]
            text-gray-600
            transition-all
            hover:border-[#9CFF00]/30
            hover:bg-[#9CFF00]/[0.04]
            hover:text-[#9CFF00]
          "
        >
          <CheckCheckIcon size={13} />
        </button>

        {/* Delete */}

        <button
          type="button"
          title="Delete"
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            border
            border-white/[0.06]
            text-gray-600
            transition-all
            hover:border-red-500/30
            hover:bg-red-500/[0.04]
            hover:text-red-400
          "
        >
          <Trash2 size={13} />
        </button>
      </div>
    </div>
  );
};

export default ContactCard;

