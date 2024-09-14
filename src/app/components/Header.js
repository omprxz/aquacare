"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaHome, FaSignOutAlt, FaSignInAlt } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Header = () => {
  const router = useRouter();
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const authValue = localStorage.getItem('auth');
    setAuth(authValue);
  }, []);

  const handleSignOut = () => {
    localStorage.setItem('auth', '0');
    router.push('/auth/login');
  };

  const getDashboardLink = () => {
    if (auth === '1') return '/phed/dashboard';
    if (auth === '2') return '/gp/dashboard';
    if (auth === '3') return '/consumer/dashboard';
    return '/';
  };

  return (
    <header className="flex justify-between items-center p-4 bg-primary text-primary-content sticky top-0 z-50">
      <div className="text-xl font-bold">Aquacare</div>
      <div className="flex-grow text-center">
        <Link href={getDashboardLink()}>
          <FaHome className="text-2xl inline-block" />
        </Link>
      </div>
      <div>
        {auth && auth !== '0' ? (
          <FaSignOutAlt className="text-2xl cursor-pointer" onClick={handleSignOut} />
        ) : (
          <Link href="/auth/login">
            <FaSignInAlt className="text-2xl" />
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
