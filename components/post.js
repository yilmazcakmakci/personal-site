import React from 'react'
import Link from 'next/link'
import slug from 'slug'
import readTime from '../utils/read-time'

const Post = ({ post }) => {
    return (
        <div className='post'>
            {
                post.link
                    ?
                    <Link
                        href={`/articles/[slug]`}
                        as={`/articles/${slug(post.title)}-${post.id}`}>
                        <a> {post.title} </a>
                    </Link>
                    : <Link
                        href={`/projects/[slug]`}
                        as={`/projects/${slug(post.project_name)}-${post.id}`}>
                        <a> {post.project_name} </a>
                    </Link>
            }
            <p> {post.description} </p>
            {/* <i> {post.date} · {readTime(post.content)} min read</i> */}
            <i> {post.date} · 3 min read</i>
        </div>
    )
}

export default Post
