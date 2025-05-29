import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { highlight } from 'sugar-high'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'

function Table({ data }) {
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ))
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ))

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

function CustomLink(props) {
  let href = props.href

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return <a {...props} />
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />
}

function Code({ children, ...props }) {
  let codeHTML = highlight(children)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
}

function createHeading(level) {
  const Heading = ({ children }) => {
    let slug = slugify(children)
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        }),
      ],
      children
    )
  }

  Heading.displayName = `Heading${level}`

  return Heading
}

let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  Table,
}

export function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}

// New component for rendering markdown content from API
export function MarkdownRenderer({ content }) {
  const markdownComponents = {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold tracking-tight mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold tracking-tight mt-10 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-medium tracking-tight mt-8 mb-4">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-medium tracking-tight mt-6 mb-2">{children}</h4>
    ),
    p: ({ children }) => (
      <p className="my-4 leading-relaxed text-neutral-800 dark:text-neutral-200">{children}</p>
    ),
    a: ({ href, children }) => {
      if (href?.startsWith('/')) {
        return (
          <Link href={href} className="text-emerald-600 dark:text-emerald-400 hover:underline">
            {children}
          </Link>
        )
      }
      return (
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-emerald-600 dark:text-emerald-400 hover:underline"
        >
          {children}
        </a>
      )
    },
    img: ({ src, alt }) => (
      <Image
        src={src || '/placeholder.svg'}
        alt={alt || 'Image'}
        width={800}
        height={400}
        className="rounded-xl my-6 w-full h-auto"
      />
    ),
    code: ({ inline, className, children, ...props }) => {
      const match = /language-(\w+)/.exec(className || '')
      return !inline && match ? (
        <pre className="bg-neutral-100 dark:bg-neutral-900 rounded-lg overflow-x-auto border border-neutral-200 dark:border-neutral-800 py-3 px-4 my-4">
          <code className={className} {...props}>
            {children}
          </code>
        </pre>
      ) : (
        <code className="px-1 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800" {...props}>
          {children}
        </code>
      )
    },
    ul: ({ children }) => (
      <ul className="list-disc pl-6 my-4">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal pl-6 my-4">{children}</ol>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-neutral-200 dark:border-neutral-800 pl-4 italic my-6">
        {children}
      </blockquote>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold">{children}</strong>
    ),
  }

  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={markdownComponents}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}