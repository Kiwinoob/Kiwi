"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AlertTriangle, ArrowLeft } from "lucide-react";

export default function NotFound() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    if (countdown <= 0) {
      router.push("/");
    }
  }, [countdown, router]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-hud-black bg-hex-pattern relative overflow-hidden px-4">
      {/* Background Glitch Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-hud-accent/10 blur-[100px] opacity-20" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-kiwi-500/10 blur-[100px] opacity-20" />
      </div>

      <div className="relative z-10 text-center max-w-md w-full p-8 border border-white/10 bg-black/50 backdrop-blur-md rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        {/* Error Icon */}
        <div className="w-16 h-16 mx-auto mb-6 bg-red-500/10 border border-red-500/30 rounded-sm flex items-center justify-center text-red-500 animate-[pulse_2s_ease-in-out_infinite]">
          <AlertTriangle size={32} />
        </div>

        {/* Status Code */}
        <h1 className="text-6xl font-bold text-white mb-2 tracking-tighter relative inline-block">
          <span className="absolute -inset-1 animate-[pulse_0.2s_infinite] opacity-30 text-red-500 translate-x-1">
            404
          </span>
          404
        </h1>

        <h2 className="text-sm font-mono text-red-500 uppercase tracking-[0.2em] mb-8 border-b border-red-500/20 pb-4 mx-12">
          Signal Lost // System Error
        </h2>

        <p className="text-slate-400 font-mono text-sm mb-8 leading-relaxed">
          The requested data sector could not be located. Initiating emergency
          protocol...
        </p>

        {/* Redirect Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-[10px] font-mono text-slate-500 uppercase mb-2">
            <span>Auto-Redirect Sequence</span>
            <span>{countdown}s</span>
          </div>
          <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-kiwi-500 animate-[progress_3s_linear_forwards] origin-left"
              style={{ width: "100%" }}
            />
          </div>
        </div>

        <button
          onClick={() => router.push("/")}
          className="w-full py-4 text-xs font-bold uppercase tracking-widest bg-white/5 hover:bg-white/10 border border-white/10 hover:border-kiwi-500 hover:text-kiwi-500 transition-all rounded-sm group flex items-center justify-center gap-2"
        >
          <ArrowLeft
            size={14}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Return to Base
        </button>

        {/* Decorative corner markers */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20" />
      </div>

      <div className="absolute bottom-8 text-[10px] font-mono text-white/20 uppercase tracking-widest">
        Error Code: 0x404_NOT_FOUND
      </div>
    </div>
  );
}
