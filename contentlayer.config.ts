import { defineDocumentType, makeSource } from '@contentlayer/source-files'
import highlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'
import rehypeAutolinkHeadings from "@justfork/rehype-autolink-headings"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"

const computedFieldsObj = {
    url: {
        type: "string",
        resolve: (doc: any) => `/${doc._raw.flattenedPath}`,
    },
    slugAsParams: {
        type: "string",
        resolve: (doc: any) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
    },
}

// const computedFieldsObj = {
//         //! this turns flattendPath /posts/post-name to /post-name to match the slug with post in /posts/[...slug]
//         url: { type: "string", resolve: (post : any) => post._raw.flattenedPath.split("/").slice(1).join("/") },

//         // TODO fix the slug and url param names. right now the slug is being mapped to url and its messing up the link to page
//         // slug: { type: 'string', resolve: (post : any) => post._raw.flattenedPath.split("/").slice(1).join("/") },
//         // url : { type: 'string', resolve: (post:any) => post._raw.flattenedPath }
// }


export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `posts/**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
        date: { type: 'date', required: true },
    },
    computedFields: {
        url: {
            type: "string",
            resolve: (doc: any) => `/${doc._raw.flattenedPath}`,
        },
        slugAsParams: {
            type: "string",
            resolve: (doc: any) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
        },
    }
}))

export const Project = defineDocumentType(() => ({
    name: 'Project',
    filePathPattern: `projects/**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
        date: { type: 'date', required: true },
    },
    computedFields: {
        url: {
            type: "string",
            resolve: (doc: any) => `/${doc._raw.flattenedPath}`,
        },
        slugAsParams: {
            type: "string",
            resolve: (doc: any) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
        },
    }
}))

export default makeSource({
    contentDirPath: './content',
    documentTypes: [Post, Project],
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
            rehypeSlug,
            [
                rehypePrettyCode,
                {
                    theme: "github-dark",
                    // TODO Figure out node type
                    onVisitLine(node : any) {
                        // Prevent lines from collapsing in `display: grid` mode, and allow empty
                        // lines to be copy/pasted
                        if (node.children.length === 0) {
                            node.children = [{ type: "text", value: " " }]
                        }
                    },
                    onVisitHighlightedLine(node :any ) {
                        node.properties.className.push("line--highlighted")
                    },
                    onVisitHighlightedWord(node :any ) {
                        node.properties.className = ["word--highlighted"]
                    },
                },
            ],
            [
                rehypeAutolinkHeadings,
                {
                    properties: {
                        className: ["subheading-anchor"],
                        ariaLabel: "Link to section",
                    },
                },
            ],
        ],
    },

})