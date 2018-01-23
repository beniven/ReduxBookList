// State argument is not application state, only the state
// this reducter is responsible for
export default function(state: any = null, action: models.IAction) {
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }
    
    return state;
}
