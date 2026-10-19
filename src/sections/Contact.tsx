import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import data from "../data/data";

type ToastState = { x: number; y: number; id: number; floating: boolean } | null;

export default function Contact() {
    const [toast, setToast] = useState<ToastState>(null);
    const idRef = useRef(0);
    const floatTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const clearTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const address = () => `${data.email.user}@${data.email.domain}.${data.email.tld}`;

    const handleCopy = (e: React.MouseEvent<HTMLButtonElement>) => {
        navigator.clipboard.writeText(address());

        if (floatTimerRef.current) clearTimeout(floatTimerRef.current);
        if (clearTimerRef.current) clearTimeout(clearTimerRef.current);

        const id = ++idRef.current;
        setToast({ x: e.clientX, y: e.clientY, id, floating: false });

        floatTimerRef.current = setTimeout(() => {
            setToast((prev) => (prev?.id === id ? { ...prev, floating: true } : prev));
        }, 50);

        clearTimerRef.current = setTimeout(() => {
            setToast((prev) => (prev?.id === id ? null : prev));
        }, 1200);
    };

    return (
        <>
            <div className="flex flex-col gap-2">
                <h1>Contact</h1>
                <p>
                    {`The best way to reach me is by email. `}
                </p>
                <button
                    type="button"
                    onClick={handleCopy}
                    className="glass-borders p-1 block hover:opacity-80 transition-opacity w-full text-left cursor-pointer mt-2"
                >
                    <div className="flex items-center font-mono text-sm text-body flex-row py-2 px-3 bg-black/50 border-neutral-500 border">
                        <span className="whitespace-pre">
                            {data.email.user}
                            <span className="text-gray-400"> at </span>
                            {data.email.domain}
                            <span className="text-gray-400"> dot </span>
                            {data.email.tld}
                        </span>
                        <img src="/copy.ico" className="size-6 ml-auto" />
                    </div>
                </button>
            </div>
            {toast &&
                createPortal(
                    <div
                        key={toast.id}
                        className={`fixed z-50 pointer-events-none select-none px-2 py-0.5 text-xs font-mono bg-[#ece9d8] text-[#5a5248] border border-[#a09070] -translate-x-1/2 transition-all duration-1000 ease-in ${toast.floating ? "opacity-0 -translate-y-12" : "opacity-100 -translate-y-8"}`}
                        style={{ left: toast.x, top: toast.y }}
                    >
                        Copied!
                    </div>,
                    document.body,
                )}
        </>
    );
}
