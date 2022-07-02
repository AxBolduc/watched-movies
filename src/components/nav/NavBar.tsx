import { Disclosure, Transition } from "@headlessui/react";
import Link from "next/link";
import { useState } from "react";
import { Login } from "../Login";
import { MenuIcon } from "@heroicons/react/outline"

export const NavBar: React.FunctionComponent = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="px-4 bg-stone-800 flex justify-between items-center rounded-b-lg w-full transition-all">
            <div className="hidden md:flex justify-around gap-8 w-max">
                <Link href="/">
                    <div className="px-4 py-2 md:px-8 md:py-4 hover:bg-stone-600 text-white font-bold cursor-pointer transition-all duration-300">
                        Home
                    </div>
                </Link>
                <Link href="/trending">
                    <div className="px-4 py-2  md:px-8 md:py-4 hover:bg-stone-600 text-white font-bold cursor-pointer transition-all duration-300">
                        Trending
                    </div>
                </Link>
                <Link href="/watched">
                    <div className="px-4 py-2 md:px-8 md:py-4 hover:bg-stone-600 text-white font-bold cursor-pointer transition-all duration-300">
                        Watched
                    </div>
                </Link>
            </div>

            <div
                className='md:hidden'
            >
                <MenuIcon className="h-12 w-12 stroke-gray-200" onClick={() => setMenuOpen((prev) => !prev)}/>
                <Transition
                    show={menuOpen}
                    enter="transition ease-in duration-300 transform"
                    enterFrom="-translate-x-full"
                    enterTo="trnaslate-x-0"
                    leave="transition ease-out duration-300"
                    leaveFrom="trnaslate-x-0"
                    leaveTo="-translate-x-full"
                >
                    <div className="flex flex-col justify-center">
                        <Link href="/">
                            <div className="px-4 py-2 md:px-8 md:py-4 hover:bg-stone-600 text-white font-bold cursor-pointer transition-all duration-300">
                                Home
                            </div>
                        </Link>
                        <Link href="/trending">
                            <div className="px-4 py-2  md:px-8 md:py-4 hover:bg-stone-600 text-white font-bold cursor-pointer transition-all duration-300">
                                Trending
                            </div>
                        </Link>
                        <Link href="/watched">
                            <div className="px-4 py-2 md:px-8 md:py-4 hover:bg-stone-600 text-white font-bold cursor-pointer transition-all duration-300">
                                Watched
                            </div>
                        </Link>
                    </div>
                </Transition>
            </div>
            <Login />
        </nav>
    );
}

export default NavBar;
