import { defineDocumentType, makeSource } from '@contentlayer/source-files'
import highlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'

export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `posts/**/*.md`,
    fields: {
        title: { type: 'string', required: true },
        date: { type: 'date', required: true },
    },
    computedFields: {
        url: { type: 'string', resolve: (post) => `/${post._raw.flattenedPath}` },
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
        url: { type: 'string', resolve: (project) => `/${project._raw.flattenedPath}` },
    },
}))

export default makeSource({ contentDirPath: './content', documentTypes: [Post, Project] })