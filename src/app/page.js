import styles from './page.module.scss'
import React from 'react';
import dynamic from 'next/dynamic';
import SmoothScroll from '@/components/smoothScroll';
import Projects from '@/components/projects';
import Hero from '@/components/hero';

const Earth = dynamic(() => import('@/components/earth'), {
  ssr: false,
  loading: () => <img src="/assets/placeholder.png"></img>
})

export default function Home() {
  return (
    <SmoothScroll>
      <main className={styles.main}>
        <Hero />
        <Earth />
        <Projects />
        <div className={styles.vArrowWrapper}>
          <svg className={styles.vArrow} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polyline points="16,18 24,28 32,18" stroke="#e0dac7" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </main>
    </SmoothScroll>
  )
}