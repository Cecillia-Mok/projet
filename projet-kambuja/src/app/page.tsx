import Link from 'next/link'

export default function Index() {
  return (
    <>
      <h1 className="text-4xl">Bienvenue, Roi de Kambuja</h1>
      <Link href="/connexion">
        <button className="mt-10 px-8 py-1 rounded-sm cursor-pointer bg-[#F4D7B7] shadow-[0_0_35px_rgba(85,57,32,0.10)] hover:bg-[#EFCAA2]">Commencer</button>
      </Link>
    </>
  );
}
