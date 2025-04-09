async function getCats() {
  const res = await fetch(
    `https://api.thecatapi.com/v1/images/search?api_key=${process.env.CAT_API_KEY}&limit=8&has_breeds=1`,
  );

  if (!res.ok) {
    throw new Error("고양이 데이터를 가져오는데 실패했습니다");
  }

  return res.json();
}

export default async function Home() {
  const cats = await getCats();

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl mb-4">The Cat API</h1>

      <main>
        <div className="grid grid-cols-3 gap-4">
          {cats.map((cat) => (
            <div key={cat.id} className="border">
              <figure className="h-48">
                <img
                  src={cat.url}
                  alt={cat.breeds[0]?.name || "고양이"}
                  className="w-full h-full"
                />
              </figure>
              <div className="p-2">
                <h2>{cat.breeds[0]?.name || "고양이"}</h2>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
