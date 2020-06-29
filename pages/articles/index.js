import React from 'react'
import Layout from '../../components/layout'
import Post from '../../components/post'

const Articles = ({articles}) => {
    return (
        <Layout>
            {
                articles.records.map( (article, i) => (
                    <React.Fragment key={i}>
                        <Post post={article.fields} />
                        <hr className='seperator' />
                    </React.Fragment>
                ))
            }
        </Layout>
    )
}

export async function getStaticProps() {
    const res = await fetch(`https://api.airtable.com/v0/${process.env.NEXT_PUBLIC_BASE}/Articles?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
    const articles = await res.json()
    
    return {
        props: { articles }
    }
  }

export default Articles
