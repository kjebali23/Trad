"use client";
import { useState } from "react";
import { Upload, Send, FileText, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const DOC_TYPES = [
  "Acte de naissance", "Diplôme / Relevé de notes", "Permis de conduire",
  "Acte de mariage / divorce", "Extrait de casier judiciaire", "Extrait Kbis",
  "Contrat / Document juridique", "Passeport / Pièce d'identité",
  "Document médical", "Document financier / Bancaire", "Autre",
];

const LANG_PAIRS = [
  "Français → Anglais", "Français → Arabe", "Français → Espagnol",
  "Français → Allemand", "Français → Italien", "Français → Portugais",
  "Français → Turc", "Français → Russe", "Français → Chinois",
  "Arabe → Français", "Anglais → Français", "Espagnol → Français",
  "Autre combinaison",
];

export function DevisForm() {
  const [submitted, setSubmitted] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", docType: "", langPair: "", pages: "1", notes: "",
  });

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleFiles = (fl: FileList | null) => {
    if (!fl) return;
    setFiles((prev) => [...prev, ...Array.from(fl)]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-6 py-20 bg-cream">
        <div className="max-w-md text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
            <CheckCircle className="h-10 w-10 text-emerald-600" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-navy mb-3">Demande envoyée !</h2>
          <p className="text-slate-500 leading-relaxed mb-8">
            Nous avons bien reçu votre demande de devis. Notre équipe vous répondra par e-mail sous <strong className="text-navy">2 heures ouvrées</strong> avec un tarif personnalisé.
          </p>
          <a
            href="/"
            className="inline-block rounded-xl bg-orange px-8 py-3.5 text-sm font-bold text-white transition-all hover:bg-orange-light hover:-translate-y-px"
          >
            Retour à l'accueil
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-cream">
      {/* Hero strip */}
      <div className="bg-navy px-6 py-16 text-center">
        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-orange-light">Devis gratuit</p>
        <h1 className="font-serif text-4xl font-bold text-white mb-3">Demander un devis personnalisé</h1>
        <p className="text-white/60 max-w-lg mx-auto text-base">
          Votre document n'est pas dans notre catalogue standard ? Décrivez votre besoin et recevez un tarif sous 2 heures.
        </p>
      </div>

      <div className="mx-auto max-w-2xl px-6 py-16">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Contact */}
          <div className="rounded-2xl border border-navy/8 bg-white p-6 shadow-[0_2px_20px_rgba(10,25,47,0.06)]">
            <h2 className="font-serif text-lg font-bold text-navy mb-5">Vos coordonnées</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">Nom complet *</label>
                <input required value={form.name} onChange={e => set("name", e.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-navy outline-none focus:border-orange transition-colors"
                  placeholder="Marie Dupont" />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">E-mail *</label>
                <input required type="email" value={form.email} onChange={e => set("email", e.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-navy outline-none focus:border-orange transition-colors"
                  placeholder="marie@email.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">Téléphone (optionnel)</label>
                <input value={form.phone} onChange={e => set("phone", e.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-navy outline-none focus:border-orange transition-colors"
                  placeholder="+33 6 00 00 00 00" />
              </div>
            </div>
          </div>

          {/* Document details */}
          <div className="rounded-2xl border border-navy/8 bg-white p-6 shadow-[0_2px_20px_rgba(10,25,47,0.06)]">
            <h2 className="font-serif text-lg font-bold text-navy mb-5">Votre document</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">Type de document *</label>
                <select required value={form.docType} onChange={e => set("docType", e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-navy outline-none focus:border-orange transition-colors cursor-pointer appearance-none">
                  <option value="">Sélectionner…</option>
                  {DOC_TYPES.map(d => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">Paire de langues *</label>
                <select required value={form.langPair} onChange={e => set("langPair", e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-navy outline-none focus:border-orange transition-colors cursor-pointer appearance-none">
                  <option value="">Sélectionner…</option>
                  {LANG_PAIRS.map(l => <option key={l} value={l}>{l}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">Nombre de pages estimé *</label>
                <input required type="number" min="1" max="100" value={form.pages} onChange={e => set("pages", e.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-navy outline-none focus:border-orange transition-colors" />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">Informations complémentaires</label>
                <textarea value={form.notes} onChange={e => set("notes", e.target.value)} rows={1}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-navy outline-none focus:border-orange transition-colors resize-none"
                  placeholder="Urgence, contexte, administration concernée…" />
              </div>
            </div>
          </div>

          {/* File upload */}
          <div className="rounded-2xl border border-navy/8 bg-white p-6 shadow-[0_2px_20px_rgba(10,25,47,0.06)]">
            <h2 className="font-serif text-lg font-bold text-navy mb-2">Joindre votre document</h2>
            <p className="text-sm text-slate-400 mb-4">Optionnel mais recommandé pour un devis précis.</p>
            <div
              onDragOver={e => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={e => { e.preventDefault(); setIsDragging(false); handleFiles(e.dataTransfer.files); }}
              onClick={() => document.getElementById("devis-file")?.click()}
              className={cn(
                "cursor-pointer rounded-2xl border-2 border-dashed px-6 py-8 text-center transition-all",
                isDragging ? "border-orange bg-orange/5 scale-[1.01]" : "border-slate-200 hover:border-orange/40 hover:bg-orange/3"
              )}
            >
              <Upload className={cn("mx-auto mb-3 h-7 w-7", isDragging ? "text-orange" : "text-slate-300")} />
              <p className="text-sm text-slate-500">
                Glissez votre fichier ici ou <strong className="text-orange">cliquez pour parcourir</strong>
              </p>
              <p className="mt-1 text-xs text-slate-400">PDF, JPG, PNG · Max 20 MB</p>
              <input id="devis-file" type="file" accept=".pdf,.jpg,.jpeg,.png" multiple className="hidden"
                onChange={e => handleFiles(e.target.files)} />
            </div>
            {files.length > 0 && (
              <div className="mt-3 space-y-2">
                {files.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
                    <FileText className="h-4 w-4 shrink-0" />
                    <span className="truncate">{f.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <button type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange py-4 text-sm font-bold text-white shadow-[0_4px_24px_rgba(245,124,0,0.3)] transition-all hover:bg-orange-light hover:-translate-y-0.5">
            <Send className="h-4 w-4" />
            Envoyer ma demande de devis
          </button>

          <p className="text-center text-xs text-slate-400">
            Réponse garantie sous 2h ouvrées · Aucun engagement
          </p>
        </form>
      </div>
    </div>
  );
}
