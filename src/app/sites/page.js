"use client"
import { udplGenres, feedbackBank } from '@/projectDescriptions';
import ProjectPage from '@/components/projectPage/projectPage';
export default function Page() {
    return (
        <ProjectPage title="Websites" projectPreviews={[udplGenres, feedbackBank]} />
    )
}