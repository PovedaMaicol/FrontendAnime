import { createSlice, current } from '@reduxjs/toolkit'

const animeNameSlice = createSlice({
    name: 'animeName',
    initialState: '',
    reducers: {
        setAnimeName: (currentValue, action) => action.payload,
    }
});

export const { setAnimeName } = animeNameSlice.actions

export default animeNameSlice.reducer;