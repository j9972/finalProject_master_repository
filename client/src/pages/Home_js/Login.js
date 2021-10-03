import React from "react";
import Modal from "react-modal";
import "../../CSSFILE/Home_css/Login.css";

// 모달 모듈 쓰려면 해줘야함
Modal.setAppElement(document.getElementById("root"));

function Login() {
  // 모달 모드(on,off) state
  const [modalMode, setModalMode] = React.useState(false);
  // 모달창 오픈하는 함수
  function openModal() {
    setModalMode(true);
  }
  // 모달창 닫는 함수
  function closeModal() {
    setModalMode(false);
  }
  return (
    <>
      {/* 로그인 버튼 클릭시 모달창 오픈 */}
      <button className="login-btn" onClick={openModal}>
        Sign-In
      </button>

      {/* 모달창 */}
      <Modal
        isOpen={modalMode} // modalMode가 true일 경우 보여짐
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="log-in Modal"
      >
        {/* 모달 창 내에 x버튼, 클릭시 모달 닫음 */}
        <img
          className="closeButton"
          src="img/loginClose.png"
          alt="close"
          onClick={closeModal}
        ></img>
        
        {/* 로그인 form */}
        <form className="login-form">
          <h1>Log-In</h1>
          <input type="text" placeholder="이메일" autoFocus></input>
          <input type="password" placeholder="비밀번호"></input>
          <div className="submitInput">
            <input id="loginInput" type="submit" value="로그인"></input>
            <input
              id="naverInput"
              type="submit"
              value="네이버 계정으로 로그인"
            ></input>
            <input
              id="facebookInput"
              type="submit"
              value="페이스북 계정으로 로그인"
            ></input>
          </div>
          <a href="/">ID 또는 암호를 잊으셨나요?</a>
          <a href="/">회원이 아니신가요?</a>
        </form>
      </Modal>
    </>
  );
}

// 로그인 창 컨텐츠 화면 중앙 정렬 css
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    zIndex: 10,
  },
};

export default Login;
