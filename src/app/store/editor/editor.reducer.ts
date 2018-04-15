import {SET_SELECTED_INDEX, UPDATE_NEW_PROPERTIES, ADD_ELEMENT, RESET} from '../actions/editor.actions'

import {set, update, flow} from 'lodash/fp';

const initialState = {
    elements: [{
        tag: 'h1',
        opacity: 1,
        color: '#000000',
        title: 'text'
    },
    {
        tag: 'div',
        opacity: 1,
        color: '#000000',
        title: 'text2'
    }],
    selectedIndex: 0

}

export const editorReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_SELECTED_INDEX:
        return set('selectedIndex', action.payload, state);
        case UPDATE_NEW_PROPERTIES:
        return set(['elements', state.selectedIndex], {
            ...state.elements[state.selectedIndex],
            ...action.payload
        }, state);
        case ADD_ELEMENT:
        return flow([
            set(['elements', state.elements.length], action.payload),
            set(['selectedIndex'], state.elements.length)
        ])(state)
        case RESET:
        return flow([
            set(['elements'], initialState.elements),
            set(['selectedIndex'], initialState.selectedIndex)
        ])(state)
    }
    return state;
}