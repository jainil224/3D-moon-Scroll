'use client';
import { useState } from 'react';
import styles from './style.module.scss';
import Titles from './titles';
import Descriptions from './descriptions';

const data = [
    {
        title: "UI HUB",
        description: "UI Hub: Modern UI/UX solutions for web and apps.",
        speed: 0.5
    },
    {
        title: "REACT",
        description: "React-based interactive and scalable components.",
        speed: 0.5
    },
    {
        title: "COMPONENT",
        description: "Reusable, customizable, and efficient UI components.",
        speed: 0.67
    },
    {
        title: "WEB PLATFORM",
        description: "Robust web platforms for seamless digital experiences.",
        speed: 0.8
    },
    {
        title: "ANIMATION",
        description: "Smooth, engaging, and modern web animations.",
        speed: 0.8
    },
    {
        title: "3D UI",
        description: "Immersive 3D user interfaces for next-gen web.",
        speed: 0.8
    }
]

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null)
    return (
        <div className={styles.container}>
            <Titles data={data} setSelectedProject={setSelectedProject} />
            <Descriptions data={data} selectedProject={selectedProject} />
        </div>
    )
}

