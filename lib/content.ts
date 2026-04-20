export const content = {
  header: {
    logo: "neo457",
    nav: [
      { label: "Story", href: "#story" },
      { label: "Reminder", href: "#pipeline" },
      { label: "KI-News", href: "#kinews" },
      { label: "System", href: "#system" },
      { label: "Use Cases", href: "#use-cases" },
      { label: "GitHub", href: "https://github.com/bref457", external: true },
    ],
  },
  hero: {
    monoLabel: "persönliches ki-system",
    headline: { line1: "Dein KI-System.", line2: "Deine Regeln.", line3: "Dein Server." },
    subline: "Ein privates AI-System auf eigenem Hetzner VPS — Spracheingabe, automatische Reminder, täglicher KI-News-Feed und ein Telegram-Assistent, der wirklich antwortet. Kein SaaS, kein Abo, keine fremden Daten.",
    cta: [
      { label: "GitHub ansehen", href: "https://github.com/bref457/neo457-landing", variant: "primary" },
      { label: "KI-News lesen", href: "https://kinews.neo457.ch", variant: "secondary" },
    ],
    stats: [
      { label: "Komponenten im Stack", value: "7+" },
      { label: "KI-News täglich", value: "~10" },
      { label: "Läuft auf", value: "1 VPS" },
    ],
  },
  useCases: {
    sectionLabel: "Anwendungen",
    headline: "Was das System täglich tut",
    items: [
      { icon: "Mic", title: "Sprachnotiz → Reminder", description: "Sprachmemo aufnehmen, an den Telegram-Bot schicken. Whisper transkribiert, OpenClaw versteht den Kontext, PocketBase speichert — und zur richtigen Zeit kommt die Erinnerung zurück.", badge: "Whisper + OpenClaw" },
      { icon: "Newspaper", title: "Täglicher KI-News-Feed", description: "Jeden Tag werden automatisch relevante KI-Artikel gesammelt, zusammengefasst und auf kinews.neo457.ch veröffentlicht. Kein manuelles Kuratieren, kein Vergessen.", badge: "kinews.neo457.ch" },
      { icon: "Bot", title: "Persönlicher KI-Assistent", description: "OpenClaw läuft als Telegram-Bot mit Gemma 4 im Hintergrund. Fragen stellen, Aufgaben delegieren, System-Infos abfragen — direkt vom Handy, ohne Browser.", badge: "OpenClaw · Gemma 4" },
    ],
  },
  pipeline: {
    sectionLabel: "Reminder · Architektur",
    headline: "So funktioniert es",
    subline: "Kein einzelnes Tool — ein durchgehender Datenfluss von der Spracheingabe bis zur Erinnerung.",
    steps: [
      { label: "Telegram", sublabel: "Sprachnachricht kommt rein, Whisper transkribiert lokal" },
      { label: "OpenClaw", sublabel: "Agent verarbeitet den Intent und ruft den passenden Skill auf" },
      { label: "PocketBase", sublabel: "Reminder wird gespeichert mit Datum und Uhrzeit" },
      { label: "NeoPlan", sublabel: "Reminder erscheint in der persönlichen Reminder-App" },
      { label: "Telegram", sublabel: "Zur gesetzten Zeit kommt die Erinnerung zurück" },
    ],
  },
  systemSetup: {
    sectionLabel: "Infrastruktur",
    headline: "Läuft alles auf einem Server",
    subline: "Hetzner CX32, nginx als Reverse Proxy, PM2 für Prozesse — alles auf einer Maschine, ohne Kubernetes-Overhead.",
    nodes: [
      { name: "OpenClaw", url: null, tech: "Node.js · PM2 · OpenRouter", status: "live" },
      { name: "kinews", url: "kinews.neo457.ch", tech: "Next.js · Port 3005", status: "live" },
      { name: "PocketBase", url: null, tech: "Docker · SQLite", status: "live" },
      { name: "Obsidian Sync", url: null, tech: "Syncthing · VPS ↔ Laptop", status: "live" },
    ],
  },
  kiNews: {
    sectionLabel: "KI-News",
    headline: "Täglich frische KI-Artikel, automatisch",
    subline: "OpenClaw sammelt, filtert und fasst zusammen. Das Ergebnis landet auf kinews.neo457.ch — täglich kuratiert, plus ein Live-Feed mit aktuellen KI-News aus aller Welt.",
    linkButton: "Alle Artikel lesen →",
    demoCards: [
      { title: "Anthropic veröffentlicht Claude 4 mit verbesserter Reasoning-Fähigkeit", source: "The Verge", date: "2026-04-13" },
      { title: "Gemma 4 von Google: Open-Weight-Modell schlägt GPT-4 in mehreren Benchmarks", source: "Ars Technica", date: "2026-04-12" },
    ],
  },
  demo: {
    sectionLabel: "Reminder · Demo",
    headline: "Wie es sich anfühlt",
    telegram: {
      botName: "neo457 Assistant",
      messages: [
        { role: "audio", text: "🎙 Sprachnachricht · 00:07" },
        { role: "bot", text: '🎙 "Erinnere mich um 10 Uhr daran, Kühltasche einzupacken."' },
        { role: "bot", text: "Alles klar, ist notiert: Heute um 10:00 Uhr Kühltasche einpacken. 🦁" },
        { role: "bot", text: "REMINDER|Kühltasche einpacken|2026-04-19|10:00" },
      ],
    },
    neoplan: {
      open: [
        { title: "Kühltasche einpacken", date: "Sa., 19.04.2026 · 10:00 · reminder" },
      ],
      done: [
        { title: "Arzttermin bestätigen", date: "Fr., 18.04.2026 · 09:00 · reminder" },
      ],
    },
    newsCard: {
      category: "Open Source",
      title: "Llama 4 Scout läuft auf Consumer-Hardware: Community zeigt erste Ergebnisse",
      source: "HuggingFace Blog",
      date: "2026-04-11",
      summary: "Erste Tests zeigen: Llama 4 Scout lässt sich auf einer einzelnen RTX 4090 mit akzeptabler Geschwindigkeit betreiben. Die Community-Ports für llama.cpp sind bereits verfügbar.",
    },
  },
  whyOwnSystem: {
    sectionLabel: "Warum überhaupt",
    headline: "Kein SaaS kann das ersetzen",
    subline: "Nicht aus Prinzip — sondern weil ein eigenes System Dinge kann, die kein Abo-Dienst erlaubt.",
    points: [
      { icon: "Lock", headline: "Datenschutz ohne Kompromisse", text: "Sprachnotizen, Reminder, persönliche Kontexte — alles bleibt auf dem eigenen Server. Keine Analyse durch Dritte, kein Datentransfer zu Plattformen, die ich nicht kontrolliere." },
      { icon: "SlidersHorizontal", headline: "Volle Kontrolle über das Modell", text: "Heute Gemma 4, morgen etwas anderes. Der Wechsel dauert Minuten. Kein Vendor-Lock-in, keine Preiserhöhung, keine deprecation notice per E-Mail." },
      { icon: "Unplug", headline: "Unabhängig von Drittdiensten", text: "Wenn OpenAI den API-Preis verdoppelt oder ein Tool eingestellt wird, ändert sich bei mir der Config-Eintrag — nicht das Budget." },
      { icon: "Wrench", headline: "Angepasst auf meinen Alltag", text: "Das System macht genau das, was ich brauche — nicht was ein Produktteam für die breite Masse entworfen hat. Jeder Workflow ist meiner." },
    ],
  },
  story: {
    sectionLabel: "Hintergrund",
    storyHeadline: "Wie ich dazu gekommen bin",
    storyText: [
      "Ich bin 1978 geboren und habe die meiste Zeit meines Lebens mit Technologie verbracht — aber nie als Entwickler. Als KI-Tools wirklich brauchbar wurden, wollte ich verstehen, was dahinter steckt. Nicht theoretisch, sondern praktisch: selbst aufsetzen, selbst betreiben, selbst erweitern.",
      "Was als Experiment mit einem Telegram-Bot begann, ist über Monate zu einem System geworden, das ich täglich nutze. Whisper für Sprachnotizen, PocketBase als Datenbank, Next.js für die UIs, Obsidian als Kontext-Speicher. Jedes Teil hat seinen Grund.",
      "neo457.ch ist kein Produkt. Es ist ein laufendes System und gleichzeitig Dokumentation davon, was möglich ist, wenn man die Kontrolle behält.",
    ],
    visionHeadline: "Wohin es geht",
    visionText: "Der nächste Schritt ist ein vollständigeres Agent-System: OpenClaw soll selbständig Aufgaben planen, Obsidian-Notizen als Kontext nutzen und mit externen Quellen kommunizieren — alles auf Anweisung, nichts automatisch ohne Freigabe. Weniger Tool-Sammlung, mehr koordiniertes System.",
  },
  footer: {
    tagline: "Ein privates KI-System. Kein Produkt, kein Abo, kein Bullshit.",
    links: [
      { label: "GitHub", href: "https://github.com/bref457", external: true },
      { label: "kinews", href: "https://kinews.neo457.ch", external: true },
    ],
    copyright: "© 2026 Fabio — neo457.ch",
  },
}
