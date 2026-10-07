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
        <div className="flex min-h-[400px] items-center justify-center">
          <div className="text-center">
            <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-white/10 border-t-[#9CFF00]" />

            <p className="mt-4 text-xs font-bold uppercase tracking-[0.25em] text-gray-500">
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
        <div className="flex min-h-[400px] items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/[0.05]">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-400">
              {error}
            </p>

            <button
              type="button"
              onClick={fetchContacts}
              className="
                mt-6
                rounded-lg
                border
                border-white/10
                bg-white/5
                px-6
                py-3
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-gray-300
                transition
                hover:border-[#9CFF00]/40
                hover:bg-[#9CFF00]/10
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

      <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-[#9CFF00]">
            Communication
          </p>

          <h1 className="text-3xl font-black uppercase tracking-[-0.04em] text-white sm:text-4xl">
            Contact Messages
            <span className="text-[#9CFF00] drop-shadow-[0_0_10px_#9CFF00]">
              .
            </span>
          </h1>

          <p className="mt-3 text-sm text-gray-400">
            Manage messages received from your
            portfolio website.
          </p>
        </div>

        {/* Total Messages */}

        <div className="rounded-xl border border-[#9CFF00]/20 bg-[#9CFF00]/10 px-5 py-4 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9CFF00]/80">
            Total Messages
          </p>

          <p className="mt-1 text-2xl font-black text-[#9CFF00]">
            {contacts.length}
          </p>
        </div>
      </div>

      {/* =====================================
          EMPTY STATE
      ===================================== */}

      {contacts.length === 0 ? (
        <div className="flex min-h-[400px] items-center justify-center rounded-2xl border border-dashed border-white/[0.1]">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-gray-500">
              No Messages Found
            </p>

            <p className="mt-2 text-xs text-gray-600">
              Contact messages will appear here.
            </p>
          </div>
        </div>
      ) : (
        /* =====================================
           TABLE
        ===================================== */

        <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#050805] shadow-xl">
          {/* Table Header */}

          <div className="hidden border-b border-white/[0.08] bg-white/[0.03] lg:grid lg:grid-cols-[1.5fr_1.5fr_1fr_1.4fr_1fr_0.8fr_120px]">
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
    <div className="px-5 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
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
        gap-5
        p-5
        transition-all
        duration-300
        hover:bg-[#9CFF00]/[0.03]
        lg:grid-cols-[1.5fr_1.5fr_1fr_1.4fr_1fr_0.8fr_120px]
        lg:items-center
        lg:gap-0
        lg:p-0
      "
    >
      {/* Name */}

      <div className="lg:px-5 lg:py-5">
        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#9CFF00]/20 bg-[#9CFF00]/10 transition-transform group-hover:scale-110">
            <span className="text-sm font-black text-[#9CFF00]">
              {contact.name
                ?.charAt(0)
                ?.toUpperCase()}
            </span>
          </div>

          <div className="min-w-0">
            <p className="truncate text-xs font-bold uppercase tracking-wide text-gray-200 transition group-hover:text-white">
              {contact.name}
            </p>

            <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-gray-600">
              ID #
              {String(contactId).slice(-6)}
            </p>
          </div>
        </div>
      </div>

      {/* Email */}

      <div className="flex items-center gap-3 lg:px-5 lg:py-5">
        <Mail
          size={16}
          className="shrink-0 text-gray-600"
        />

        <a
          href={`mailto:${contact.email}`}
          className="truncate text-xs text-gray-400 transition hover:text-[#9CFF00]"
        >
          {contact.email}
        </a>
      </div>

      {/* Phone */}

      <div className="flex items-center gap-3 lg:px-5 lg:py-5">
        <Phone
          size={16}
          className="shrink-0 text-gray-600"
        />

        <a
          href={`tel:${contact.phone}`}
          className="text-xs text-gray-400 transition hover:text-[#9CFF00]"
        >
          {contact.phone}
        </a>
      </div>

      {/* Subject */}

      <div className="lg:px-5 lg:py-5">
        <p className="text-xs font-medium text-gray-400">
          {contact.subject}
        </p>
      </div>

      {/* Date */}

      <div className="lg:px-5 lg:py-5">
        <p className="text-xs uppercase tracking-wide text-gray-500">
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

      <div className="lg:px-5 lg:py-5">
        <span
          className={`
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            px-3
            py-1.5
            text-[9px]
            font-bold
            uppercase
            tracking-[0.15em]
            ${
              status === "New"
                ? "border-[#9CFF00]/30 bg-[#9CFF00]/10 text-[#9CFF00]"
                : "border-white/10 bg-white/5 text-gray-400"
            }
          `}
        >
          {status === "New" && (
            <span className="h-2 w-2 rounded-full bg-[#9CFF00]" />
          )}

          {status}
        </span>
      </div>

      {/* Actions */}

      <div className="flex items-center gap-2 lg:px-5 lg:py-5">
        {/* View */}

        <button
          type="button"
          title="View message"
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-lg
            border
            border-white/10
            bg-white/5
            text-gray-400
            transition-all
            hover:border-[#9CFF00]/40
            hover:bg-[#9CFF00]/10
            hover:text-[#9CFF00]
            hover:scale-[1.05]
          "
        >
          <Eye size={16} />
        </button>

        {/* Mark as read */}

        <button
          type="button"
          title="Mark as read"
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-lg
            border
            border-white/10
            bg-white/5
            text-gray-400
            transition-all
            hover:border-[#9CFF00]/40
            hover:bg-[#9CFF00]/10
            hover:text-[#9CFF00]
            hover:scale-[1.05]
          "
        >
          <CheckCheckIcon size={16} />
        </button>

        {/* Delete */}

        <button
          type="button"
          title="Delete"
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-lg
            border
            border-white/10
            bg-white/5
            text-gray-400
            transition-all
            hover:border-red-500/40
            hover:bg-red-500/10
            hover:text-red-400
            hover:scale-[1.05]
          "
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
