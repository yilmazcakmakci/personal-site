import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { motion } from 'framer-motion'

const Layout = ({ children, title, description }) => {

    const { pathname, route } = useRouter()

    const navLinks = [
        {
            path: '/articles',
            title: 'Yazılarım'
        },
        {
            path: '/projects',
            title: 'Projelerim'
        },
    ]

    const defaultDesc = 'Yazılarımı, projelerimi ve kişisel deneyimlerimi paylaştığım web sitesi.'
    return (
        <>
            <Head>
                <title>{title ? `${title} · Yılmaz Çakmakçı` : 'Yılmaz Çakmakçı'}</title>
                <meta name='description' content={description || defaultDesc} />
                <link rel="shortcut icon" href="/static/favicon.ico" />
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
                            navLinks.map((link, i) => (
                                <Link key={i} href={link.path}>
                                    <a className={pathname.includes(link.path) ? 'active' : ''}> {link.title} </a>
                                </Link>
                            ))
                        }
                    </div>
                    <img src="/me.png" alt="" width='35' height='35' />
                </div>
                <hr />
                <motion.div key={route} initial="pageInitial" animate="pageAnimate" exit="pageExit"
                    style={{ margin: '3rem 0' }} 
                    transition={{ duration: 0.6 }}
                    variants={{
                        pageInitial: {
                            opacity: 0,
                            transform: "translateY(50%)"
                        },
                        pageAnimate: {
                            opacity: 1,
                            transform: "translateY(0px)"
                        },
                        pageExit: {
                            opacity: 0,
                            transform: "translateY(50%)",
                        }
                    }}
                >
                    {children}
                </motion.div>
            </div>
        </>
    )
}

export default Layout
