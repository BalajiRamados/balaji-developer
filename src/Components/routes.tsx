import React from "react";
import config from "../config/config";
import Home from "../Home";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Projects from "./Projects";

interface RouteElement {
    path: any,
    name: String,
    component: any,
    exact?: boolean
};

const Routes = config.routes;

const publicRoutes: RouteElement[] = [
    {
        path: Routes.home,
        name: "Home",
        component: <Home />
    },
    {
        path: Routes.about,
        name: "About",
        component: <About />
    },
    {
        path: Routes.contact,
        name: "Contact",
        component: <Contact />
    },
    {
        path: Routes.projects,
        name: "Projects",
        component: <Projects />
    }
];

const privateRoutes: RouteElement[] = [
    // Add private routes here if needed
];

export { publicRoutes, privateRoutes };