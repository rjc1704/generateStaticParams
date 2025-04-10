import CatCard from "@/components/ui/CatCard";
import PageContainer from "@/components/common/PageContainer";
import { getCats } from "@/lib/services/catApi";
import CatCardList from "@/components/ui/CatCardList";
import Image from "next/image";
import staticCat from "../../public/sampleCat.jpg";

export default async function Home() {
  console.log("Home");
  const cats = await getCats();
  return (
    <PageContainer title="The Cat API">
      <div className="relative mx-auto w-[300px] h-[300px] flex justify-center items-center mb-4">
        <Image
          src={staticCat}
          alt="The Cat API"
          fill
          placeholder="blur"
          className="object-cover"
        />
      </div>
      <CatCardList items={cats} linkable={false} />
    </PageContainer>
  );
}

// export const revalidate = 5; // 5초 간격의 ISR
export const dynamic = "force-dynamic";
