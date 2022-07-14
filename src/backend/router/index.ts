import * as trpc from '@trpc/server';
import { z } from 'zod';
import { prisma } from '@/backend/utils/prisma';

const userId = 'b957f6a8-2b53-4278-bed6-3fad0a22e9c6';

export const appRouter = trpc
  .router()
  .query('getTags', {
    async resolve() {
      return await prisma.tag.findMany();
    },
  })
  .query('getCategories', {
    async resolve() {
      return await prisma.category.findMany({
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
      return await prisma.category.create({
        data: {
          name: input.name,
          id_user: userId,
        },
      });
    },
  })
  .mutation('createSubCategory', {
    input: z.object({ name: z.string(), id_category: z.string() }),
    async resolve({ input }) {
      return await prisma.subCategory.create({
        data: {
          name: input.name,
          id_category: input.id_category,
        },
      });
    },
  })
  .query('getTransactions', {
    async resolve() {
      const transactionObj = await prisma.transaction.findMany();

      return Promise.all(
        transactionObj.map(async (transaction) => {
          const subCategory = await prisma.subCategory.findUnique({
            where: { id: transaction.id_subCategory },
            include: { category: true },
          });

          const account = await prisma.account.findUnique({
            where: { id: transaction.id_account },
          });

          const tag = await prisma.tag.findUnique({
            where: { id: transaction.id_tag },
          });

          return {
            ...transaction,
            account: account,
            subcategory: subCategory,
            tag: tag,
          };
        }),
      );
    },
  })
  .query('getAccounts', {
    async resolve() {
      return await prisma.account.findMany();
    },
  })
  .mutation('createAccount', {
    input: z.object({
      name: z.string(),
      type: z.string(),
    }),
    async resolve({ input }) {
      return await prisma.account.create({
        data: {
          name: input.name,
          type: input.type,
          id_user: userId,
        },
      });
    },
  })
  .mutation('createTransaction', {
    input: z.object({
      description: z.string(),
      date: z.string(),
      value: z.number(),
      id_subCategory: z.string(),
      id_account: z.string(),
      id_user: z.string(),
      id_tag: z.string(),
    }),
    async resolve({ input }) {
      return await prisma.transaction.create({
        data: {
          description: input.description,
          date: new Date(input.date),
          value: input.value,
          id_subCategory: input.id_subCategory,
          id_account: input.id_account,
          id_user: userId,
          id_tag: input.id_tag,
        },
      });
    },
  })
  .mutation('updateTransaction', {
    input: z.object({
      id: z.string(),
      description: z.string(),
      date: z.string(),
      value: z.number(),
      id_subCategory: z.string(),
      id_account: z.string(),
      id_tag: z.string(),
    }),
    async resolve({ input }) {
      return await prisma.transaction.update({
        where: {
          id: input.id,
        },
        data: {
          description: input.description,
          date: new Date(input.date),
          value: input.value,
          id_subCategory: input.id_subCategory,
          id_account: input.id_account,
          id_tag: input.id_tag,
        },
      });
    },
  })
  .mutation('deleteTransaction', {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ input }) {
      return await prisma.transaction.delete({
        where: {
          id: input.id,
        },
      });
    },
  })
  .mutation('updateCategory', {
    input: z.object({
      id: z.string(),
      name: z.string(),
    }),
    async resolve({ input }) {
      return await prisma.category.update({
        where: {
          id: input.id,
        },
        data: {
          name: input.name,
        },
      });
    },
  });

// export type definition of API
export type AppRouter = typeof appRouter;
