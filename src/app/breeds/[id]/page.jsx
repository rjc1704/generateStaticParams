import PageContainer from "@/components/common/PageContainer";
import CatDetail from "@/components/ui/CatDetail";
import { getCatById } from "@/lib/services/catApi";
import BreedDetailHeader from "@/app/breeds/[id]/_components/BreedDetailHeader";

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
  console.log("SSR-CatBreedPage");
  const { id } = await params;
  const cats = await getCatById(id);
  const cat = cats[0];

  return (
    <PageContainer title={cat.breeds[0].name}>
      <BreedDetailHeader breed={cat.breeds[0]} />
      <CatDetail cat={cat} />
    </PageContainer>
  );
}
