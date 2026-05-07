"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageCircle, X, MessageSquare, Ticket } from "lucide-react";

export default function LiveChatWidget() {
  const [open, setOpen] = useState(false);

  const whatsappNumber = "9801234567";
  const viberNumber = "9801234567";
  const messengerLink = "https://m.me/worldfibernet";
  const whatsappText = encodeURIComponent("Hello World Fiber Net, I need help.");

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Popup */}
      {open && (
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 w-72 overflow-hidden animate-in slide-in-from-bottom-4">
          <div className="bg-gradient-to-r from-[#25468F] to-[#071A3D] p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-bold text-sm">Chat with us!</p>
                <p className="text-blue-200 text-xs">We are here to help.</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>
          </div>
          <div className="p-3 space-y-2">
            <a
              href={`https://wa.me/977${whatsappNumber}?text=${whatsappText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-green-50 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">Chat on WhatsApp</p>
                <p className="text-xs text-gray-500">Fastest response</p>
              </div>
            </a>

            <a
              href={`viber://chat?number=%2B977${viberNumber}`}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-purple-50 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-[#7360F2] flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                  <path d="M11.398.002C9.473.028 5.331.344 3.014 2.467 1.02 4.458.354 7.344.285 10.882c-.07 3.539-.154 10.175 6.224 11.986h.006l-.006 2.75s-.042.919.573.919c.742 0 1.166-.896 1.166-.896 1.547-1.734 1.473-2.069 2.147-2.647C14.6 22.82 18.12 22.424 18.985 22.3c1.945-.253 3.638-1.53 3.85-3.14.246-1.919.297-5.087-.011-7.057C22.116 7.855 20.05 5.98 19.27 5.39c-2.46-1.842-5.57-2.007-7.002-2.01l-.145-.002c-.241 0-.482.007-.725.02z"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">Chat on Viber</p>
                <p className="text-xs text-gray-500">Quick support</p>
              </div>
            </a>

            <a
              href={messengerLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-[#0099FF] flex items-center justify-center flex-shrink-0">
                <MessageSquare size={20} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">Chat on Messenger</p>
                <p className="text-xs text-gray-500">Facebook support</p>
              </div>
            </a>

            <Link
              href="/support-ticket"
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-orange-50 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-[#25468F] flex items-center justify-center flex-shrink-0">
                <Ticket size={18} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">Create Support Ticket</p>
                <p className="text-xs text-gray-500">Track your issue</p>
              </div>
            </Link>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-[#25468F] hover:bg-[#071A3D] text-white shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
        aria-label="Live Chat"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
}
