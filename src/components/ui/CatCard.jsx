"use client";

import Image from "next/image";
import Link from "next/link";

/**
 * 고양이 카드 컴포넌트
 * @param {Object} props
 * @param {string} props.id - 고양이 ID
 * @param {string} props.imageUrl - 고양이 이미지 URL
 * @param {string} props.name - 고양이 이름
 * @param {boolean} [props.linkable=true] - 링크 가능 여부
 * @param {React.ReactNode} [props.children] - 추가 콘텐츠 (옵션)
 */
export default function CatCard({
  id,
  imageUrl,
  name,
  linkable = true,
  children,
}) {
  const Card = () => (
    <div className="flex flex-col overflow-hidden rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-64 bg-lime-400">
        <Image
          src={imageUrl || "/placeholder-cat.jpg"}
          fill
          alt={name}
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold">{name}</h2>
        {children}
      </div>
    </div>
  );

  if (linkable) {
    return (
      <Link href={`/breeds/${id}`}>
        <Card />
      </Link>
    );
  }

  return <Card />;
}
