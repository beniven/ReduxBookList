import * as redux from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = redux.combineReducers({
    books: BooksReducer
});

export default rootReducer;
