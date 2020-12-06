import React from 'react'
import ReactMarkdown from 'react-markdown/with-html'
import gfm from 'remark-gfm'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import emoji from 'emoji-dictionary'

const emojiSupport = text => text.value.replace(/:\w+:/gi, name => emoji.getUnicode(name))

const InlineCode = ({ children }) => {
    return (
        <code className='article-inline-code'>
            {children}
        </code>    
    )
}

const Code = ({ language, value }) => {
    return (
        <SyntaxHighlighter 
            language={language} 
            style={nord} 
            customStyle={{
                borderRadius: 10,
                padding: '1.5em',
                margin: '24px 0'
            }}
            codeTagProps={{
                style: {
                    fontFamily: "'JetBrains Mono', monospace;",
                    fontSize: 14
                }   
            }}>
                {value}
        </SyntaxHighlighter>
    )
}

const HR = () => {
    return (
        <div className="article-hr-container">
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

const renderers = {
    inlineCode: InlineCode,
    code: Code,
    thematicBreak: HR,
    text: emojiSupport
}

export default function ArticleDetail({ content }) {
    return (
        <ReactMarkdown linkTarget="_blank" allowDangerousHtml className="article-root" plugins={[gfm]} renderers={renderers} source={content} />
    )
}