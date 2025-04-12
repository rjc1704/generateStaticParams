"use client";

import { useRouter } from "next/navigation";
import { deleteComment } from "@/lib/services/actions/comments";

export default function CommentItem({ comment }) {
  const router = useRouter();

  const handleDelete = async (commentId) => {
    if (!window.confirm("정말 삭제하시겠습니까?")) {
      return;
    }
    await deleteComment(commentId);
    router.refresh();
  };

  return (
    <li key={comment.id} className="border-b pb-2">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-700">{comment.content}</p>
          <p className="text-sm text-gray-500">
            {new Date(comment.createdAt).toLocaleString()}
          </p>
        </div>
        <button
          className="text-red-500 hover:text-red-700 text-sm"
          onClick={() => handleDelete(comment.id)}
        >
          삭제
        </button>
      </div>
    </li>
  );
}
