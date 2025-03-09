'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <main className="container">
      {/* Background Video */}
      <video autoPlay muted loop playsInline preload="none" className="backgroundVideo">
        <source src="https://res.cloudinary.com/dcaabcqhl/video/upload/v1741486433/background_fgmxub.webm" type="video/webm" />
        <source src="https://res.cloudinary.com/dcaabcqhl/video/upload/v1741486739/background_zdc12g.mp4" type="video/mp4" />
        {/* Fallback for unsupported browsers */}
        <Image
          src="/videos/background.gif"
          alt="Background Animation"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          priority
        />
      </video>

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
