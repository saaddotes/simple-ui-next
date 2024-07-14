import React from 'react';

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Projects', href: '#', current: false },
  { name: 'About', href: '#', current: false },

];

export default function NavigationBar() {
  return (
    <nav className="flex items-center justify-center gap-5 w-full lg:w-4/5 rounded lg:rounded-3xl mx-auto bg-emerald-400 h-12 mt-4 ring-offset-2 ring shadow-2xl shadow-zinc-950">
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={`text-slate-50 font-mono text-2xl antialiased hover:subpixel-antialiased font-thin tracking-widest ${
            item.current ? 'font-bold' : ''
          }`}
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
}
