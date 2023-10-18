import { baseApi } from "./baseApi";

const doctorApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getDoctors: build.query({
      query: (data) => ({
        url: "/doctors",
        method: "GET",
        params: data,
      }),
    }),
    getDoctor: build.query({
      query: (id) => `/doctors/${id}`,
    }),
  }),
});

export const { useGetDoctorsQuery, useGetDoctorQuery } = doctorApi;
