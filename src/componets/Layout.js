import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import InfoButtonWithPopup from "./InfoButton";

export default function Layout({children}) {
    return (
        <div>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <InfoButtonWithPopup/>
        </div>
    )
}