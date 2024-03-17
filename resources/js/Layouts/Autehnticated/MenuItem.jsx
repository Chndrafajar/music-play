import { Link } from "@inertiajs/react";
import React from "react";

export default function MenuItem({
    link,
    icon,
    text,
    isActive,
    method = "get",
}) {
    return (
        <Link href={`${link}`} className="link" method={method}>
            <li className={`${isActive && "active"}`}>
                {icon} {text}
            </li>
        </Link>
    );
}
