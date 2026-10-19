interface Props {
    open: boolean;
    className?: string;
}

// Recreation of arrowright.ico. Only the arrow flips; the orb shading stays put.
export default function MenuArrow({ open, className = "" }: Props) {
    return (
        <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
            <defs>
                <linearGradient id="menu-arrow-orb" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="48">
                    <stop offset="0" stopColor="#a3adeb" />
                    <stop offset="0.17" stopColor="#8bb3f2" />
                    <stop offset="0.33" stopColor="#526adb" />
                    <stop offset="0.375" stopColor="#1236c7" />
                    <stop offset="0.5" stopColor="#103bb8" />
                    <stop offset="0.62" stopColor="#206ab9" />
                    <stop offset="0.71" stopColor="#2c85bc" />
                    <stop offset="0.79" stopColor="#50bbd2" />
                    <stop offset="0.9" stopColor="#4dd2fa" />
                    <stop offset="1" stopColor="#69e4fd" />
                </linearGradient>
                <linearGradient id="menu-arrow-gloss" gradientUnits="userSpaceOnUse" x1="0" y1="2" x2="0" y2="18">
                    <stop offset="0" stopColor="#fff" stopOpacity="0.55" />
                    <stop offset="1" stopColor="#fff" stopOpacity="0.05" />
                </linearGradient>
                <linearGradient id="menu-arrow-fill" gradientUnits="userSpaceOnUse" x1="0" y1="10" x2="0" y2="37">
                    <stop offset="0" stopColor="#f7f8f9" />
                    <stop offset="0.45" stopColor="#e7e8e9" />
                    <stop offset="1" stopColor="#d7d8d9" />
                </linearGradient>
                <clipPath id="menu-arrow-clip">
                    <circle cx="24" cy="24" r="23" />
                </clipPath>
            </defs>

            {/* orb shading (fixed) */}
            <circle cx="24" cy="24" r="23" fill="url(#menu-arrow-orb)" />
            <g clipPath="url(#menu-arrow-clip)">
                <ellipse cx="24" cy="10" rx="20" ry="8.5" fill="url(#menu-arrow-gloss)" />
            </g>
            <circle cx="24" cy="24" r="22.25" fill="none" stroke="#4099d5" strokeOpacity="0.6" strokeWidth="1.5" />
            <circle cx="24" cy="24" r="23" fill="none" stroke="#374b6f" strokeWidth="1" />

            {/* arrow (flips) */}
            <g transform="translate(24 23.4) scale(1.1) translate(-24 -23.4)">
                <path
                    d="M11 20.8H26.4L21.2 13.4L25.4 10L39.4 23.4L25.4 36.8L21.2 33.4L26.4 26H11Z"
                    fill="url(#menu-arrow-fill)"
                    stroke="#384888"
                    strokeWidth="0.9"
                    strokeLinejoin="round"
                    className={`origin-[24px_23.4px] transition-transform duration-300 ease-in-out ${open ? "-scale-x-100" : ""}`}
                />
            </g>
        </svg>
    );
}
