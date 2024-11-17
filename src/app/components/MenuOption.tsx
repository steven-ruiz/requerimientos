import Link from "next/link";

export default function MenuOption({text, link = "/"}: {text: string, link?: string}) {
    return (
        <Link href={link}>
            <div className="px-2 py-1 border-r-[1px] border-white">{text}</div>
        </Link>
    )
}