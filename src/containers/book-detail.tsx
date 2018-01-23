import * as React from 'react';
import * as ReactRedux from 'react-redux';

class BookDetail extends React.Component<models.IBookDetailProps, any> {
    render() {
        if (!this.props.book) {
            return <div>Select a book to get started.</div>;
        }

        return (
            <div>
                <h3>Details for:</h3>
                <div>Title: {this.props.book.title}</div>
                <div>Pages: {this.props.book.pages}</div>
            </div>
        );
    }
}

function mapStateToProps(state: models.IAppState) {
    return {
        book: state.activeBook
    }
}

export default ReactRedux.connect<any>(mapStateToProps)(BookDetail);
