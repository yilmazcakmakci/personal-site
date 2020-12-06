import React from 'react'
import Layout from '../../components/layout';
import slug from 'slug'
import ArticleDetail from '../../components/article-detail';
import dayjs from 'dayjs'
import readTime from '../../utils/read-time'

const Article = ({article}) => {
    
    const { title, content, date } = article.fields

    const day = dayjs(new Date(date)).format('MMM D, YYYY')

    return (
        <Layout>
            <h1 className='article-title'> {title} </h1>
                <div className="article-info">
                    <div className="article-img">
                        <img src="/me.png" alt="Author" width="48" height="48" />
                    </div>
                    <div className="article-author">
                        <span>Yılmaz Çakmakçı</span>
                        <span> {day} · {readTime(content)} min read </span>
                    </div>
                </div>
            <ArticleDetail content={content} />
        </Layout>
    )
}

export async function getStaticPaths() {

    const res = await fetch(`https://api.airtable.com/v0/${process.env.NEXT_PUBLIC_BASE}/Articles?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
    const articles = await res.json()
  
    const paths = articles.records.map(article => ({
      params: { slug: `${slug(article.fields.title)}-${article.fields.id}` },
    }))
  
    return { paths, fallback: false }
}
  
export async function getStaticProps({ params }) {
    
    const id = params.slug.split('-').slice(-1)[0]

    const res = await fetch(`https://api.airtable.com/v0/${process.env.NEXT_PUBLIC_BASE}/Articles?api_key=${process.env.NEXT_PUBLIC_API_KEY}&filterByFormula=id=${id}`)
    const article = await res.json()

    return { props: { article: article.records[0] } }
}

export default Article
