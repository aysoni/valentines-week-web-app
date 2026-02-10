import { useState, useEffect } from "react";
import Swal from "sweetalert2";

import rose from "./assets/GifData/tabs/rose.gif";
import chocolate from "./assets/GifData/tabs/chocolate.gif";
import proposal from "./assets/GifData/tabs/propose.gif";
import teddy from "./assets/GifData/tabs/teddy.gif";
import promise from "./assets/GifData/tabs/promise.gif";
import hug from "./assets/GifData/tabs/Hug.gif";
import kiss from "./assets/GifData/tabs/kiss.gif";
import valentine from "./assets/GifData/tabs/valentines-day.gif";

const days = [
    { day: 7, title: "Rose Day 🌹", img: rose, text: "A rose for the one who makes my life bloom 🌹" },
    { day: 9, title: "Chocolate Day 🍫", img: chocolate, text: "Life is sweeter with you 🍫❤️" },
    { day: 8, title: "Propose Day 💍", img: proposal, text: "I choose you today and forever 💍" },
    { day: 10, title: "Teddy Day 🧸", img: teddy, text: "I’ll always be your teddy 🧸" },
    { day: 11, title: "Promise Day 🤞", img: promise, text: "I promise to love you endlessly 🤞" },
    { day: 12, title: "Hug Day 🤗", img: hug, text: "Here’s a warm hug just for you 🤗" },
    { day: 13, title: "Kiss Day 💋", img: kiss, text: "A kiss sealed with all my love 💋" },
    { day: 14, title: "Valentine’s Day ❤️", img: valentine, text: "Happy Valentine’s Day my forever ❤️" },
];

export default function ValentineTabs() {
    const today = new Date();
    const todayDay = today.getMonth() === 1 ? today.getDate() : 0;

    const unlockedIndex = Math.max(
        0,
        days.findLastIndex((d) => d.day <= todayDay)
    );

    const [active, setActive] = useState(unlockedIndex);

    useEffect(() => {
        setActive(unlockedIndex);
    }, [todayDay, unlockedIndex]);

    const openDialog = (item) => {
        Swal.fire({
            title: item.title,
            text: item.text,
            imageUrl: item.img,
            imageHeight: 220,
            imageAlt: item.title,
            confirmButtonText: "❤️",
            confirmButtonColor: "#f43f5e",
            background: "#fff",
            width: 420,
        });
    };

    return (
        <div className="mt-8 w-full max-w-4xl">
            <div
                className="mb-4 px-4 text-center"
                style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "clamp(1.1rem, 3vw, 1.6rem)",
                    lineHeight: "1.4",
                    color: "#be123c",
                }}
            >
                From <strong>7th to 14th February</strong>, every day is my way of loving you — tap a date, Cutu ❤️
            </div>
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-5">
                {days.map((item, index) => {
                    const unlocked = item.day <= todayDay;

                    return (
                        <button
                            key={item.day}
                            disabled={!unlocked}
                            onClick={() => {
                                if (unlocked) {
                                    setActive(index);
                                    openDialog(item);
                                }
                            }}
                            className={`px-3 py-1 rounded-full text-sm font-semibold transition
                ${unlocked
                                    ? active === index
                                        ? "bg-rose-500 text-white"
                                        : "bg-rose-100 text-rose-700 hover:bg-rose-300"
                                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                                }`}
                        >
                            {item.day} Feb
                        </button>
                    );
                })}
            </div>
        </div>
    );
}