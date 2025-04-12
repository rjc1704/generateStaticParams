import CatCardList from "@/components/ui/CatCardList";
import PageContainer from "@/components/common/PageContainer";
import { getCatBreeds } from "@/lib/services/api/catApi";

export const metadata = {
  title: "고양이 품종리스트",
  description: "다양한 고양이 품종들을 살펴보세요",
};

export default async function CatBreeds() {
  console.log("breeds 페이지");
  const breeds = await getCatBreeds();
  return (
    <PageContainer title="고양이 품종 리스트">
      <CatCardList
        items={breeds}
        getImageUrl={(breed) => breed.image?.url}
        getName={(breed) => breed.name}
        getHref={(breed) => `/breeds/${breed.id}`}
        gridClassName="grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
      />
    </PageContainer>
  );
}
