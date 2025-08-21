"use client";
import { useEffect, useState } from "react";
import { Loader, X } from "lucide-react"; // optional icon lib, you can replace
import { Spinner } from "@nextui-org/react";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setLoading(true);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setLoading(true);
        }}
        className="fixed bottom-16 right-6 bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-blue-700 transition bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x "
      >
        💬 Chat With Me
      </button>

      {/* Popup Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 flex items-end justify-end z-50"
          onClick={() => setIsOpen(false)} // close when clicking background
        >
          <div
            className="fixed bottom-16 right-6 w-96 h-[600px] bg-white shadow-2xl rounded-2xl overflow-hidden  z-50"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center bg-blue-600 text-white px-4 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x ">
              <h2 className="font-semibold">Career Chatbot</h2>
              <button onClick={() => setIsOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex justify-center">
              Ask me anything about my works and career.
            </div>
            {/* Chatbot iframe */}
            <div className="h-full">
              {loading && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="flex items-center gap-4">
                    {" "}
                    <Spinner /> Warming up...
                  </div>
                </div>
              )}
              <iframe
                src={process.env.NEXT_PUBLIC_CHAT_EMBEDDING}
                title="Career Chatbot"
                className="w-full min-h-[500px] overflow-hidden check-samreshborder-0 relative z-20"
                scrolling="no"
                onLoad={() => setLoading(false)}
              />
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 5s ease infinite;
        }
        //
      `}</style>
    </>
  );
}

