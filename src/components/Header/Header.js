import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className = "nav">
                <ul>
                    <li>
                        <img src="" alt=""/>
                    </li>
                    <li>
                        <link to="/home">Home</link>
                    </li>
                    <li>
                        <link to="/destination">Destination</link>
                    </li>
                    <li>
                        <link to="/blog">Blog</link>
                    </li>
                    <li>
                        <link to="/login">Login</link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;