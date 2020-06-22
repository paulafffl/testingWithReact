import React from 'react';
import './styles.scss'
import Logo from './../../assets/logo-placeholder.png'

const Header = (props) => {
    return (
        <header>
            <div className='wrap'> 
                <div className='logo'>
                    <img src={Logo} alt={'React Logo'}/>
                </div>
            </div>
        </header>
    );
};

export default Header;