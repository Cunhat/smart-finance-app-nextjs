import * as trpc from '@trpc/server';
import { z } from 'zod';
import { prisma } from '@/backend/utils/prisma';

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
  })
  .query('getCategories', {
    async resolve() {
      return prisma.category.findMany({
        include: { subCategories: true },
      });
    },
  })
  .mutation('createTag', {
    input: z.object({
      name: z.string(),
    }),
    resolve({ input }) {
      return prisma.tag.create({
        data: {
          name: input?.name,
        },
      });
    },
  });

// export type definition of API
export type AppRouter = typeof appRouter;
