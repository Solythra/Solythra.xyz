'use client';

import { list } from '@vercel/blob';
import { useState, useEffect } from 'react';

export default function Home() {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await list();

        // Find the latest video in Blob storage
        const latestVideo = response.blobs.find(blob =>
          blob.pathname.endsWith('.mp4') || blob.pathname.endsWith('.webm')
        );

        if (latestVideo) {
          setVideoUrl(latestVideo.url);
        }
      } catch (error) {
        console.error('Error fetching videos:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchVideos();
  }, []);

  return (
    <main className="container">
      {/* Background Video */}
      {loading ? (
        <p>Loading video...</p>
      ) : (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="backgroundVideo"
        >
          {videoUrl && <source src={videoUrl} type="video/mp4" />}
          <img src="/videos/background.gif" alt="Background Animation" className="w-full h-full object-cover" />
        </video>
      )}

      {/* Content */}
      <div className="content">
        <h1>Solythra</h1>
        <p>Awakening Soon.</p>

        {/* Social Links */}
        <div className="socials">
          <a href="https://x.com/Solythra" target="_blank" rel="noopener noreferrer">X</a>
          <a href="https://discord.gg/99TtTHyFeT" target="_blank" rel="noopener noreferrer">Discord</a>
          <a href="https://t.me/Solythra" target="_blank" rel="noopener noreferrer">Telegram</a>
        </div>
      </div>
    </main>
  );
}
