import React from 'react';
import { Link } from 'react-router-dom';
import './FooterLogin.css';
import AvatarWithArrow from './AvatarLogin';

const FooterLogin: React.FC = () => {
    return (
        <footer>
            <ul>
                <li>
                    <Link to="/login">
                     <AvatarWithArrow />
                    </Link>
                </li>
            </ul>
        </footer>
    );
};

export default FooterLogin;
