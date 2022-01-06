import React, { useEffect, useState } from 'react'

import logoPadang from '../../assets/img/logo/padang.png'
import logoYogya from '../../assets/img/logo/yogya-kota.png'
import logoGunungKidul from '../../assets/img/logo/gunungkidul.png'
import logoSleman from '../../assets/img/logo/sleman.png'
import logoTangsel from '../../assets/img/logo/tangsel.png'
import logoMagelang from '../../assets/img/logo/magelang.png'
import logoBantul from '../../assets/img/logo/bantul.png'
import logoKulonProgo from '../../assets/img/logo/kulonprogo.png'
import logoBukittinggi from '../../assets/img/logo/bukittinggi.png'

import bgPadang from '../../assets/img/web-bg/padang.png'
import bgYogya from '../../assets/img/web-bg/yogya.png'
import bgGunungKidul from '../../assets/img/web-bg/gunungkidul.png'
import bgSleman from '../../assets/img/web-bg/sleman.png'
import bgTangsel from '../../assets/img/web-bg/tangsel.png'
import bgMagelang from '../../assets/img/web-bg/magelang.png'
import bgBantul from '../../assets/img/web-bg/bantul.png'
import bgKulonProgo from '../../assets/img/web-bg/kulonprogo.png'
import bgBukittinggi from '../../assets/img/web-bg/bukittinggi.png'

import iconArrow from '../../assets/img/icon/arrow.svg'

import './KabPage.css'
import { Link } from 'react-router-dom'

export default function KabPage() {

    const [main_m1, setMain_m1] = useState([])
    const [main_m2, setMain_m2] = useState([])
    const [main_m3, setMain_m3] = useState([])
    const [main_m4, setMain_m4] = useState([])
    const [main_m5, setMain_m5] = useState([])


    const summary_m = {
        items1: [
            {
                'name': 'Geschool Yogyakarta',
                'desc': 'yogya.heschool.net',
                'link': 'https://yogya.geschool.net',
                'region': 'yogya',
                'logo': `${logoYogya}`,
                'bg': `${bgYogya}`
            },
            {
                'name': 'Geschool Sleman',
                'desc': 'sleman.geschool.net',
                'link': 'https://sleman.geschool.net',
                'region': 'Sleman',
                'logo': `${logoSleman}`,
                'bg': `${bgSleman}`
            },
        ],
        items2: [
            {
                'name': 'Geschool Bantul',
                'desc': 'bantul.geschool.net',
                'link': 'https://bantul.geschool.net',
                'region': 'Bantul',
                'logo': `${logoBantul}`,
                'bg': `${bgBantul}`
            },
            {
                'name': 'Geschool Gunung Kidul',
                'desc': 'gunungkidul.geschool.net',
                'link': 'https://gunungkidul.geschool.net',
                'region': 'Gunungkidul',
                'logo': `${logoGunungKidul}`,
                'bg': `${bgGunungKidul}`
            },
        ],
        items3: [
            {
                'name': 'Geschool Kulonprogo',
                'desc': 'Kulonprogo.geschool.net',
                'link': 'https://Kulonprogo.geschool.net',
                'region': 'Kulonprogo',
                'logo': `${logoKulonProgo}`,
                'bg': `${bgKulonProgo}`
            },
            {
                'name': 'Geschool Magelang',
                'desc': 'sipcemerlang.net',
                'link': 'https://sipcemerlang.net',
                'region': 'Magelang',
                'logo': `${logoMagelang}`,
                'bg': `${bgMagelang}`
            },
        ],
        items4: [
            {
                'name': 'Geschool Padang',
                'desc': 'padang.geschool.net',
                'link': 'https://padang.geschool.net',
                'region': 'Padang',
                'logo': `${logoPadang}`,
                'bg': `${bgPadang}`
            },
            {
                'name': 'Geschool Bukittinggi',
                'desc': 'bukittinggi.geschool.net',
                'link': 'https://bukittinggi.geschool.net',
                'region': 'Bukittinggi',
                'logo': `${logoBukittinggi}`,
                'bg': `${bgBukittinggi}`
            },
        ],
        items5: [
            {
                'name': 'Geschool Tangsel',
                'desc': 'tangsel.geschool.net',
                'link': 'https://tangsel.geschool.net',
                'region': 'Tangerang',
                'logo': `${logoTangsel}`,
                'bg': `${bgTangsel}`
            }
        ]
    }

    useEffect(() => {
        setMain_m1(summary_m.items1)
        setMain_m2(summary_m.items2)
        setMain_m3(summary_m.items3)
        setMain_m4(summary_m.items4)
        setMain_m5(summary_m.items5)
    }, [])

    return (
        <div className="main-container text-center kab-page">
            <h2>Selamat Datang di Web Kota / Kabupaten</h2>

            <div className="main-content-container">
                <div className="content-item d-flex mb-5" data-aos={'zoom-in'}>
                    {
                        main_m1.map((item, index) => (
                            <a key={index} target="_blank" rel="noreferrer" href={item.link} className="item" style={{ background: `url(${item.bg})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                                <h4>{item.name}</h4>
                                <img src={item.logo} className="item-logo" alt={item.region} srcSet="" />
                                <p>{item.desc}</p>
                                <div className="overlay"></div>
                            </a>
                        ))
                    }
                </div>
                <div className="content-item d-flex mb-5" data-aos={'zoom-in'}>
                    {
                        main_m2.map((item, index) => (
                            <a key={index} target="_blank" rel="noreferrer" href={item.link} className="item" style={{ background: `url(${item.bg})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                                <h4>{item.name}</h4>
                                <img src={item.logo} className="item-logo" alt={item.region} srcSet="" />
                                <p>{item.desc}</p>
                                <div className="overlay"></div>
                            </a>
                        ))
                    }
                </div>
                <div className="content-item d-flex mb-5" data-aos={'zoom-in'}>
                    {
                        main_m3.map((item, index) => (
                            <a key={index} target="_blank" rel="noreferrer" href={item.link} className="item" style={{ background: `url(${item.bg})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                                <h4>{item.name}</h4>
                                <img src={item.logo} className="item-logo" alt={item.region} srcSet="" />
                                <p>{item.desc}</p>
                                <div className="overlay"></div>
                            </a>
                        ))
                    }
                </div>
                <div className="content-item d-flex mb-5" data-aos={'zoom-in'}>
                    {
                        main_m4.map((item, index) => (
                            <a key={index} target="_blank" rel="noreferrer" href={item.link} className="item" style={{ background: `url(${item.bg})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                                <h4>{item.name}</h4>
                                <img src={item.logo} className="item-logo" alt={item.region} srcSet="" />
                                <p>{item.desc}</p>
                                <div className="overlay"></div>
                            </a>
                        ))
                    }
                </div>
                <div className="content-item d-flex" data-aos={'zoom-in'}>
                    {
                        main_m5.map((item, index) => (
                            <a key={index} target="_blank" rel="noreferrer" href={item.link} className="item" style={{ background: `url(${item.bg})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                                <h4>{item.name}</h4>
                                <img src={item.logo} className="item-logo" alt={item.region} srcSet="" style={item.region !== 'Tangerang' ? {
                                    width: '30px',
                                    height: '40px'
                                }
                                    :
                                    {
                                        width: '35px',
                                        height: '40px'
                                    }} />
                                <p>{item.desc}</p>
                                <div className="overlay"></div>
                            </a>
                        ))
                    }
                </div>
            </div>
            <div className="back-container">
                <Link to="/" className='btn-back'> <img src={iconArrow} alt="" srcset="" /> Home</Link>
            </div>
        </div>
    )
}
