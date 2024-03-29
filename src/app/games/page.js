"use client"
import { ballCombine, guitarChess, planscape, scrambled, seekingConnection, blackOutPoem, collaborativeCrossword } from '@/projectDescriptions';
import ProjectPage from '@/components/projectPage/projectPage';
export default function Page() {
    return (
        <ProjectPage title="Games" projectPreviews={[ballCombine, guitarChess, planscape, scrambled, seekingConnection, blackOutPoem, collaborativeCrossword]} columns={3} />
    )
}