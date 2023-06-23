import {Link} from "react-router-dom";

const Main = () => {
    return (
        <div>
            <h1>메인페이지</h1>
            <Link to={"/login"}>로그인</Link>
            <Link to={"/register"}>회원가입</Link>
            <Link to={"/event"}>이벤트</Link>
            <Link to={"/movies"}>영화검색</Link>
        </div>
    );
};
export default Main;