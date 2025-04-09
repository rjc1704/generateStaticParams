"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-4 sm:mb-0">
          <Link href="/" className="text-xl font-bold text-gray-800">
            고양이 정보 사이트
          </Link>
        </div>

        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/"
                className={`hover:text-blue-500 transition-colors text-gray-600`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/breeds"
                className={`hover:text-blue-500 transition-colors text-gray-600 `}
              >
                Breeds
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
