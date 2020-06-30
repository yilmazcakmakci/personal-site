import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Head from 'next/head'

const Layout = ({children, title, description}) => {
    
    const { pathname } = useRouter()
    
    const navLinks = [
        {
            path : '/articles',
            title: 'Yazılarım'
        },
        {
            path : '/projects',
            title: 'Projelerim'
        },
    ]

    const defaultDesc = 'Yazılarımı, projelerimi ve kişisel deneyimlerimi paylaştığım web sitesi.'
    return (
        <>
        <Head>
            <title>{title ? `${title} · Yılmaz Çakmakçı` : 'Yılmaz Çakmakçı'}</title>
            <meta name='description' content={description || defaultDesc} />
            <link rel="shortcut icon" href="/static/favicon.ico"/>
        </Head>
        <div className='container'>
            <div className='name'>
                <Link href='/'>
                    <a>Yılmaz Çakmakçı</a>
                </Link>
            </div>
            <div className='navbar'>
                <div>
                    {
                        navLinks.map( (link, i) => (
                            <Link key={i} href={link.path}>
                                <a className={pathname.includes(link.path) ? 'active' : ''}> {link.title} </a>
                            </Link>
                        ))
                    }
                </div>
                <img src="/me.png" alt="" width='35' height='35' />
            </div>
            <hr/>
            <div style={{margin:'3rem 0'}}>
                {children}
            </div>
        </div>
        </>
    )
}

export default Layout
