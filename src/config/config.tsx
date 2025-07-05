import React from 'react';

interface Config {
    example: String,
    routes?: any
}

const config: Config = {
    example: "example"
}

config.routes = {
    home: "/",
    about: "/about",
    contact: "/contact",
    projects: "/projects",
    footer: "/footer"
}

export default config;