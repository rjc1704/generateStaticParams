import { NextResponse } from "next/server";

// 임시 작업 중인 경로 목록
const UNDER_CONSTRUCTION = ["/coming-soon"];

export default function middleware(request) {
  const { pathname } = request.nextUrl;
  console.log("pathname", pathname);
  const token = request.cookies.get("token");
  console.log("token", token);
  if (token) {
    console.log("로그인 상태입니다.");
  } else {
    console.log("로그인하지 않은 사용자입니다.");
  }

  // 작업 중인 경로인지 확인
  if (UNDER_CONSTRUCTION.includes(pathname)) {
    console.log(`작업 중인 경로 접근: ${pathname}, 홈으로 리다이렉트합니다.`);
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  // 모든 경로에 적용하되, 정적 파일 경로는 제외
  matcher: ["/((?!_next|api|favicon.ico|images).*)"],
};
