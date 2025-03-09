export default function Home() {
  return (
    <div className="container">
      <video autoPlay muted loop playsInline preload="none" className="backgroundVideo">
        <source src="https://nzfqms5c4kwquboy.public.blob.vercel-storage.com/background-1Mbq61Ios3pMET02xmwZooHhJZspW5.webm" type="video/webm" />
        <source src="https://nzfqms5c4kwquboy.public.blob.vercel-storage.com/background-v1CIQsbxatLMhluhddNonq1XQOnCG3.mp4" type="video/mp4" />
	{/* Fallback GIF if videos don't load */}
        <img src="https://nzfqms5c4kwquboy.public.blob.vercel-storage.com/background-9AP6TV59d1HiTi8lYxD1NsxCUFcHeS.gif" alt="Background Animation" className="w-full h-full object-cover" />
      </video>

      <div className="content">
        <h1>Solythra</h1>
        <p>Awakening Soon.</p>
        <div className="socials">
          <a href="https://x.com/Solythra" target="_blank" rel="noopener noreferrer">X</a>
          <a href="https://discord.gg/99TtTHyFeT" target="_blank" rel="noopener noreferrer">Discord</a>
          <a href="https://t.me/Solythra" target="_blank" rel="noopener noreferrer">Telegram</a>
        </div>
      </div>
    </div>
  );
}
