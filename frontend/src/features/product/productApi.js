import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery ({baseUrl: `${process.env.REACT_APP_API_URL}/api/v1/` }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: ({ page = 1, limit = 12 }) => `products?page=${page}&limit=${limit}`,
            transformResponse: (response) => ({
                data: response.data,
                page: response.page,
                totalPages: response.totalPages,
                totalItems: response.totalItems,
                limit: response.limit
            })
        }),
        getProducts: builder.query({
            query: () => `products`,
            transformResponse: (response) => response.data
        }),
        createProduct: builder.mutation({
            query: (productData) => ({
              url: 'products',
              method: 'POST',
              body: productData,
            }),
        }),
        updateProduct: builder.mutation({
            query: ({ id, productData }) => ({
              url: `products/${id}`,
              method: 'PUT',
              body: productData,
            }),
        }),
    })
})
export const { useGetProductsQuery, useGetAllProductsQuery,  useCreateProductMutation, useUpdateProductMutation  } = productApi;  