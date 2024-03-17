import { Head } from "@inertiajs/react";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Autehnticated({ children }) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <section className="dashboard">
                <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <div className="main-dashboard">
                    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                    <main className="item-dashboard">{children}</main>
                </div>
            </section>
        </>
    );
}
