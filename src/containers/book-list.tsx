import * as React from 'react';
import * as ReactRedux from 'react-redux';
import * as Redux from 'redux';
import { selectBook } from '../actions/index';

class BookList extends React.Component<models.IBookListProps, any> {
    renderList() {
        return this.props.books.map((book: models.IBook) => {
            return (
                <li 
                    onClick={() => this.props.selectBook(book)} 
                    key={book.title}
                    className="list-group-item">
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state: models.IBookListProps) {
    // Whatever is returned will show up as props
    // inside of BookList
    return {
        books: state.books
    };
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch: any) {
    // Whenever selectBook is called, the result should be passed
    // to all of our reducers
    return Redux.bindActionCreators<any>({ selectBook: selectBook }, dispatch);
}

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.
export default ReactRedux.connect<any>(mapStateToProps, mapDispatchToProps)(BookList);
