import { configureStore } from "@reduxjs/toolkit";
import { songsReducer,addSong,removeSong} from "./slices/songsSlice";
import { movieReducer,addMovie,removeMovie} from "./slices/moviesSlice";

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: movieReducer,
  },
});
// const startingState = store.getState()
// console.log(JSON.stringify(startingState))
// store.dispatch(songsSlice.actions.addSong("0002123"))
// const finalState = store.getState();
// console.log(JSON.stringify(finalState))
export { store };
export { addSong, removeSong,addMovie,removeMovie } 

