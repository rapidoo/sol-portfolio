"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mojlbjoe", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        const data = await response.json();
        setErrorMessage(data.error || "Une erreur est survenue. Veuillez réessayer.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Erreur de connexion. Veuillez réessayer.");
      setStatus("error");
    }
  }

  return (
    <>
      <div className="min-h-screen pt-24 pb-12">
        <section className="max-w-2xl mx-auto px-6 py-16">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-charcoal/60 hover:text-charcoal transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Retour
          </Link>

          {/* Header */}
          <div className="mb-12">
            <p className="text-sol-orange font-mono text-sm mb-2">CONTACT</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Travaillons ensemble
            </h1>
            <p className="text-charcoal/60 text-lg">
              Une question, un projet, une collaboration ? N&apos;hésitez pas à me contacter.
            </p>
          </div>

          {/* Success Message */}
          {status === "success" && (
            <div className="bg-sol-green/10 border border-sol-green/30 rounded-2xl p-6 mb-8">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-sol-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-semibold text-charcoal">Message envoyé !</h3>
                  <p className="text-charcoal/60 text-sm">Merci pour votre message. Je vous répondrai rapidement.</p>
                </div>
              </div>
            </div>
          )}

          {/* Form */}
          {status !== "success" && (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nom <span className="text-sol-orange">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-white border border-charcoal/10 rounded-xl focus:outline-none focus:border-sol-orange focus:ring-2 focus:ring-sol-orange/20 transition-all"
                  placeholder="Votre nom"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email <span className="text-sol-orange">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white border border-charcoal/10 rounded-xl focus:outline-none focus:border-sol-orange focus:ring-2 focus:ring-sol-orange/20 transition-all"
                  placeholder="votre@email.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 bg-white border border-charcoal/10 rounded-xl focus:outline-none focus:border-sol-orange focus:ring-2 focus:ring-sol-orange/20 transition-all"
                  placeholder="De quoi souhaitez-vous parler ?"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message <span className="text-sol-orange">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white border border-charcoal/10 rounded-xl focus:outline-none focus:border-sol-orange focus:ring-2 focus:ring-sol-orange/20 transition-all resize-none"
                  placeholder="Votre message..."
                />
              </div>

              {/* Error Message */}
              {status === "error" && (
                <div className="bg-sol-pink/10 border border-sol-pink/30 rounded-xl p-4">
                  <p className="text-sol-pink text-sm">{errorMessage}</p>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full md:w-auto px-8 py-4 bg-charcoal text-cream font-medium rounded-full hover:bg-sol-orange transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === "loading" ? (
                  <>
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer le message
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          )}

          {/* Alternative contact */}
          <div className="mt-12 pt-8 border-t border-charcoal/10">
            <p className="text-charcoal/60 text-sm">
              Vous pouvez également me contacter directement par email :{" "}
              <a href="mailto:sol.lebris26@gmail.com" className="text-sol-orange hover:underline">
                sol.lebris26@gmail.com
              </a>
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
