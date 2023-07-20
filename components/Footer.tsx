import React from 'react';
import Image from "next/image";
import {footerLinks} from "@/constants";
import Link from "next/link";
type ColumnProps = {
    title: string,
    links: Array<string>
}
const FooterColumn = ({title, links}: ColumnProps) => (
    <div className="footer_column">
        <h4 className="font-semibold">
            {title}
        </h4>
        <ul className="flex flex-col gap-2 font-normal">
            {links.map((link)=><Link href="/" key={link}>{link}</Link>)}
        </ul>
    </div>
)
function Footer() {
    return (
        <footer className="flexStart footer">
            <div className="flex flex-col gap-12 w-full">
                <div className="flex ites-start flex-col">
                    <Image
                        width={115}
                        height={38}
                        alt="flexibble"
                        src="/logo-purple.svg"/>
                    <p className="tex-start text-sm mt-5 max-w-xs">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deserunt dolorem enim.
                    </p>
                </div>
                <div className="flex flex-wrap gap-12">
                    {footerLinks.map((footerLink)=>(
                        <FooterColumn links={footerLink.links} title={footerLink.title}/>
                    ))}
                </div>
            </div>
            <div className="flexBetween footer_copyright">
                <p>&copy; 2023 Flexibble. All rights reserved</p>
                <p className="text-gray">
                    <span className="text-black font-semibold">10,214</span>
                    projects submitted
                </p>
            </div>
        </footer>
    );
}

export default Footer;