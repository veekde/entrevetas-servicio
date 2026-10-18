import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { CONTACT_FORM_ENDPOINT } from "@/constants/contact";
import { trackEvent } from "@/lib/analytics";

type Status = "idle" | "sending" | "success" | "error";

const ContactForm = () => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ firstName: "", lastName: "", contact: "", message: "" });

  const inputClass =
    "w-full bg-transparent border-b border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/40 py-2 text-[15px] focus:outline-none focus:border-primary-foreground/70 transition-colors duration-300";

  const handleChange = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(CONTACT_FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          contact: form.contact,
          message: form.message,
        }),
      });
      if (res.ok) {
        setStatus("success");
        trackEvent("contact_form_submit");
        setForm({ firstName: "", lastName: "", contact: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="mt-8 w-full max-w-md mx-auto">
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="text-[13px] tracking-wide text-primary-foreground/60 hover:text-primary-foreground/90 underline underline-offset-4 transition-colors duration-300"
        >
          {t("contact.form.toggle")}
        </button>
      )}

      <AnimatePresence>
        {open && (
          <motion.form
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={handleSubmit}
            className="overflow-hidden text-left"
          >
            <div className="grid grid-cols-2 gap-4 pt-2">
              <input
                type="text"
                required
                placeholder={t("contact.form.firstName")}
                value={form.firstName}
                onChange={handleChange("firstName")}
                className={inputClass}
              />
              <input
                type="text"
                required
                placeholder={t("contact.form.lastName")}
                value={form.lastName}
                onChange={handleChange("lastName")}
                className={inputClass}
              />
            </div>
            <input
              type="text"
              required
              placeholder={t("contact.form.contact")}
              value={form.contact}
              onChange={handleChange("contact")}
              className={`${inputClass} mt-4`}
            />
            <textarea
              required
              rows={3}
              placeholder={t("contact.form.message")}
              value={form.message}
              onChange={handleChange("message")}
              className={`${inputClass} mt-4 resize-none`}
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-5 inline-flex items-center justify-center bg-accent hover:bg-accent/90 disabled:opacity-60 text-accent-foreground px-8 py-3 rounded-full text-sm font-medium tracking-widest uppercase transition-colors duration-300"
            >
              {status === "sending" ? t("contact.form.sending") : t("contact.form.submit")}
            </button>

            {status === "success" && (
              <p className="mt-3 text-[14px] text-primary-foreground/80">{t("contact.form.success")}</p>
            )}
            {status === "error" && (
              <p className="mt-3 text-[14px] text-red-300">{t("contact.form.error")}</p>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
