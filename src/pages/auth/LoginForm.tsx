import React, { useState, FormEvent } from 'react';
import styles from '@styles/LoginForm.module.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // useNavigate와 같은 훅 사용 시 react-router-dom 필요
import { useModal } from '@contexts/ModalContext'; // useModal 훅의 경로를 맞게 설정
import { API_ROUTES } from '../../config/apiConfig';

// LoginForm 컴포넌트의 타입 정의
const LoginForm: React.FC = () => {
  const [id, setId] = useState<string>(''); // 상태의 타입을 명시적으로 정의
  const [password, setPassword] = useState<string>(''); // 상태의 타입을 명시적으로 정의
  const { openModal } = useModal(); // 모달 훅
  const navigate = useNavigate(); // 리디렉션 훅

  // 폼 제출 시 호출되는 함수
  async function handleSubmit(e: FormEvent): Promise<void> {
    // 이벤트 타입과 함수의 반환 타입 정의
    e.preventDefault();

    // 입력 유효성 검사
    if (!id || !password) {
      openModal(
        <>
          <h3>로그인 오류</h3>
          <p>아이디와 비밀번호를 모두 입력해주세요.</p>
        </>,
      );
      return;
    }

    // 로그인 API 호출
    try {
      await axios.post(API_ROUTES.LOGIN, { id: id, password: password });
      console.log('로그인 성공');
      openModal(
        <>
          <h3>로그인 성공</h3>
        </>,
      );
      navigate('/');
    } catch (error) {
      openModal(
        <>
          <h3>로그인 실패</h3>
          <p>잠시 후 다시 시도해주세요.</p>
        </>,
      );
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.LoginForm}>
      <div className={styles.loginHeader}>
        ICT 지원실 민원 처리 <br />
        로그인
      </div>
      <div className={styles.formControl}>
        <label htmlFor="id">로그인</label>
        <input
          type="text"
          id="id"
          className={styles.formInput}
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="아이디 입력"
        />
      </div>
      <div className={styles.formControl}>
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          id="password"
          className={styles.formInput}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호 입력"
        />
      </div>
      <button className={styles.btnSuccess} type="submit">
        로그인
      </button>
    </form>
  );
};

export default LoginForm;
