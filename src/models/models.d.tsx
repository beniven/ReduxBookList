declare module models {
    interface IAppState {
        books?: Array<IBook>;
        activeBook?: IBook;
    }

    interface IBook {
        title?: string;
        pages?: number;
    }

    interface IBookDetailProps {
        book?: IBook;
    }

    interface IBookListProps {
        books?: Array<IBook>;
        selectBook?: (book: IBook) => any;
    }

    interface IAction {
        type?: string;
        payload?: Object
    }
}
