import Link from 'next/link';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import DarkModeSwitch from './DarkModeSwitch';
export default function Header() {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
      <ul className='flex gap-4'>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <Link href={'/sign-in'}>Se connecter</Link>
        </SignedOut>
        <li className='hidden sm:block'>
          <Link href={'/'}>Accueil</Link>
        </li>
        <li className='hidden sm:block'>
          <Link href={'/favorites'}>Favorits</Link>
        </li>
        <li className='hidden sm:block'>
          <Link href={'/about'}>À propos</Link>
        </li>
      </ul>
      <div className='flex items-center gap-4'>
      <DarkModeSwitch />
        <Link href={'/'} className='flex gap-1 items-center'>
          <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg'>
            Film.B
          </span>
        </Link>
      </div>
    </div>
  );
}