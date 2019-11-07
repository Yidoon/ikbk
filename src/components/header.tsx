import React from 'react';
import './header.css';

const Header: React.FC = () => {
  return (
    <div className="header">
        <div className="header-content">
            <div className="header-logo">
                LOGO
            </div>
            <div className="header-center">
                {/*<div className="header-nav">*/}
                {/*    <span className="header-nav-item">主页</span>*/}
                {/*    <span className="header-nav-item">探索</span>*/}
                {/*</div>*/}
                <ul className="header-nav">
                    <li className="header-nav-item">
                        <a href="/">主页</a>
                    </li>
                    <li className="header-nav-item">
                        <a href="/">鱼塘</a>
                    </li>
                </ul>
                <div className="header-input">

                </div>
            </div>
            <div className="header-tool">

            </div>
        </div>
    </div>
  )
}

export default Header