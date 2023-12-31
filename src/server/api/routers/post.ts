import type { User } from "@clerk/nextjs/api"
import { clerkClient } from "@clerk/nextjs";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { TRPCError } from "@trpc/server";

const filterUserForClient = (user: User) => {
  return {
    id: user.id, 
    username: user.username, 
    profilePicture: user.imageUrl
  }
}

export const postRouter = createTRPCRouter({
    getAll: publicProcedure.query(async ({ ctx }) => {
      const posts = await ctx.db.post.findMany({
      take: 100,
      })

      const users = (
        await clerkClient.users.getUserList({
          userId: posts.map((post) => post.authorId),
          limit: 100,
        })
      ).map(filterUserForClient);


      console.log(users)

      return posts.map((post) => {
        const author = users.find((user) => user.id === post.authorId)

        if (!author) 
          throw new TRPCError({ 
            code: "INTERNAL_SERVER_ERROR", 
            message: "Author not found" 
          });

        return {
          post,
          author
        }
      });
    })

});
