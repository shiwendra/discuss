import type { Comment } from "@prisma/client";
import { db } from '@/db'
import { type } from "os";
export type CommentWithAuthor = (
    Comment & {
        user: { name: string | null, image: string | null };
    }
);
//export type CommentWithAuthor = Awaited<ReturnType<typeof fetchCommentByPostID>>[number];
export function fetchCommentByPostID(postId: string): Promise<CommentWithAuthor[]> {
    return db.comment.findMany({
        where: { postId },
        include: {
            user: {
                select:
                {
                    name: true,
                    image: true
                }
            },
        },
    });
}