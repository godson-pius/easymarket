import React, {useState} from 'react';
import { createSlice } from "@reduxjs/toolkit";


const merchantSlice = createSlice({
    name: "merchants",
    initialState: { value: [] },
    reducers: {
        addMerchant: (state, action) => {
            state.value.push(action.payload)
        }
    }
})

export const { addMerchant } = merchantSlice.actions
export default merchantSlice.reducer