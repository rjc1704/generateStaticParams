import { getCatById } from "@/lib/services/api/catApi";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;

  try {
    const catData = await getCatById(id);
    return NextResponse.json(catData);
  } catch (error) {
    return NextResponse.json(
      { error: "고양이 데이터를 가져오는데 실패했습니다" },
      { status: 500 },
    );
  }
}
