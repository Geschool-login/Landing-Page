import React from 'react'

import logoYayasan from '../../assets/img/yayasan-logo.png'
import iconIg from '../../assets/img/icon/instagram.svg'
import iconYt from '../../assets/img/icon/youtube.svg'
import iconFb from '../../assets/img/icon/facebook.svg'
import iconTw from '../../assets/img/icon/twitter.svg'
import iconLi from '../../assets/img/icon/linkedin.svg'

import './Footer.css'

export default function Footer() {
    return (
        <div className="col-12 footer-container">
            <h1>What's Geschool?</h1>
            <div className="footer-content">
                <div className="logo">
                    <img src={logoYayasan} alt="logo" srcset="" />
                </div>
                <div className="contact">
                    <h4>Kontak kami</h4>
                    <p>admin@geschool.net</p>
                    <div className="social">
                        <ul>
                            <li>
                                <a href="http://">
                                    <img src={iconIg} alt="icon-ig" srcset="" />
                                </a>
                            </li>
                            <li>
                                <a href="http://">
                                    <img src={iconFb} alt="icon-fb" srcset="" />
                                </a>
                            </li>
                            <li>
                                <a href="http://">
                                    <img src={iconTw} alt="icon-tw" srcset="" />
                                </a>
                            </li>
                            <li>
                                <a href="http://">
                                    <img src={iconYt} alt="icon-yt" srcset="" />
                                </a>
                            </li>
                            <li>
                                <a href="http://">
                                    <img src={iconLi} alt="icon-li" srcset="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copyright">
                &copy; 2021 Geschool . All Rights Reserved
            </div>
        </div>
    )
}
