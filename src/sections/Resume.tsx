import data from "../data/data";

export default function Resume() {
    const gloss =
        "relative overflow-hidden before:absolute before:inset-x-[5%] before:top-0 before:h-4 before:rounded-lg before:opacity-30 before:pointer-events-none before:bg-linear-to-b before:from-white/10 before:to-white/30";

    const buttonStyle = `${gloss} w-fit bg-linear-to-b flex items-center gap-1 px-2 py-1 rounded-sm border border-gray-900 [text-shadow:0_0_3px_#000] no-underline transition-transform duration-15 hover:scale-[1.03] hover:underline bg-size-[100%_calc(100%+3px)] from-white/35 via-neutral-500/25 via-60% to-neutral-700/40 text-gray-100 hover:to-gray-500`;

    return (
        <div className="flex flex-col h-full">
            <h1>Resume</h1>
            <div className="glass-borders p-1 flex flex-col flex-1 min-h-0 w-full mt-3">
                <div className="flex flex-col flex-1 min-h-0 overflow-hidden bg-black/50 border-neutral-500 border">
                    <div className="flex flex-row flex-wrap gap-2 m-3">
                        <a
                            href={data.links.resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={buttonStyle}
                        >
                            <img src="/magnifying_glass.ico" alt="" className="size-4" />
                            Fullscreen
                        </a>
                        <a href={data.links.resume} download className={buttonStyle}>
                            <img src="/download.ico" alt="" className="size-4" />
                            Download
                        </a>
                    </div>
                    <iframe
                        src={data.links.resume}
                        className="flex-1 w-full min-h-0"
                        style={{ height: "100%" }}
                    />
                </div>
            </div>
        </div>
    );
}
