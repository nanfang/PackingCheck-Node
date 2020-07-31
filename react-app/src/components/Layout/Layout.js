import React from "react";

const Layout = (props) => (
    <React.Fragment>
        <header>
            <div>Logo</div>
        </header>
        <main>
            {props.children}
        </main>
        <footer>Footer</footer>
    </React.Fragment>
);

export default Layout;