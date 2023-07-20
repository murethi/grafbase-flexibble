import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {NavLinks} from "@/constants";
import {session} from "next-auth/core/routes";
import AuthProviders from "@/components/AuthProviders";

const Navbar = () => {
    const session = null;
    return (
        <nav className="flexBetween navbar">
            <div className="flex-1 flexStart gap-10">
                <Link href="/">
                    <Image
                        height={43}
                        alt="Flexibble"
                        width={115}
                        src="/logo.svg"/>
                </Link>
                <ul className="xl:flex hidden text-small gap-7">
                    {NavLinks.map((link) => (
                        <Link href={link.href} key={link.key}>
                            {link.text}
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="flexCenter gap-4">
                {session?(
                    <>
                        UserPhoto
                        <Link href="/create-project">Share Works</Link>
                    </>
                ):(
                    <AuthProviders/>
                )}
            </div>
        </nav>
    )
        ;
}

export default Navbar;