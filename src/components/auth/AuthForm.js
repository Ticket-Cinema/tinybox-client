import styled from "styled-components";
import palette from "../../lib/styles/palette";
import {Link} from "react-router-dom";
import Button from "../common/Button";

/**
 * 회원가입/로그인 폼
 */

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[2]};
    margin-bottom: 1rem;
  }
`;

/**
 * 인풋스타일
 */
const StyledInput = styled.input`
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-bottom: 2px solid ${palette.cyan[3]};
  border-radius: 4px;
  background: ${palette.gray[8]};
  outline: none;
  width: 100%;
  padding: 1rem;
  color: white;

  &:focus {
    color: white;
    border-bottom: 2px solid ${palette.cyan[9]};
  }

  & + & {
    margin-top: 1rem;
  }
`;

/**
 * 링크
 */
const LinkStyle = styled.div`
  margin-top: 2rem;
  text-align: right;

  a {
    color: ${palette.gray[6]};
    text-decoration: underline;

    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;

const textMap = {
    login: '로그인',
    register: '회원가입'
};

const AuthForm = ({type}) => {
    const text = textMap[type];
    return (
        <AuthFormBlock>
            <h3>{text}</h3>
            <form>
                <StyledInput autoComplete={"loginId"} name={"loginId"} placeholder={"아이디"} required/>
                <StyledInput autoComplete={"loginPw"} name={"loginPw"} placeholder={"비밀번호"}
                             type={"password"} required/>
                {type === 'register' && <>
                    <StyledInput autoComplete={"loginPwCheck"} name={"loginPwCheck"} placeholder={"비밀번호 확인"}
                                 type={"password"} required/>
                    <StyledInput autoComplete={"name"} name={"name"} placeholder={"이름"} required/>
                    <StyledInput autoComplete={"tel"} name={"tel"} placeholder={"전화번호"}
                                 type={"text"} required/>
                    <StyledInput autoComplete={"name"} name={"email"} placeholder={"이메일"} type={"email"} required/>
                    <StyledInput autoComplete={"name"} name={"birth"} placeholder={"생년월일"} type={"date"} required/>)
                </>}

                <ButtonWithMarginTop cyan fullWidth>{text}</ButtonWithMarginTop>
            </form>
            <LinkStyle>
                {type === 'login' ? (
                    <Link to={"/register"}>회원가입</Link>
                ) : (
                    <Link to={"/login"}>로그인</Link>
                )}
            </LinkStyle>
        </AuthFormBlock>
    )
        ;
};

export default AuthForm;