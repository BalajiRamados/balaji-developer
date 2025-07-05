import React from "react";
import Navbar from "./Navbar";
import AppContent from "./AppContent";

const DefaultLayout = () => {

    return (
        <>
            <div>
                <Navbar />
            </div>
            <div>
                <AppContent />
            </div>
        </>
    );

};

export default DefaultLayout;