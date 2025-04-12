"use client";

import { useRouter } from "next/navigation";
import { addComment } from "@/lib/services/actions/comments";
import { useRef } from "react";

export default function CommentForm({ breedId }) {
  const formRef = useRef(null);
  const router = useRouter();
  return (
    <form
      ref={formRef}
      action={async (formData) => {
        const content = formData.get("content");
        if (!content) return;

        const result = await addComment({
          breedId,
          content: content.toString(),
        });

        if (result.success) {
          formRef.current?.reset();
          router.refresh();
        }
      }}
      className="mt-4"
    >
      <textarea
        name="content"
        required
        className="w-full p-2 border rounded"
        placeholder="댓글을 입력하세요..."
        rows={3}
      />
      <button
        type="submit"
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        댓글 작성
      </button>
    </form>
  );
}
