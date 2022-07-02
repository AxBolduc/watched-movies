import Link from "next/link";
import React, { Component } from "react";
import { Login } from "../components/Login";

export const NavBar: React.FunctionComponent = () => {
    return (
        <nav className="px-4 bg-stone-800 flex justify-between items-center rounded-b-lg">
            <div className="flex justify-around gap-8 w-max">
                <Link href="/">
                    <div className="px-8 py-4 hover:bg-stone-600 text-white font-bold cursor-pointer transition-all duration-300">
                        Home
                    </div>
                </Link>
                <Link href="/trending">
                    <div className="px-8 py-4 hover:bg-stone-600 text-white font-bold cursor-pointer transition-all duration-300">
                        Trending
                    </div>
                </Link>
                <Link href="/watched">
                    <div className="px-8 py-4 hover:bg-stone-600 text-white font-bold cursor-pointer transition-all duration-300">
                        Watched
                    </div>
                </Link>
            </div>
            <ul className="navList">
                <li className="navItem"></li>
                <li className="navItem"></li>
                <li className="navItem"></li>
            </ul>
            <Login />
        </nav>
    );
};
