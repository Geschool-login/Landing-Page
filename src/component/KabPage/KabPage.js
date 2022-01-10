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
import logoPekanbaru from '../../assets/img/logo/pekanbaru.png'
import logoJeneponto from '../../assets/img/logo/jeneponto.png'

import bgPadang from '../../assets/img/web-bg/padang.png'
import bgYogya from '../../assets/img/web-bg/yogya.png'
import bgGunungKidul from '../../assets/img/web-bg/gunungkidul.png'
import bgSleman from '../../assets/img/web-bg/sleman.png'
import bgTangsel from '../../assets/img/web-bg/tangsel.png'
import bgMagelang from '../../assets/img/web-bg/magelang.png'
import bgBantul from '../../assets/img/web-bg/bantul.png'
import bgKulonProgo from '../../assets/img/web-bg/kulonprogo.png'
import bgBukittinggi from '../../assets/img/web-bg/bukittinggi.png'
import bgPekanbaru from '../../assets/img/web-bg/pekanbaru.png'
import bgJeneponto from '../../assets/img/web-bg/jeneponto.png'

import iconArrow from '../../assets/img/icon/arrow.svg'

import './KabPage.css'
import { Link } from 'react-router-dom'

export default function KabPage() {

    const [main1, setMain1] = useState([])
    const [main2, setMain2] = useState([])
    const [main3, setMain3] = useState([])
    const [main4, setMain4] = useState([])

    const summary = {
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
            {
                'name': 'Geschool Bantul',
                'desc': 'bantul.geschool.net',
                'link': 'https://bantul.geschool.net',
                'region': 'Bantul',
                'logo': `${logoBantul}`,
                'bg': `${bgBantul}`
            },
        ],
        items2: [
            {
                'name': 'Geschool Gunung Kidul',
                'desc': 'gunungkidul.geschool.net',
                'link': 'https://gunungkidul.geschool.net',
                'region': 'Gunungkidul',
                'logo': `${logoGunungKidul}`,
                'bg': `${bgGunungKidul}`
            },
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
        items3: [
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
            {
                'name': 'Geschool Tangsel',
                'desc': 'tangsel.geschool.net',
                'link': 'https://tangsel.geschool.net',
                'region': 'Tangerang',
                'logo': `${logoTangsel}`,
                'bg': `${bgTangsel}`
            }
        ],
        items4: [
            {
                'name': 'Geschool Pekanbaru',
                'desc': 'pekanbaru.geschool.net',
                'link': 'https://pekanbaru.geschool.net',
                'region': 'Pekanbaru',
                'logo': `${logoPekanbaru}`,
                'bg': `${bgPekanbaru}`
            },
            {
                'name': 'Geschool Jeneponto',
                'desc': 'jeneponto.geschool.net',
                'link': 'https://jeneponto.geschool.net',
                'region': 'Jeneponto',
                'logo': `${logoJeneponto}`,
                'bg': `${bgJeneponto}`
            }
        ]
    }


    useEffect(() => {
        setMain1(summary.items1)
        setMain2(summary.items2)
        setMain3(summary.items3)
        setMain4(summary.items4)
    }, [])

    return (
        <div className="main-container text-center kab-page">
            <h2>Selamat Datang di Web Kota / Kabupaten</h2>
            <div className="main-content-container">
                <div className="content-item d-flex justify-content-center mb-5" data-aos={'zoom-in'}>
                    {
                        main1.map((item, index) => (
                            <a key={index} target="_blank" rel="noreferrer" href={item.link} className="mx-3 item" style={{ background: `url(${item.bg})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                                <h4>{item.name}</h4>
                                <img src={item.logo} className="item-logo" alt={item.region} srcSet="" />
                                <p>{item.desc}</p>
                                <div className="overlay"></div>
                            </a>
                        ))
                    }
                </div>
                <div className="content-item d-flex justify-content-center mb-5" data-aos={'zoom-in'}>
                    {
                        main2.map((item, index) => (
                            <a key={index} target="_blank" rel="noreferrer" href={item.link} className="item mx-3" style={{ background: `url(${item.bg})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                                <h4>{item.name}</h4>
                                <img src={item.logo} className="item-logo" alt={item.region} srcSet="" />
                                <p>{item.desc}</p>
                                <div className="overlay"></div>
                            </a>
                        ))
                    }
                </div>
                <div className="content-item d-flex justify-content-center mb-5" data-aos={'zoom-in'}>
                    {
                        main3.map((item, index) => (
                            <a key={index} target="_blank" rel="noreferrer" href={item.link} className="item mx-3" style={{ background: `url(${item.bg})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                                <h4>{item.name}</h4>
                                <img src={item.logo} className={item.region !== 'Tangerang' ? 'item-logo' : 'item-logo-kab'} alt={item.region} srcSet="" />
                                <p>{item.desc}</p>
                                <div className="overlay"></div>
                            </a>
                        ))
                    }
                </div>
                <div className="content-item d-flex justify-content-center mb-5" data-aos={'zoom-in'}>
                    {
                        main4.map((item, index) => (
                            <a key={index} target="_blank" rel="noreferrer" href={item.link} className="item mx-3" style={{ background: `url(${item.bg})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                                <h4>{item.name}</h4>
                                <img src={item.logo} className={item.region !== 'Jeneponto' ? 'item-logo' : 'item-logo-kab'} alt={item.region} srcSet="" />
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
