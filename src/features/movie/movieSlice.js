import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recommend: null,
    newDisney: null,
    original: null,
    groot: null,
    teenage: null,
    aroundWorld: null,
    celebrateInd: null,
    siblings: null,
    learning: null,
};

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.recommend = action.payload.recommend;
            state.original = action.payload.original;
            state.teenage = action.payload.teenage;
            state.aroundWorld = action.payload.aroundWorld;
            state.celebrateInd = action.payload.celebrateInd;
            state.siblings = action.payload.siblings;
            state.groot = action.payload.groot;
            state.newDisney = action.payload.newDisney;
            state.learning = action.payload.learning;
        },
    }
})

export const { setMovies } = movieSlice.actions;

export const selectRecommend = (state) => state.movie.recommend;
export const selectNewDisney = (state) => state.movie.newDisney;
export const selectOriginal = (state) => state.movie.original;
export const selectGroot = (state) => state.movie.groot;
export const selectTeenage = (state) => state.movie.teenage;
export const selectAroundWorld = (state) => state.movie.aroundWorld;
export const selectSiblings = (state) => state.movie.siblings;
export const selectCelebrateInd = (state) => state.movie.celebrateInd;
export const selectLearning = (state) => state.movie.learning;

export default movieSlice.reducer;