"use client";

import { Children, useRef, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { useOnClickOutside } from "usehooks-ts";
import { CgMenuLeft, CgClose } from "react-icons/cg";
import { Logo } from "./Logo";

import type { IValuable } from "@/types/generic";

export const Layout = ({ links }: { links: IValuable<string>[] }) => {
    const [toogle, setToogle] = useState(false);
    const ref = useRef(null);

    const handleClickOutside = () => {
        if (toogle) setToogle(false);
    };

    useOnClickOutside(ref, handleClickOutside);

    const styles = clsx({
        ["left-0"]: toogle,
        ["left-[-15rem]"]: !toogle,
    });

    return (
        <div
            ref={ref}
            className={`bg-white min-h-[100vh] w-[15rem] max-w-[20rem] p-5 border-r border-main-gray-border absolute md:fixed ${styles} md:left-0 transition-all z-10`}
        >
            <button
                className="absolute right-[-2.5rem] cursor-pointer flex md:hidden"
                onClick={() => setToogle((state) => !state)}
            >
                {toogle ? (
                    <CgClose className="text-black text-[1.5rem]" />
                ) : (
                    <CgMenuLeft className="text-black text-[1.5rem]" />
                )}
            </button>

            <small>
                <Link
                    href={`/`}
                    passHref
                    className="text-main-blue text-[1.5rem] font-semibold"
                >
                    <Logo />
                </Link>
            </small>

            <nav className="mt-7 border-b border-main-gray-border pb-4 mb-4">
                <ol className="space-y-4">
                    {Children.toArray(
                        links.map(({ id, value }) => (
                            <li>
                                <Link
                                    href={id}
                                    passHref
                                    className="bg-transparent text-link-gray text-[0.875rem] font-medium leading-[1.25rem] hover:bg-label-gray-active block w-full p-2 rounded-md"
                                >
                                    {value}
                                </Link>
                            </li>
                        ))
                    )}
                    {/* <li key={`logout-nav-item`}>
                        <Link
                            href="/api/auth/logout"
                            passHref
                            className="bg-transparent text-link-gray text-[0.875rem] font-medium leading-[1.25rem] hover:bg-label-gray-active block w-full p-2 rounded-md text-start"
                        >
                            Log out
                        </Link>
                    </li> */}
                </ol>
            </nav>

            {/* {user && (
                <Link href={`/${user.username}`} passHref>
                    <User
                        id={user.id}
                        name={user.name}
                        lastname={user.lastname}
                        email={user.email}
                        username={user.username}
                        thumbnail={user.thumbnail}
                    />
                </Link>
            )} */}
        </div>
    );
};
