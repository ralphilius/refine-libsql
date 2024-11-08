import type { DataProvider } from "@refinedev/core";
import type { Client as LibSQLClient } from "@libsql/client";

export const dataProvider = (
  libSQLClient: LibSQLClient,
): Required<DataProvider> => {
  return {
    getList: async ({ resource, pagination, filters, sorters, meta }) => {
      throw Error("To be implemented on refine-libsql data provider.");
    },

    getMany: async ({ resource, ids, meta }) => {
      throw Error("To be implemented on refine-libsql data provider.");
    },

    getOne: async ({ resource, id, meta }) => {
      throw Error("To be implemented on refine-libsql data provider.");
    },

    create: async ({ resource, variables, meta }) => {
      throw Error("To be implemented on refine-libsql data provider.");
    },
    createMany: async ({ resource, variables, meta }) => {
      throw Error("To be implemented on refine-libsql data provider.");
    },

    update: async ({ resource, id, variables, meta }) => {
      throw Error("To be implemented on refine-libsql data provider.");
    },

    updateMany: async ({ resource, ids, variables, meta }) => {
      throw Error("To be implemented on refine-libsql data provider.");
    },

    deleteOne: async ({ resource, id, meta }) => {
      throw Error("To be implemented on refine-libsql data provider.");
    },

    deleteMany: async ({ resource, ids, meta }) => {
      throw Error("Not yet implemented on refine-libsql data provider.");
    },


    getApiUrl: () => {
      throw Error("Not implemented on refine-libsql data provider.");
    },

    custom: () => {
      throw Error("Not implemented on refine-libsql data provider.");
    },
  }
}
