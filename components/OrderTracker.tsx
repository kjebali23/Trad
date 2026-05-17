"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Search, CheckCircle, Clock, FileText, Loader2, Mail, Download } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock order database
const MOCK_ORDERS: Record<string, {
  id: string; docType: string; langPair: string; pages: number;
  clientEmail: string; status: 0 | 1 | 2 | 3;
  createdAt: string; estimatedDelivery: string;
}> = {
  "ORD-2401": { id: "ORD-2401", docType: "Acte de naissance",    langPair: "FR → Arabe",   pages: 1, clientEmail: "m***@gmail.com",   status: 2, createdAt: "09/05/2025 10:22", estimatedDelivery: "10/05/2025" },
  "ORD-2402": { id: "ORD-2402", docType: "Diplôme Universitaire", langPair: "FR → Anglais", pages: 2, clientEmail: "j***@outlook.com", status: 1, createdAt: "09/05/2025 14:05", estimatedDelivery: "11/05/2025" },
  "ORD-2403": { id: "ORD-2403", docType: "Permis de conduire",   langPair: "FR → Espagnol",pages: 1, clientEmail: "c***@gmail.com",   status: 3, createdAt: "07/05/2025 09:10", estimatedDelivery: "09/05/2025" },
  "ORD-2404": { id: "ORD-2404", docType: "Bulletin scolaire",    langPair: "FR → Arabe",   pages: 3, clientEmail: "f***@gmail.com",   status: 0, createdAt: "09/05/2025 16:48", estimatedDelivery: "11/05/2025" },
};

const STEPS = [
  { label: "Commande reçue",    desc: "Votre commande a été enregistrée et votre paiement confirmé." },
  { label: "Traduction en cours", desc: "Un traducteur assermenté travaille sur votre document." },
  { label: "Révision & contrôle", desc: "Votre traduction est en cours de vérification qualité." },
  { label: "Livré par e-mail",   desc: "Votre traduction certifiée a été envoyée à votre adresse e-mail." },
];

