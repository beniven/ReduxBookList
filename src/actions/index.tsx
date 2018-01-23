export function selectBook(book: models.IBook): models.IAction {
    // selectBook is an ActionCreator, it needs to return an action,
    // an object with a type property.
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}
