import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <section className="topbar">
            <div className="topbar-items">
                <div className="topbar-left">
                    <span
                        className="bar-icon"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <FaBars />
                    </span>
                </div>
                <div className="topbar-center">
                    <div className="input-search">
                        <input type="text" placeholder="search songs" />
                        <IoSearchOutline />
                    </div>
                </div>
                <div className="topbar-right">
                    <span>Welcome, Alfandhi</span>
                    <img src="/images/test.jpg" alt="" />
                </div>
            </div>
        </section>
    );
}
