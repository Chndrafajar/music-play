import React from "react";
import {
    FaArrowLeft,
    FaCircleChevronLeft,
    FaCircleChevronRight,
    FaCirclePlay,
} from "react-icons/fa6";
export default function Show() {
    return (
        <>
            <div className="song-show">
                <div className="header-song">
                    <FaArrowLeft />
                </div>
                <div className="title-songs">
                    <h3>Taylor Swift</h3>
                </div>
                <div className="song-show-items">
                    <img src="/images/test.jpg" alt="" />
                    <div class="controls">
                        <div class="prev">
                            <FaCircleChevronLeft className="icons-song" />
                        </div>
                        <div class="play">
                            <FaCirclePlay className="icons-song" />
                        </div>
                        <div class="next">
                            <FaCircleChevronRight className="icons-song" />
                        </div>
                    </div>

                    <div class="track-time">
                        <div class="track"></div>
                        <div class="time">
                            <div class="total-time">03:20</div>
                            <div class="last-time">00:12</div>
                        </div>
                    </div>
                    {/* <audio controls className="audio-style">
                        <source src="oke" type="" />
                    </audio> */}
                </div>
            </div>
        </>
    );
}
