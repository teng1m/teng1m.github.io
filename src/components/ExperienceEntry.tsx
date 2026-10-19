import Pill from "./Pill";

interface Props {
    logo: string;
    logoColour?: string;
    company: string;
    role: string;
    period: string;
    description: string;
    skills: string[];
}

export default function ExperienceEntry({
    logo,
    logoColour,
    company,
    role,
    period,
    description,
    skills,
}: Props) {
    return (
        <div className="glass-borders p-1 flex flex-col">
            <div className="grid grid-cols-[auto_1fr] md:grid-cols-[auto_1fr_auto] gap-x-4 gap-y-1.5 p-3 bg-black/50 border-neutral-500 border">
                <div
                    className="relative overflow-hidden rounded-md shrink-0 p-2 size-16 col-start-1 row-span-3 md:row-span-5"
                    style={{ backgroundColor: logoColour ?? "#1e1e1e" }}
                >
                    <img src={logo} className="w-full h-full object-contain" />
                    <div className="absolute inset-x-0 top-0 h-1/2 pointer-events-none bg-linear-to-b from-white/80 to-transparent rounded-t-md" />
                </div>
                <h1 className="col-start-2">{company}</h1>
                <span className="col-start-2 md:col-start-3 md:row-start-1 text-sm text-neutral-400 italic">
                    {period}
                </span>
                <p className="col-start-2 md:col-span-2 text-sm text-dim">{role}</p>
                <p className="col-span-2 md:col-start-2 text-sm">{description}</p>
                <div className="col-span-2 md:col-start-2 flex flex-row flex-wrap gap-2">
                    {skills.map((skill) => (
                        <Pill key={skill}>{skill}</Pill>
                    ))}
                </div>
            </div>
        </div>
    );
}
