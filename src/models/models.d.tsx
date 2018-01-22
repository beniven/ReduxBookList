declare module models {
    interface iAppState {
        books?: Array<IBook>;
        activeBook?: IBook;
    }

    interface IBook {
        title?: string;
    }

    interface IBookListProps {
        books?: Array<IBook>;
    }
}
