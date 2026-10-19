import data from "../data/data";

export default function About() {
    const [before, after] = data.bio.split("Contact");

    return (
        <div className="flex flex-col h-full w-full gap-3">
            <h1>About</h1>
            <div className="glass-borders p-1 flex flex-col">
                <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 md:gap-y-4 p-3 bg-black/50 border-neutral-500 border">
                    <div
                        className="shrink-0 flex items-center justify-center rounded-full text-lg md:text-xl font-bold text-white size-14 md:size-18 md:row-span-2"
                        style={{
                            background: "radial-gradient(circle at 35% 35%, #a0d0ff, #0060c0)",
                            border: "2px solid rgba(255,255,255,0.3)",
                            boxShadow:
                                "0 4px 12px rgba(0,0,0,.6), inset 0 1px 0 rgba(255,255,255,.2)",
                            textShadow: "0 0 4px #000",
                        }}
                    >
                        {data.initials}
                    </div>
                    <h1 className="self-center md:self-start">Kienan (Teng) Ma</h1>
                    <p className="text-body col-span-2 md:col-span-1 md:col-start-2">
                        {before}
                        <a
                            href="#contact"
                            className="inline-block underline cursor-pointer transition-transform duration-50 ease-in-out hover:scale-105"
                        >
                            Contact
                        </a>
                        {after}
                    </p>
                </div>
            </div>
        </div>
    );
}
