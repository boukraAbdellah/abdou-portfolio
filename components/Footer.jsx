import React from 'react'

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full py-12 flex flex-col items-center justify-center gap-8 bg-white dark:bg-zinc-900">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="rotate-45 text-blue-600 dark:text-blue-500"
        >
          <path d="M5 12h14 M12 5v14" />
        </svg>
        <span className="text-xl font-bold text-zinc-800 dark:text-zinc-100">
          BOUKRA BETTAYEB Abdellah
        </span>
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-8">
        <Link
          href="#"
          className="text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-500 transition-colors"
        >
          <FaFacebookF className="w-5 h-5" />
          <span className="sr-only">Facebook</span>
        </Link>
        <Link
          href="#"
          className="text-zinc-600 hover:text-rose-600 dark:text-zinc-400 dark:hover:text-rose-500 transition-colors"
        >
          <FaInstagram className="w-5 h-5" />
          <span className="sr-only">Instagram</span>
        </Link>
        <Link
          href="#"
          className="text-zinc-600 hover:text-red-600 dark:text-zinc-400 dark:hover:text-red-500 transition-colors"
        >
          <FaEnvelope className="w-5 h-5" />
          <span className="sr-only">Email</span>
        </Link>
        <Link
          href="#"
          className="text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-500 transition-colors"
        >
          <FaLinkedinIn className="w-5 h-5" />
          <span className="sr-only">LinkedIn</span>
        </Link>
        <Link
          href="#"
          className="text-zinc-600 hover:text-purple-600 dark:text-zinc-400 dark:hover:text-purple-500 transition-colors"
        >
          <FaGithub className="w-5 h-5" />
          <span className="sr-only">GitHub</span>
        </Link>
        <Link
          href="#"
          className="text-zinc-600 hover:text-red-600 dark:text-zinc-400 dark:hover:text-red-500 transition-colors"
        >
          <FaYoutube className="w-5 h-5" />
          <span className="sr-only">YouTube</span>
        </Link>
      </div>

      {/* Separator Line */}
      <div className="w-full max-w-3xl h-px bg-zinc-200 dark:bg-zinc-800" />

      {/* Copyright */}
      <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
        <span>All Rights Are Reserved</span>
        <span className="text-blue-600 dark:text-blue-500">© 2025</span>
      </div>
    </footer>
  );
}


