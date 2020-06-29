import React from 'react'
import Link from 'next/link'
import slug from 'slug'

const Post = ({post}) => {
    return (
        <div className='post'>
            {
                post.link
                    ?  <a href={post.link} target='_blank'> {post.title} </a>
                    :  <Link 
                            href={`/projects/[slug]`}
                            as={`/projects/${slug(post.project_name)}-${post.id}`}>
                                <a> {post.project_name} </a>
                        </Link>
            }
            <p> {post.description} </p>
            <i> {post.date} </i>
        </div>
    )
}

export default Post
