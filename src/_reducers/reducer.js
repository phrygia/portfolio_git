import {
    COLOR_CHANGE,
    NAV_TITLE_CHANGE,
    NAV_TITLE_CLASS
} from './types';

const reducer = (state, action) => {
    switch(action.type) {
        case COLOR_CHANGE:
            return {
                ...state,
                theme_color: action.theme_color
            }
        case NAV_TITLE_CHANGE:
            return {
                ...state,
                nav_title: action.nav_title
            }
        case NAV_TITLE_CLASS:
            return {
                ...state,
                nav_title_class: action.nav_title_class
            }    
        default: 
            return state;
    }
}

export default reducer;