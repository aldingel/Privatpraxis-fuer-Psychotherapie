'use client'

import { useState } from 'react'

export function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(
      `Kontaktanfrage über die Website von ${name}`,
    )
    const body = encodeURIComponent(
      `Name: ${name}\nE-Mail: ${email}\n\n${message}`,
    )
    window.location.href = `mailto:pt.aldinger@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            Vor- und Nachname
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-input bg-card px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            E-Mail-Adresse
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-input bg-card px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-foreground"
        >
          Ihre Nachricht
        </label>
        <textarea
          id="message"
          required
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-xl border border-input bg-card px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
        />
      </div>
      <p className="text-xs leading-relaxed text-muted-foreground">
        Bei der Übertragung der Daten im Internet besteht immer die
        Möglichkeit, dass diese durch unbefugte Dritte zur Kenntnis genommen
        oder auch verändert werden können. Mit der Kontaktaufnahme erteilen
        Sie mir die Einwilligung, Ihre Daten zum Zwecke der Kontaktaufnahme zu
        speichern. Ist dieser Zweck erfüllt, werden Ihre Daten gelöscht.
      </p>
      <button
        type="submit"
        className="inline-flex items-center rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
      >
        Nachricht senden
      </button>
    </form>
  )
}
