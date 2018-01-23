import * as redux from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = redux.combineReducers({
    books: BooksReducer,
    activeBook: ActiveBook
});

export default rootReducer;
