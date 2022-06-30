import * as trpc from '@trpc/server';
import { z } from 'zod';
import { prisma } from "@/backend/utils/prisma";

export const appRouter = trpc
  .router()
  .query('hello', {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve({ input }) {
      return {
        greeting: `hello ${input?.text ?? 'world'}`,
      };
    },
  })
  .query('getTags', {
    async resolve() {
      return prisma.tag.findMany();
    },
  });

// export type definition of API
export type AppRouter = typeof appRouter;
