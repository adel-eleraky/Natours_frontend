import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";

const Layout = ({ title, alert, children }) => {
    return (
        <div data-alert={alert || ""}>
            {/* <head>
                <title>Natours</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link
                    href="https://fonts.googleapis.com/css?family=Lato:300,400,400i,700"
                    rel="stylesheet"
                />
                <link rel="stylesheet" href="/css/style.css" />
                <link rel="shortcut icon" type="image/png" href="/img/favicon.png" />
                <link
                    href="https://api.mapbox.com/mapbox-gl-js/v0.50.0/mapbox-gl.css"
                    rel="stylesheet"
                />
                <script src="https://js.stripe.com/v3/"></script>
                <script src="/js/bundle.js"></script>
            </head> */}
            <Header />
            <Outlet />
            {/* <main>{children}</main> */}
            <Footer />
        </div>
    );
};

export default Layout;
