import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './SlickKab.css'

import logoMagelang from '../../assets/img/logo/magelang.png'
import logoBantul from '../../assets/img/logo/bantul.png'
import logoKulonProgo from '../../assets/img/logo/kulonprogo.png'
import logoBukittinggi from '../../assets/img/logo/bukittinggi.png'

import bgMagelang from '../../assets/img/main-bg/magelang.png'
import bgBantul from '../../assets/img/main-bg/bantul.png'
import bgKulonProgo from '../../assets/img/main-bg/kulonprogo.png'
import bgBukittinggi from '../../assets/img/main-bg/bukittinggi.png'
import { Link } from 'react-router-dom';

export default function SlickKab2() {

    const [main, setMain] = useState([])

    const carouselSettings = {
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        arrows: false,
        infinite: true,
        slideToScroll: 1,
        // pauseOnHover: false
    }

    const summary = {
        items: [
            {
                'name': 'Geschool Magelang',
                'desc': 'SIP Cemerlang',
                'region': 'Magelang',
                'logo': `${logoMagelang}`,
                'bg': `${bgMagelang}`
            },
            {
                'name': 'Geschool Bantul',
                'desc': 'Bantul Projotamansari Nyaman Learning',
                'region': 'Bantul',
                'logo': `${logoBantul}`,
                'bg': `${bgBantul}`
            },
            {
                'name': 'Geschool Kulonprogo',
                'desc': 'Kulonprogo Binangun Blended Learning',
                'region': 'Kulonprogo',
                'logo': `${logoKulonProgo}`,
                'bg': `${bgKulonProgo}`
            },
            {
                'name': 'Geschool Bukittinggi',
                'desc': 'Bukittinggi Blended Learning',
                'region': 'Bukittinggi',
                'logo': `${logoBukittinggi}`,
                'bg': `${bgBukittinggi}`
            }
        ]
    }

    useEffect(() => {
        setMain(summary.items)
    }, [])

    return (
        <Slider {...carouselSettings} style={{ width: '50%' }}>
            {
                main.map((item, index) => (
                    <div className='col-12'>
                        <Link key={index} to="/page/kab" className="col-12 main-item-img right-slick-item" style={{ background: `url(${item.bg})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                            <h2>{item.name}</h2>
                            <img src={item.logo} className="item-logo" alt={item.region} srcSet="" />
                            <p>{item.desc}</p>
                            <div className="overlay"></div>
                        </Link>
                    </div>
                ))
            }
        </Slider>
    )
}
