import React, { Suspense } from "react";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes";
import { CSpinner } from '@coreui/react'

const AppContent = () => {
    return (
       <Container id="appContainerCon">
            <Suspense fallback={<CSpinner color="primary" />} />
                <Routes>
                    {
                        publicRoutes.map((route, index) => {
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={route.component}
                                />
                            );
                        })
                    }
                    {
                        privateRoutes.map((route, index) => {
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={route.component}
                                />
                            );
                        })
                    }
                </Routes>
       </Container>
    )
}

export default React.memo(AppContent);