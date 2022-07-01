import * as trpc from '@trpc/server';
import { z } from 'zod';
import { prisma } from '@/backend/utils/prisma';

const userId = 'b957f6a8-2b53-4278-bed6-3fad0a22e9c6';

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
    async resolve({ input }) {
      return prisma.tag.create({
        data: {
          name: input?.name,
        },
      });
    },
  })
  .mutation('createCategory', {
    input: z.object({ name: z.string() }),
    async resolve({ input }) {
      return prisma.category.create({
        data: {
          name: input.name,
          id_user: userId,
        },
      });
    },
  })
  .mutation('createSubCategory', {
    input: z.object({ name: z.string(), id_category: z.string()}),
    async resolve({ input }) {
      return prisma.subCategory.create({
        data: {
          name: input.name,
          id_category: input.id_category,
        },
      });
    },
  });

// export type definition of API
export type AppRouter = typeof appRouter;
