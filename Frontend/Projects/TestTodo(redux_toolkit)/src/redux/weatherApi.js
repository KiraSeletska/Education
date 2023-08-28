import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const weatherURL = 'https://api.openweathermap.org/data/2.5/forecast?q=Kiev&lang=ru&units=metric&APPID=ba23aa42ff61ed334a3351d5244128b3'

export const weatherApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: weatherURL }),
})