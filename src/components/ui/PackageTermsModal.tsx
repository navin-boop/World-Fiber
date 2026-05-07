"use client";

import { useState } from "react";
import { X, FileText } from "lucide-react";

interface PackageTermsModalProps {
  title: string;
  content: string;
}

export default function PackageTermsModal({ title, content }: PackageTermsModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-xs text-[#25468F] hover:underline font-medium flex items-center gap-1"
      >
        <FileText size={12} />
        View Terms
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[80vh] flex flex-col z-10">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h3 className="font-bold text-lg text-gray-800">{title}</h3>
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <X size={20} className="text-gray-500" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto">
              <div className="prose prose-sm max-w-none">
                {content.split("\n").map((line, i) => (
                  <p key={i} className={`text-sm text-gray-600 ${line.startsWith("•") ? "mb-1.5" : "mb-3"}`}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
