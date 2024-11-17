import Link from "next/link";
import classNames from "classnames";

export default function MenuOption({text, link = "/", isActive = false}: {text: string, link?: string, isActive?: boolean}) {
    return (
        <Link href={link}>
            <div className={
                classNames(
                    { "border-r-[1px] border-white": link !== "/profile" },
                    "px-2 py-1 ", 
                    isActive ? "text-blue-500 " : "text-white"
                )}>{text}</div>
        </Link>
    )
}