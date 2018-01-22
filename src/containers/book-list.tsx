import * as React from 'react';
import * as ReactRedux from 'react-redux';

class BookList extends React.Component<any, any> {
    renderList() {
        return this.props.books.map((book: any) => {
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
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

function mapStateToProps(state: any) {
    return {
        books: state.books
    };
}

export default ReactRedux.connect(mapStateToProps)(BookList);
