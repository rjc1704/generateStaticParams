import PageContainer from "@/components/common/PageContainer";
import CatDetail from "@/components/ui/CatDetail";
import { getCatById } from "@/lib/services/api/catApi";
import BreedDetailHeader from "./_components/BreedDetailHeader";
import CommentForm from "./_components/CommentForm";
import CommentList from "./_components/CommentList";
import { Suspense } from "react";

export async function generateStaticParams() {
  return [{ id: "abys" }, { id: "aege" }, { id: "abob" }];
}

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const { id } = await params;
  const cats = await getCatById(id);
  const cat = cats[0];

  return {
    title: cat.breeds[0].name,
    description: cat.breeds[0].description,
  };
}

export default async function CatBreedPage({ params }) {
  const { id } = await params;
  console.log("id", id);
  console.log("SSR-CatBreedPage");
  const cats = await getCatById(id);
  const cat = cats[0];

  return (
    <PageContainer title={cat.breeds[0].name}>
      <BreedDetailHeader breed={cat.breeds[0]} />
      <CatDetail cat={cat} />
      <CommentForm breedId={id} />
      <Suspense
        fallback={
          <div className="bg-red-500 text-center text-2xl font-bold">
            댓글 데이터 로딩중...
          </div>
        }
      >
        <CommentList breedId={id} />
      </Suspense>
    </PageContainer>
  );
}
