// app/posts/[slug]/page.tsx
import { Project, allProjects } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
    return allProjects.map((project : Project) => ({
        slug: project._raw.flattenedPath,
    }))
}

export default async function Page({ params }: { params: { slug: string } }) {
    // Find the project for the current page.
    const project = allProjects.find((project : Project) => project._raw.flattenedPath === params.slug)

    // 404 if the project does not exist.
    if (!project) notFound()

    // Parse the MDX file via the useMDXComponent hook.
    const MDXContent = useMDXComponent(project.body.code)

    return (
        <div>
            {/* Some code ... */}
            <MDXContent />
        </div>
    )
}