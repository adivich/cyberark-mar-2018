export const SET_SELECTED_INDEX = 'SET_SELECTED_INDEX';
export const UPDATE_NEW_PROPERTIES = '[Editor] update properties';
export const ADD_ELEMENT = '[Editor] add element';
export const RESET = '[Editor] reset';


export const setSelectedIndex = (i) => ({
    type: SET_SELECTED_INDEX,
    payload: i
});

export const updateProperties = newProperties => ({
    type: UPDATE_NEW_PROPERTIES,
    payload: newProperties
});

export const addElement = tag => ({
    type: ADD_ELEMENT,
    payload: {
        tag,
        text: 'new element',
        opacity: 0.5
    }
})

export const reset = () => ({
    type: RESET,
    payload: {
        
    }
});
