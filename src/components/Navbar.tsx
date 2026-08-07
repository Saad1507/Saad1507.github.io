'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Navbar() {
  const pathname = usePathname();
  const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Skills', href: '/skills' },
    { label: 'ASIC Journey', href: '/asic-journey' },
    { label: 'Resume', href: '/resume' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/">
          <span className="font-bold text-xl text-slateDark tracking-tight">Muhammed Saad</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="relative py-1">
              <span className={`text-sm font-medium transition-colors ${pathname === link.href ? 'text-accentCobalt' : 'text-slate-600 hover:text-slateDark'}`}>
                {link.label}
              </span>
              {pathname === link.href && (
                <motion.div 
                  layoutId="underline" 
                  className="absolute left-0 bottom-0 top-6 w-full h-0.5 bg-accentCobalt" 
                  initial={false}
                />
              )}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
