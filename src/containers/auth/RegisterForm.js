import {useDispatch, useSelector} from "react-redux";
import {changeField, initializeForm} from "../../modules/auth";
import {useEffect} from "react";
import AuthForm from "../../components/auth/AuthForm";

const RegisterForm = () => {
    const dispatch = useDispatch();
    const {form} = useSelector(({auth}) => ({
        form: auth.register
    }));

    //input 변경 이벤트 핸들러
    const onChange = e => {
        const {value, name} = e.target;
        dispatch(
            changeField({
                form: 'register',
                key: name,
                value
            })
        )
    };

    //폼 등록 이벤트 핸들러
    const onSubmit = e => {
        e.preventDefault();
        //todo:
    }

    //컴포넌트 랜더링 시 폼초기화
    useEffect(() => {
        dispatch(initializeForm('register'));
    }, [dispatch]);

    return (
        <AuthForm
            type={"register"}
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}/>
    );
};

export default RegisterForm;