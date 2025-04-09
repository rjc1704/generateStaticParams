import PageContainer from "@/components/ui/PageContainer";
import CatDetail from "@/components/ui/CatDetail";
import { getCatById } from "@/lib/services/catApi";
import BreedDetailHeader from "@/components/ui/BreedDetailHeader";

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
