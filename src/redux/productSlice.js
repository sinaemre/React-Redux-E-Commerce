import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";

const initialState = {
  products: [],
  productsStatus: STATUS.IDLE,
  productDetail: [],
  productDetailStatus: STATUS.IDLE,
};

export const getProducts = createAsyncThunk("getProducts", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = response.json();
  return data;
});

export const getCategoryProducts = createAsyncThunk("getcategory", async (category) => {
  const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
  const data = response.json();
  return data;
});

export const getDetailProduct = createAsyncThunk("getProduct", async (id) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = response.json();
  return data;
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // @ts-ignore
      .addCase(getProducts.pending, (state, action) => {
        // @ts-ignore
        state.productsStatus = STATUS.LOADING;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        // @ts-ignore
        state.productsStatus = STATUS.SUCCESS;
        state.products = action.payload;
      })
      // @ts-ignore
      .addCase(getProducts.rejected, (state, action) => {
        // @ts-ignore
        state.productsStatus = STATUS.FAIL;
      })
      // @ts-ignore
      .addCase(getDetailProduct.pending, (state, action) => {
        // @ts-ignore
        state.productDetailStatus = STATUS.LOADING;
      })
      .addCase(getDetailProduct.fulfilled, (state, action) => {
        // @ts-ignore
        state.productDetailStatus = STATUS.SUCCESS;
        state.productDetail = action.payload;
      })
      // @ts-ignore
      .addCase(getDetailProduct.rejected, (state, action) => {
        // @ts-ignore
        state.productDetailStatus = STATUS.FAIL;
      })
      // @ts-ignore
      .addCase(getCategoryProducts.pending, (state, action) => {
        // @ts-ignore
        state.productsStatus = STATUS.LOADING;
      })
      .addCase(getCategoryProducts.fulfilled, (state, action) => {
        // @ts-ignore
        state.productsStatus = STATUS.SUCCESS;
        state.products = action.payload;
      })
      // @ts-ignore
      .addCase(getCategoryProducts.rejected, (state, action) => {
        // @ts-ignore
        state.productsStatus = STATUS.FAIL;
      })
  },
});

export default productSlice.reducer
