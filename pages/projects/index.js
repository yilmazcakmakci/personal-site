import React from 'react'
import Layout from '../../components/layout'
import Post from '../../components/post'

const Projects = ({projects}) => {
    return (
        <Layout>
            {
                projects.records.map( (project, i) => (
                    <React.Fragment key={i}>
                        <div className='post-card'>
                            <Post post={project.fields} id={project.id} />
                            {
                                project.fields.media ? <img src={project.fields.media[0].url} alt=""/> : null
                            }
                        </div>  
                        <hr className='seperator' />
                    </React.Fragment>
                ))
            }
        </Layout>
    )
}

export async function getStaticProps() {
    const res = await fetch(`https://api.airtable.com/v0/${process.env.NEXT_PUBLIC_BASE}/Projects?api_key=${process.env.NEXT_PUBLIC_API_KEY}&sort%5B0%5D%5Bfield%5D=id&sort%5B0%5D%5Bdirection%5D=asc`)
    const projects = await res.json()
    
    return {
        props: { projects }
    }
}

export default Projects