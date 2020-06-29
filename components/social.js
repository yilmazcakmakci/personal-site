import React from 'react'
import { FaLinkedinIn, FaMediumM, FaGithub, FaTwitter } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'

const size = 20

const socialMediaLinks = [
    {
        name: 'twitter',
        icon: <FaTwitter size={size} />,
        link: 'https://twitter.com/yilmazdev'
    },
    {
        name: 'linkedin',
        icon: <FaLinkedinIn size={size} />,
        link: 'https://www.linkedin.com/in/yilmazcakmakci/'
    },
    {
        name: 'medium',
        icon: <FaMediumM size={size} />,
        link: 'https://medium.com/@yilmazcakmakci'
    },
    {
        name: 'github',
        icon: <FaGithub size={size} />,
        link: 'https://github.com/yilmazcakmakci'
    },
    {
        name: 'mail',
        icon: <GrMail size={size} />,
        link: 'mailto:cakmakcy@gmail.com'
    }
]

const Social = () => {
    return (
        <div className='social'>
            {
                socialMediaLinks.map( (icon, i) => (
                    <a key={i} href={icon.link} target='_blank' className='icon' >
                        {icon.icon}
                    </a>
                ))
            }
        </div>
    )
}

export default Social
