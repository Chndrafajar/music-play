import React from "react";
import { FaPlay } from "react-icons/fa6";

export default function BrowseSongs() {
    return (
        <>
            <section className="browse-songs">
                <div className="browse-items">
                    <h5 className="title">Browse Songs</h5>
                </div>
                <div className="items-songs">
                    <div className="items-left-songs">
                        <img src="/images/test.jpg" alt="" />
                        <h6>Taylor Swift</h6>
                    </div>
                    <div className="items-right-songs">
                        <FaPlay />
                    </div>
                </div>
                <div className="items-songs">
                    <div className="items-left-songs">
                        <img src="/images/test.jpg" alt="" />
                        <h6>Taylor Swift</h6>
                    </div>
                    <div className="items-right-songs">
                        <FaPlay />
                    </div>
                </div>
                <div className="items-songs">
                    <div className="items-left-songs">
                        <img src="/images/test.jpg" alt="" />
                        <h6>Taylor Swift</h6>
                    </div>
                    <div className="items-right-songs">
                        <FaPlay />
                    </div>
                </div>
            </section>
        </>
    );
}
