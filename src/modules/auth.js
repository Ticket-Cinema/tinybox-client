import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";

const CHANGE_FIELD = 'auth/CHANGE_FIELD'
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM'

export const changeField = createAction(CHANGE_FIELD,
    ({form, key, value}) => ({
        form,       //register, login
        key,        //loginId, loginPw,....
        value,      //실제 바꾸려는 값
    })
);

export const initializeForm = createAction(INITIALIZE_FORM, form => form);

export const initialState = {
    register: {
        loginId: '',
        loginPw: '',
        loginPwCheck: '',
        name: '',
        tel: '',
        email: '',
        birth: '',
    },
    login: {
        loginId: '',
        loginPw: '',
    }
}

const auth = handleActions(
    {
        [CHANGE_FIELD]: (state, {payload: {form, key, value}}) =>
            produce(state, draft => {
                draft[form][key] = value;
            }),
        [INITIALIZE_FORM]: (state, {payload: {form}}) => ({
            ...state,
            [form]: initialState[form],
        }),
    },
    initialState,
);

export default auth;