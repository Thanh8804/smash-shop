import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery ({baseUrl: `${process.env.REACT_APP_API_URL}/api/v1/` }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: ()   => 'products',   
            transformResponse: (response) => {
                return response.data;
            }   
        })
    })
})

export const { useGetProductsQuery } = productApi;  