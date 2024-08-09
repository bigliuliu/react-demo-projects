import { configureStore, createSlice,createAction } from "@reduxjs/toolkit";
export const reset =createAction('app/reset')
const movesSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
  extraReducers(builder){
    builder.addCase(reset,(state,action)=>{
        return []
    })
  }
});

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      // action.payload === string, the song we want to delete
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
  extraReducers(builder){
    builder.addCase(reset,(state, action)=>{
        return [];
    })
  }
});
const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: movesSlice.reducer,
  },
});
// const startingState = store.getState()
// console.log(JSON.stringify(startingState))
// store.dispatch(songsSlice.actions.addSong("0002123"))
// const finalState = store.getState();
// console.log(JSON.stringify(finalState))
export { store };
export const { addSong, removeSong } = songsSlice.actions;
export const { addMovie, removeMovie } = movesSlice.actions;
