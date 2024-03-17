import BrowseSongs from "@/Layouts/Autehnticated/BrowseSongs";
import Autehnticated from "@/Layouts/Autehnticated/Index";
import PopularCard from "@/Layouts/Autehnticated/PopularCard";

import React from "react";

export default function Dashboard() {
    return (
        <>
            <Autehnticated>
                <PopularCard />
                <BrowseSongs />
            </Autehnticated>
        </>
    );
}
