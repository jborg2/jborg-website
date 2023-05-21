import { defineDocumentType, makeSource } from '@contentlayer/source-files'
import highlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'
import Projects from './components/projects'

const computedFields = {
    slug: {
        type: "string",
        resolve: (doc : any) => `/${doc._raw.flattenedPath}`,
    },
    slugAsParams: {
        type: "string",
        resolve: (doc : any) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
    },
}

export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `posts/**/*.md`,
    fields: {
        title: { type: 'string', required: true },
        date: { type: 'date', required: true },
    },
    computedFields: {
        //! this turns flattendPath /posts/post-name to /post-name to match the slug with post in /posts/[...slug]
        url: { type: 'string', resolve: (post : any) => post._raw.flattenedPath.split("/").slice(1).join("/") },

        // TODO fix the slug and url param names. right now the slug is being mapped to url and its messing up the link to page
        // slug: { type: 'string', resolve: (post : any) => post._raw.flattenedPath.split("/").slice(1).join("/") },
        // url : { type: 'string', resolve: (post:any) => post._raw.flattenedPath }
    },
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
        // 
        url: { type: 'string', resolve: (project) => project._raw.flattenedPath.split("/").slice(1).join("/") },
    },
}))

export default makeSource({ contentDirPath: './content', documentTypes: [Post, Project] })