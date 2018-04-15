import { createStore, combineReducers } from 'redux';
import { setSelectedIndex, updateProperties , addElement} from '../store/actions/editor.actions';
import { editorReducer } from '../store/editor/editor.reducer';
import { authReducer } from '../store/auth/auth.reducer';


export const reducer = combineReducers({
    editor: editorReducer,
    auth: authReducer
});

/*const store = createStore(reducer, undefined, window['__REDUX_DEVTOOLS_EXTENSION__'] && window['__REDUX_DEVTOOLS_EXTENSION__']());

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(setSelectedIndex(0));
store.dispatch(updateProperties({opacity: 0}));
store.dispatch(addElement('h2'));

*/