export function OrderTracker() {
  const searchParams = useSearchParams();
  const [orderId, setOrderId] = useState(searchParams.get("id") || "");
  const [inputVal, setInputVal] = useState(searchParams.get("id") || "");
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState<typeof MOCK_ORDERS[string] | null>(null);
  const [notFound, setNotFound] = useState(false);

  const lookup = (id: string) => {
    const clean = id.trim().toUpperCase();
    setLoading(true);
    setNotFound(false);
    setTimeout(() => {
      const found = MOCK_ORDERS[clean];
      setOrder(found || null);
      setNotFound(!found);
      setLoading(false);
    }, 700);
  };

  useEffect(() => {
    const id = searchParams.get("id");
    if (id) { setInputVal(id); setOrderId(id); lookup(id); }
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderId(inputVal);
    lookup(inputVal);
    window.history.replaceState({}, "", `/suivi?id=${encodeURIComponent(inputVal.trim().toUpperCase())}`);
  };

  return (
    <div className="bg-cream min-h-[80vh]">
      {/* Hero */}
      <div className="bg-navy px-6 py-16 text-center">
        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-gold-light">Suivi en ligne</p>
        <h1 className="font-serif text-4xl font-bold text-white mb-3">Suivre ma commande</h1>
        <p className="text-white/60 max-w-md mx-auto mb-10">
          Entrez votre numéro de commande (reçu par e-mail) pour voir l'avancement de votre traduction.
        </p>

        {/* Search bar */}
        <form onSubmit={handleSearch} className="mx-auto flex max-w-md gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              value={inputVal}
              onChange={e => setInputVal(e.target.value)}
              placeholder="Ex: ORD-2401"
              className="w-full rounded-xl border border-white/15 bg-white/10 pl-11 pr-4 py-3.5 text-sm text-white placeholder-white/40 outline-none focus:border-gold/60 focus:bg-white/15 transition-all font-mono uppercase"
            />
          </div>
          <button type="submit"
            className="rounded-xl bg-gold px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-gold-light">
            Rechercher
          </button>
        </form>

        {/* Demo hint */}
        <p className="mt-4 text-xs text-white/30">
          Démo : essayez ORD-2401, ORD-2402, ORD-2403 ou ORD-2404
        </p>
      </div>

      {/* Result area */}
      <div className="mx-auto max-w-2xl px-6 py-14">
        {loading && (
          <div className="flex flex-col items-center gap-4 py-20 text-slate-400">
            <Loader2 className="h-8 w-8 animate-spin text-gold" />
            <p className="text-sm">Recherche en cours…</p>
          </div>
        )}

        {!loading && notFound && (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center">
            <p className="font-semibold text-red-700 mb-1">Commande introuvable</p>
            <p className="text-sm text-red-500">
              Vérifiez le numéro de commande dans votre e-mail de confirmation.
            </p>
          </div>
        )}

        {!loading && order && (
          <div className="space-y-6 animate-[fadeUp_0.4s_ease]">
            {/* Order summary card */}
            <div className="rounded-2xl border border-navy/8 bg-white p-6 shadow-[0_2px_20px_rgba(10,25,47,0.06)]">
              <div className="flex items-start justify-between flex-wrap gap-4 mb-5">
                <div>
                  <div className="font-mono text-sm font-bold text-gold mb-1">{order.id}</div>
                  <div className="font-serif text-xl font-bold text-navy">{order.docType}</div>
                  <div className="text-sm text-slate-400 mt-0.5">{order.langPair} · {order.pages} page{order.pages > 1 ? "s" : ""}</div>
                </div>
                <div className="text-right text-sm text-slate-400">
                  <div>Commande le {order.createdAt}</div>
                  <div className="mt-0.5">
                    <span className="text-navy font-medium">Livraison prévue le {order.estimatedDelivery}</span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-1 justify-end text-xs">
                    <Mail className="h-3.5 w-3.5" />
                    {order.clientEmail}
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mb-1 flex justify-between text-xs text-slate-400">
                <span>Progression</span>
                <span>{order.status + 1} / {STEPS.length}</span>
              </div>
              <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden mb-6">
                <div
                  className="h-full rounded-full bg-gold transition-all duration-700"
                  style={{ width: `${((order.status + 1) / STEPS.length) * 100}%` }}
                />
              </div>

              {/* Step timeline */}
              <div className="space-y-4">
                {STEPS.map((step, i) => {
                  const done = i < order.status;
                  const active = i === order.status;
                  const future = i > order.status;
                  return (
                    <div key={i} className={cn("flex items-start gap-4", future && "opacity-35")}>
                      {/* Icon */}
                      <div className={cn(
                        "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 transition-all",
                        done   ? "border-emerald-500 bg-emerald-500" :
                        active ? "border-gold bg-gold" :
                                 "border-slate-200 bg-white"
                      )}>
                        {done ? (
                          <CheckCircle className="h-4 w-4 text-white" />
                        ) : active ? (
                          <div className="h-2.5 w-2.5 rounded-full bg-white animate-pulse" />
                        ) : (
                          <div className="h-2 w-2 rounded-full bg-slate-300" />
                        )}
                      </div>

                      {/* Text */}
                      <div className="flex-1 pb-4 border-b border-slate-100 last:border-0">
                        <div className={cn(
                          "text-sm font-semibold",
                          done ? "text-emerald-700" : active ? "text-gold" : "text-navy"
                        )}>
                          {step.label}
                          {active && <span className="ml-2 text-[10px] font-bold uppercase tracking-widest bg-gold/10 text-gold rounded-full px-2 py-0.5">En cours</span>}
                          {done  && <span className="ml-2 text-[10px] font-bold uppercase tracking-widest bg-emerald-100 text-emerald-700 rounded-full px-2 py-0.5">✓ Terminé</span>}
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5">{step.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Download CTA if delivered */}
            {order.status === 3 && (
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500 shrink-0">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-emerald-900">Votre traduction est prête !</p>
                  <p className="text-sm text-emerald-700 mt-0.5">Un e-mail avec le PDF a été envoyé à {order.clientEmail}. Vérifiez aussi vos spams.</p>
                </div>
                <button className="flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-emerald-500 transition-all shrink-0">
                  <Download className="h-4 w-4" /> Télécharger
                </button>
              </div>
            )}

            {/* Help link */}
            <p className="text-center text-sm text-slate-400">
              Un problème avec votre commande ?{" "}
              <a href="/devis" className="text-gold hover:text-gold-light font-medium transition-colors">
                Contactez-nous →
              </a>
            </p>
          </div>
        )}

        {!loading && !order && !notFound && (
          <div className="py-16 text-center text-slate-400">
            <Clock className="h-12 w-12 mx-auto mb-4 opacity-20" />
            <p className="text-sm">Entrez votre numéro de commande ci-dessus pour commencer.</p>
          </div>
        )}
      </div>
    </div>
  );
}
