"use client";
import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X, ShoppingBag, Upload, FileText, Trash2 } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { cn } from "@/lib/utils";

interface CartDrawerProps { open: boolean; onClose: () => void; }

export function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { items, removeItem, totalPrice } = useCartStore();
  const [email, setEmail] = React.useState("");
  const [files, setFiles] = React.useState<File[]>([]);
  const [isDragging, setIsDragging] = React.useState(false);
  const fileRef = React.useRef<HTMLInputElement>(null);

  const handleFiles = (fl: FileList | null) => {
    if (!fl) return;
    setFiles(p => [...p, ...Array.from(fl).filter(f => f.type === "application/pdf")]);
  };

  const fmt = (p: number) => p.toFixed(2).replace(".", ",") + " €";

  return (
    <DialogPrimitive.Root open={open} onOpenChange={v => !v && onClose()}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content className={cn(
          "fixed right-0 top-0 bottom-0 z-50 flex w-full max-w-[460px] flex-col bg-white shadow-2xl",
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right duration-300"
        )}>
          {/* Header */}
          <div className="flex items-center justify-between bg-navy px-6 py-5">
            <DialogPrimitive.Title className="font-serif text-xl font-bold text-white">Mon Panier</DialogPrimitive.Title>
            <DialogPrimitive.Close onClick={onClose} className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors">
              <X className="h-4 w-4" />
            </DialogPrimitive.Close>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto px-6 py-5">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center gap-3 py-16 text-center text-gray-300">
                <ShoppingBag className="h-12 w-12 opacity-20" />
                <p className="font-medium text-gray-400">Votre panier est vide.</p>
                <p className="text-sm text-gray-400">Ajoutez des documents ci-dessus.</p>
              </div>
            ) : (
              <div>
                {items.map(item => (
                  <div key={item.uid} className="flex items-center gap-4 border-b border-gray-100 py-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/10">
                      <FileText className="h-5 w-5 text-gold" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-navy truncate">{item.name}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{item.langPair} · {item.pages} page{item.pages > 1 ? "s" : ""}</p>
                      <p className="text-xs font-bold text-gold mt-0.5">{fmt(item.price)}</p>
                    </div>
                    <button onClick={() => removeItem(item.uid)} className="text-gray-300 hover:text-red-400 transition-colors">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Upload */}
            <div className="mt-6 space-y-4">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">Votre e-mail</p>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="exemple@email.com"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-navy outline-none focus:border-gold transition-colors" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">Documents PDF</p>
                <div onClick={() => fileRef.current?.click()}
                  onDragOver={e => { e.preventDefault(); setIsDragging(true); }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={e => { e.preventDefault(); setIsDragging(false); handleFiles(e.dataTransfer.files); }}
                  className={cn(
                    "cursor-pointer rounded-xl border-2 border-dashed px-5 py-7 text-center transition-all",
                    isDragging ? "border-gold bg-gold/5" : "border-gray-200 hover:border-gold/40"
                  )}>
                  <Upload className={cn("mx-auto mb-2 h-7 w-7", isDragging ? "text-gold" : "text-gray-300")} />
                  <p className="text-sm text-gray-400">Glissez ou <strong className="text-gold">parcourir</strong></p>
                  <p className="text-xs text-gray-300 mt-1">PDF · Max 20 MB</p>
                  <input ref={fileRef} type="file" accept=".pdf" multiple className="hidden" onChange={e => handleFiles(e.target.files)} />
                </div>
                {files.length > 0 && (
                  <div className="mt-2 space-y-1.5">
                    {files.map((f, i) => (
                      <div key={i} className="flex items-center gap-2 rounded-lg bg-green-50 px-3 py-2 text-xs text-green-700">
                        <FileText className="h-3.5 w-3.5" /><span className="truncate">{f.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-100 px-6 py-5 bg-white">
            <div className="flex items-center justify-between mb-4">
              <span className="font-semibold text-navy">Total</span>
              <span className="font-serif text-2xl font-bold text-navy">{fmt(totalPrice())}</span>
            </div>
            <button disabled={items.length === 0}
              className="w-full rounded-xl bg-gold py-4 text-sm font-bold text-white shadow-[0_4px_20px_rgba(184,150,46,0.3)] hover:bg-gold-light transition-all hover:-translate-y-0.5 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0">
              Procéder au Paiement →
            </button>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
