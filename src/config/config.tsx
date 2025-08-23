import React from 'react';

interface Config {
    example: String,
    routes?: any,
    roles: String[]
}

const config: Config = {
    example: "example",
    roles: ['MERN Stack Developer', 'AWS Data Engineer']
}

config.routes = {
    home: "/",
    about: "/about",
    contact: "/contact",
    projects: "/projects",
    footer: "/footer"
}

export default config;