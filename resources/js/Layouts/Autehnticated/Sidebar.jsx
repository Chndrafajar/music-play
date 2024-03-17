import React from "react";
import { IoHome, IoLogOut } from "react-icons/io5";
import {
    FaDownload,
    FaMessage,
    FaMoneyCheckDollar,
    FaStar,
    FaUser,
} from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { Link } from "@inertiajs/react";
import MenuItem from "./MenuItem";
import { UserMenu, UserOthers } from "./MenuList";

export default function Sidebar({ menuOpen, setMenuOpen }) {
    return (
        <>
            <section className={menuOpen ? "sidebar active" : "sidebar"}>
                <div className="header-sidebar">
                    <h5 className="sidebar-icon">
                        Music<span>Play</span>
                    </h5>
                    <div
                        className="bars-close"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <IoMdClose />
                    </div>
                </div>

                <span className="title-menu-side">Menu</span>
                <ul className="menu-link">
                    {UserMenu.map((menu, index) => (
                        <MenuItem
                            key={`${index}-${menu.text}`}
                            link={menu.link}
                            icon={menu.icon}
                            text={menu.text}
                            isActive={menu.link}
                        />
                    ))}
                </ul>
                <span className="title-menu-side">Others</span>
                <ul className="menu-link">
                    {UserOthers.map((menu, index) => (
                        <MenuItem
                            key={`${index}-${menu.text}`}
                            link={menu.link}
                            icon={menu.icon}
                            text={menu.text}
                            isActive={menu.link && route().current(menu.link)}
                        />
                    ))}
                </ul>
            </section>
        </>
    );
}
