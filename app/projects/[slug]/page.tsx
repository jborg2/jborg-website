// app/posts/[slug]/page.tsx
import { Project, allProjects } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { format, parseISO } from 'date-fns'
import { Mdx } from "@/components/mdx-components"

export async function generateStaticParams() {
    return allProjects.map((project: Project) => ({
        slug: project._raw.flattenedPath,
    }))
}

export default async function Page({ params }: { params: { slug: string } }) {
    // Find the project for the current page.
    // this is matching the "computed fields"
    const project = allProjects.find((project: Project) => project.url === params.slug)

    // 404 if the project does not exist.
    if (!project) notFound()

    return (
        <div>
            <h1>{project.title}</h1>
            <p>{format(parseISO(project.date), "LLLL d, yyyy")}</p>
            <article>
                <Mdx code={project.body.code} />
            </article>
        </div>
    )
}