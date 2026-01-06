'use client';

import { useState } from 'react';

export default function EmailButton() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('aviralag99@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <button
      onClick={copyEmail}
      className="flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-800 rounded-lg transition-all duration-300 font-medium border border-slate-200 shadow-md hover:shadow-lg"
    >
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" fill="#EA4335"/>
        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" fill="#4285F4"/>
      </svg>
      {copied ? 'Copied!' : 'Email'}
    </button>
  );
}
