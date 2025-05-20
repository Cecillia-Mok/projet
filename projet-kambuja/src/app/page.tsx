import Link from 'next/link'
import Button from './components/button';

export default function Index() {
  return (
    <>
      <h1 className="text-4xl mb-10">Bienvenue, Reine de Kambuja</h1>
      <div className="w-50 m-auto">
        <Link href="/connexion">
          <Button text="Connexion" />
        </Link>
      </div>
    </>
  );
}
