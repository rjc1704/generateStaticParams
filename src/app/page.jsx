import CatCard from "@/components/ui/CatCard";
import PageContainer from "@/components/ui/PageContainer";
import { getCats } from "@/lib/services/catApi";
import CatCardList from "@/components/ui/CatCardList";

export default async function Home() {
  const cats = await getCats();
  console.log("cats", cats);
  return (
    <PageContainer title="The Cat API">
      <CatCardList items={cats} linkable={false} />
    </PageContainer>
  );
}
