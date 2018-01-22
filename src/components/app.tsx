import * as React from 'react';
import BookList from '../containers/book-list';

export default class App extends React.Component<any, any> {
    render() {
        return (
            <div>
                <BookList />
            </div>
        );
    }
}
