import { getCats } from "@/lib/services/catApi";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const cats = await getCats();
    return NextResponse.json(cats);
  } catch (error) {
    return NextResponse.json(
      { error: "고양이 데이터를 가져오는데 실패했습니다" },
      { status: 500 },
    );
  }
}
