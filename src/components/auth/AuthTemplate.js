import styled from "styled-components";
import palette from "../../lib/styles/palette";
import {Link} from "react-router-dom";

/**
 * 로그인/회원가입 레이아웃 담당
 */

// 화면 전체 채움
const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// 입력박스
const InputBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }

  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 360px;
  background: ${palette.gray[9]};
  //background: white;
  border-radius: 2px;
`;

const AuthTemplate = ({children}) => {
    return (
        <AuthTemplateBlock>
            <InputBox>
                <div className={"logo-area"}>
                    <Link to={"/"}>메인</Link>
                </div>
                {children}
            </InputBox>
        </AuthTemplateBlock>
    );
};

export default AuthTemplate;