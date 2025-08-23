import React from "react";
import Navbar from "./Navbar";
import AppContent from "./AppContent";
import 'bootstrap/dist/css/bootstrap.min.css';

const DefaultLayout = () => {

    return (
        <>
            <div className="p-default-layout-container">
                <div className="p-navbar-outer-main-page-container">
                    <Navbar />
                </div>
                <div className="p-app-content-outer-main-page-container">
                    <AppContent />
                </div>
            </div>
        </>
    );

};

export default DefaultLayout;