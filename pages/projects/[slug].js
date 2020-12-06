import React from 'react'
import Layout from '../../components/layout';
import slug from 'slug'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Project = ({project}) => {
    
    const { project_name, description, date, media, project_link, github_link, tags, used_techs } = project.fields
    const size = 16
    const links = [
        {
            label : 'Github',
            url : github_link,
            icon : <FaGithub size={size} />
        },
        {
            label : 'Proje',
            url : project_link,
            icon : <FaExternalLinkAlt size={size} />
        }
    ]
    return (
        <Layout title={project_name} description={description}>
            <div className='project-details'>
                <div className='project-header'>
                    <h1> {project_name} </h1>
                    <div className='tag-container'>
                        {
                            tags.map( (tag, i) => <span key={i} className='tag'> {tag} </span>)
                        }
                    </div>
                </div>
                <i> {date} </i>
                <p> {description} </p>
                <p>
                    <b>Kullanılan Teknolojiler : </b>
                    {used_techs.join(', ')}
                </p>
                <div style={{margin:'2rem 0'}}>
                    {
                        links.map( (link, i) => (
                            <a key={i} href={link.url} className='project-link' target='_blank'>
                                <span> {link.label} </span>
                                {link.icon}
                            </a>
                        ))
                    }
                </div>

                {
                    media ? media.map( (img, i) => (
                        <img key={i} src={img.url} alt={project_name} style={{marginBottom:'2rem'}} />
                    )) : null
                }
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {

    const res = await fetch(`https://api.airtable.com/v0/${process.env.NEXT_PUBLIC_BASE}/Projects?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
    const projects = await res.json()
  
    const paths = projects.records.map(project => ({
      params: { slug: `${slug(project.fields.project_name)}-${project.fields.id}` },
    }))
  
    return { paths, fallback: false }
}
  
export async function getStaticProps({ params }) {
    
    const id = params.slug.split('-').slice(-1)[0]

    const res = await fetch(`https://api.airtable.com/v0/${process.env.NEXT_PUBLIC_BASE}/Projects?api_key=${process.env.NEXT_PUBLIC_API_KEY}&filterByFormula=id=${id}`)
    const project = await res.json()

    return { props: { project: project.records[0] } }
}

export default Project
