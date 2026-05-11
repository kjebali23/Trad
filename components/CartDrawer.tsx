"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X, ShoppingBag, Upload, FileText, Trash2 } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { cn } from "@/lib/utils";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { items, removeItem, totalPrice } = useCartStore();
  const [email, setEmail] = React.useState("");
  const [files, setFiles] = React.useState<File[]>([]);
  const [isDragging, setIsDragging] = React.useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleFiles = (newFiles: FileList | null) => {
    if (!newFiles) return;
    const pdfs = Array.from(newFiles).filter((f) => f.type === "application/pdf");
    setFiles((prev) => [...prev, ...pdfs]);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  const formatPrice = (price: number) =>
    price.toFixed(2).replace(".", ",") + " €";

  return (
    <DialogPrimitive.Root open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogPrimitive.Portal>
        {/* Overlay */}
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

        {/* Drawer sliding from right */}
        <DialogPrimitive.Content
          className={cn(
            "fixed right-0 top-0 bottom-0 z-50 flex w-full max-w-[480px] flex-col bg-white shadow-2xl",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
            "duration-300"
          )}
        >
          {/* Header */}
          <div className="flex items-center justify-between bg-navy px-7 py-6">
            <DialogPrimitive.Title className="font-serif text-xl font-bold text-white">
              Mon Panier
            </DialogPrimitive.Title>
            <DialogPrimitive.Close
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <X className="h-4 w-4" />
            </DialogPrimitive.Close>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto px-7 py-6">
            {/* Cart Items */}
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center gap-3 py-16 text-center text-slate-400">
                <ShoppingBag className="h-12 w-12 opacity-25" />
                <div>
                  <p className="font-medium">Votre panier est vide.</p>
                  <p className="text-sm">Ajoutez des documents ci-dessus.</p>
                </div>
              </div>
            ) : (
              <div>
                {items.map((item) => (
                  <div
                    key={item.uid}
                    className="flex animate-[slideIn_0.25s_ease] items-center gap-4 border-b border-slate-100 py-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange/10 text-orange">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-navy">{item.name}</p>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {item.langPair} · {item.pages} page{item.pages > 1 ? "s" : ""}
                      </p>
                      <p className="text-xs font-semibold text-orange mt-0.5">
                        {formatPrice(item.price)}
                      </p>
                    </div>
                    <button
                      onClick={() => removeItem(item.uid)}
                      className="text-slate-300 transition-colors hover:text-red-400"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Upload Section */}
            <div className="mt-8 space-y-5">
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-navy">
                  Votre e-mail
                </p>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="exemple@email.com"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm font-sans text-navy outline-none transition-colors focus:border-orange"
                />
              </div>

              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-navy">
                  Documents à traduire (PDF)
                </p>
                <div
                  onClick={() => fileInputRef.current?.click()}
                  onDragOver={(e) => {
                    e.preventDefault();
                    setIsDragging(true);
                  }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={handleDrop}
                  className={cn(
                    "cursor-pointer rounded-2xl border-2 border-dashed px-6 py-8 text-center transition-all",
                    isDragging
                      ? "border-orange bg-orange/8 scale-[1.01]"
                      : "border-slate-200 bg-slate-50 hover:border-orange/50 hover:bg-orange/5"
                  )}
                >
                  <Upload
                    className={cn(
                      "mx-auto mb-3 h-8 w-8 transition-colors",
                      isDragging ? "text-orange" : "text-slate-300"
                    )}
                  />
                  <p className="text-sm text-slate-500">
                    Glissez vos PDFs ici ou{" "}
                    <strong className="text-orange">cliquez pour parcourir</strong>
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    PDF uniquement · Max 20 MB
                  </p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf"
                    multiple
                    className="hidden"
                    onChange={(e) => handleFiles(e.target.files)}
                  />
                </div>

                {/* Uploaded files list */}
                {files.length > 0 && (
                  <div className="mt-3 space-y-2">
                    {files.map((file, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-700"
                      >
                        <FileText className="h-4 w-4 shrink-0" />
                        <span className="truncate">{file.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-slate-100 bg-white px-7 py-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-semibold text-navy">Total</span>
              <span className="font-serif text-xl font-bold text-navy">
                {formatPrice(totalPrice())}
              </span>
            </div>
            <button
              disabled={items.length === 0}
              className="w-full rounded-xl bg-orange py-4 text-sm font-bold text-white shadow-[0_4px_20px_rgba(245,124,0,0.3)] transition-all hover:bg-orange-light hover:-translate-y-0.5 hover:shadow-[0_6px_28px_rgba(245,124,0,0.4)] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
            >
              Procéder au Paiement →
            </button>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
