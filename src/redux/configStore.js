import { combineReducers, createStore } from 'redux';
import { baiTapGameOanTuXiReducer } from './reducers/baiTapGameOanTuXiReducer';

const rootReducer = combineReducers({

    baiTapGameOanTuXiReducer, // state bài tập oẳn tù xì
});


export const store = createStore(rootReducer);