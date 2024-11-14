import type {Metadata} from "next";
import {PT_Serif} from "next/font/google";
import "./globals.css";
import {Toaster} from "react-hot-toast";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import Overlay from "@/components/common/overlay";
import React from "react";


const ptSerif = PT_Serif({subsets: ["latin", 'cyrillic'], weight: ["400", "700"], style: ["normal", "italic"]});

export const metadata: Metadata = {
    title: "center vostok",
    description: "",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="ru">
        <head>
            <link rel="icon" href="/mainLogo.png" sizes="any"/>
        </head>
        <body className={`${ptSerif.className} `}>
        <Toaster
            position="top-center"
            reverseOrder={false}
        />
        <Header/>
        <Sidebar/>
        {children}
        <Overlay/>
        </body>
        </html>
    );
}
