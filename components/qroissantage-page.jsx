"use client";

import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { WebHaptics } from "web-haptics";

const SAFETY_URL =
  "https://www.cybermalveillance.gouv.fr/tous-nos-contenus/actualites/qr-code-arnaques";

export function QroissantagePage() {
  const [showQR, setShowQR] = useState(false);
  const [device, setDevice] = useState("unknown");
  const [revealed, setRevealed] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    const ua = window.navigator.userAgent.toLowerCase();
    const isIphone = ua.includes("iphone") || ua.includes("ios");
    const isAndroid = ua.includes("android");

    if (isIphone) setDevice("iphone");
    else if (isAndroid) setDevice("android");
    else setDevice("desktop");

    setCurrentUrl(window.location.href);

    if (isIphone) {
      try {
        const haptics = new WebHaptics();
        haptics.trigger([
          { duration: 40, intensity: 0.7 },
          { delay: 40, duration: 40, intensity: 0.7 },
          { delay: 40, duration: 40, intensity: 0.9 },
          { delay: 40, duration: 560, intensity: 0.6 },
        ]);
      } catch {
        if ("vibrate" in navigator) {
          navigator.vibrate([40, 40, 40, 40, 40, 40, 560]);
        }
      }
    } else if (isAndroid && "vibrate" in navigator) {
      navigator.vibrate([40, 40, 40, 40, 40, 40, 560]);
    }

    const revealDelay = isIphone ? 3000 : 1500;

    const timer = window.setTimeout(() => {
      setRevealed(true);
    }, revealDelay);

    return () => window.clearTimeout(timer);
  }, []);

  const getTitle = () => {
    if (device === "iphone") return "Apple has blocked your device.";
    if (device === "android") return "Android System UI has stopped.";
    return "Critical system failure.";
  };

  const getSubText = () => {
    if (device === "iphone") {
      return "Security Lock: this iPhone was blocked after scanning an unsafe QR code.";
    }
    if (device === "android") return "System UI is not responding.";
    return "System halted.";
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-red-700 px-4 font-mono text-white">
      <button
        type="button"
        onClick={() => setShowQR(true)}
        className="absolute top-3 right-3 rounded border border-white/30 px-2 py-1 text-[10px] hover:bg-white/10"
      >
        QR
      </button>

      {showQR ? (
        <div
          id="qr-print-layer"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          role="dialog"
          aria-modal="true"
        >
          <div
            id="qr-print-card"
            className="flex flex-col items-center gap-4 rounded-xl border border-white/20 bg-neutral-900 p-6"
          >
            <QRCode value={currentUrl || "https://example.com"} />
            <div className="no-print flex items-center gap-2">
              <button
                type="button"
                onClick={() => window.print()}
                className="rounded border border-white/40 px-3 py-1 text-xs hover:bg-white/10"
              >
                imprimer
              </button>
              <button
                type="button"
                onClick={() => setShowQR(false)}
                className="rounded border border-white/20 px-3 py-1 text-xs opacity-80 hover:opacity-100"
              >
                fermer
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <div className="w-full max-w-md space-y-5 text-left">
        {!revealed ? (
          <>
            <p className="text-xs uppercase tracking-wider opacity-70">Alerte rouge</p>
            <h1 className="text-xl font-semibold">{getTitle()}</h1>
            <p className="text-sm opacity-90">{getSubText()}</p>
            <p className="text-xs opacity-70">Analyse en cours...</p>
          </>
        ) : (
          <div className="space-y-5 text-center">
            <svg
              fill="#ffffff"
              width="200"
              height="200"
              viewBox="0 0 512.107 512.107"
              aria-hidden="true"
              className="mx-auto h-36 w-36 sm:h-52 sm:w-52"
            >
              <g transform="translate(-1)">
                <path d="M340.892,130.873c-9.293-12.698-23.415-19.977-38.758-19.977h-90.18c-15.343,0-29.466,7.279-38.758,19.977 c-9.762,13.338-12.578,30.797-7.526,46.72l57.429,180.89c4.915,15.479,18.236,25.481,33.946,25.481 c15.71,0,29.022-10.001,33.937-25.481l57.438-180.898C353.47,161.67,350.654,144.211,340.892,130.873z" />
                <path d="M149.399,182.757c-4.343-13.696-4.215-28.245-0.094-41.626c-23.134,5.828-44.365,18.321-60.442,36.07 c-27.076,29.909-26.411,76.143,1.51,105.259l57.924,60.356c16.998,14.882,38.016,23.228,59.989,24.439 c-0.478-1.212-1.058-2.347-1.459-3.61L149.399,182.757z" />
                <path d="M136.499,355.173l-58.445-60.894c-14.199-14.805-22.537-33.254-25.148-52.361C36.139,261.358,21.7,282.461,9.976,304.793 c-12.262,20.753-11.938,46.336,0.836,66.773c11.648,18.637,33.664,29.653,55.876,29.645c7.629,0,15.266-1.297,22.519-4.019 l68.224-27.29c-7.185-3.994-14.037-8.695-20.378-14.242L136.499,355.173z" />
                <path d="M504.316,305.169c-11.878-22.613-26.359-43.785-43.145-63.258c-2.611,19.115-10.948,37.555-25.148,52.361l-57.89,60.373 l-0.563,0.486c-6.554,5.751-13.619,10.615-21.035,14.72l68.582,27.426c6.716,2.458,14.242,3.721,21.999,3.721 c20.949,0,43.537-9.25,56.149-29.431C516.041,351.129,516.365,325.546,504.316,305.169z" />
                <path d="M423.708,282.461c27.921-29.116,28.587-75.358,1.51-105.267c-16.077-17.741-37.308-30.234-60.442-36.062 c4.122,13.38,4.25,27.93-0.094,41.617l-57.429,180.898c-0.401,1.254-0.981,2.389-1.459,3.601 c22.008-1.237,43.136-9.694,60.527-24.943L423.708,282.461z" />
              </g>
            </svg>

            <p className="text-xs uppercase tracking-wider opacity-70">Alerte rouge</p>

            <h1 className="text-3xl font-bold leading-tight">
              Vous venez de vous faire QRoissanter.
            </h1>

            <p className="text-base opacity-95">
              Avant de scanner un QR code, assurez-vous qu&apos;il provient d&apos;une source fiable.
            </p>

            <p className="text-base font-semibold">
              En prime, vous avez 48 heures pour ramener des croissants a toute l&apos;equipe.
            </p>

            <div className="space-y-2 pt-2 text-sm opacity-90">
              <p>CODE : QROISSANTAGE_FATAL</p>
              <p>Cause : exces de confiance.</p>
            </div>

            <a
              href={SAFETY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block pt-2 text-sm font-semibold underline hover:opacity-100"
            >
              Cliquez ici pour en apprendre davantage sur les risques des QR codes.
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
