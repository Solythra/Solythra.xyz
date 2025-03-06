export default function Home() {
  return (
    <main className="relative h-screen flex items-center justify-center bg-black text-white">
      <div className="absolute inset-0 bg-[url('/background.jpg')] bg-cover bg-center opacity-30"></div>
      <div className="relative text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold">
          The Multiverse Trembles. Solythra Awakens.
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          A New Era of Governance, Power, and Truth Begins.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
          Join the Awakening
        </button>
      </div>
    </main>
  );
}
