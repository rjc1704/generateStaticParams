import { getComments } from "@/lib/services/actions/comments";
import CommentItem from "./CommentItem";

export default async function CommentList({ breedId }) {
  const comments = await getComments(breedId);

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">댓글</h3>
      {comments.length === 0 ? (
        <p className="text-gray-500">아직 댓글이 없습니다.</p>
      ) : (
        <ul className="space-y-4">
          {comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </ul>
      )}
    </div>
  );
}
