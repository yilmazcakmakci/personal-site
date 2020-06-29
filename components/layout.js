import React, { useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Layout = ({children}) => {
    
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

    return (
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
    )
}

export default Layout
