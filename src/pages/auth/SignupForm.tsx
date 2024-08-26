import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import styles from '@styles/SignupForm.module.scss';
import { useModal } from '@contexts/ModalContext';
import { useNavigate } from 'react-router-dom';
import { API_ROUTES } from '../../config/apiConfig';

interface UserData {
  name: string;
  email: string;
  password: string;
  role: string;
}

const SignupForm: React.FC = () => {
  const { openModal } = useModal();
  const navigate = useNavigate();

  const [userData, setUserData] = useState<UserData>({
    name: '',
    email: '',
    password: '',
    role: 'USER',
  });

  const [testPass, setTestPass] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [id]: value,
    }));
  };

  const namePattern = /^[가-힣a-zA-Z]{2,50}$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]).{8,40}$/;

  async function handleSubmit(e: FormEvent): Promise<void> {
    e.preventDefault();
    console.log(userData);

    if (!namePattern.test(userData.name)) {
      openModal(
        <>
          <h3>회원가입 오류</h3>
          <p>이름은 2자 이상 50자 이하의 한글 또는 영문만 가능합니다.</p>
        </>,
      );
      return;
    }

    if (!emailPattern.test(userData.email)) {
      openModal(
        <>
          <h3>회원가입 오류</h3>
          <p>유효한 이메일 주소를 입력해 주세요.</p>
        </>,
      );
      return;
    }

    if (!passwordPattern.test(userData.password)) {
      openModal(
        <>
          <h3>회원가입 오류</h3>
          <p>비밀번호는 8자 이상 40자 이하이며, 숫자, 대문자, 소문자, 특수문자가 포함되어야 합니다.</p>
        </>,
      );
      return;
    }

    if (userData.password !== testPass) {
      openModal(
        <>
          <h3>회원가입 오류</h3>
          <p>비밀번호가 일치하지 않습니다. 다시 확인해주세요.</p>
        </>,
      );
      return;
    }

    try {
      await axios.post(API_ROUTES.SIGNUP, userData);
      openModal(
        <>
          <h3>회원가입 완료</h3>
          <p>회원가입이 완료되었습니다.</p>
          <p>감사합니다. 3초 후 자동으로 홈으로 이동합니다.</p>
        </>,
      );
      setTimeout(() => {
        navigate('/');
      }, 3000);
    } catch (error) {
      let errorMessage = '오류가 발생하여 회원가입에 실패하였습니다.';
      // 서버에서 보낸 에러 메시지가 있을 경우 이를 활용
      if (axios.isAxiosError(error) && error.response) {
        errorMessage = error.response.data.message || errorMessage; // 서버에서 보낸 메시지를 사용
      }
      openModal(
        <>
          <h3>오류 발생</h3>
          <p>{errorMessage}</p>
        </>,
      );
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.SignupForm}>
      <div className={styles.signupHeader}>
        ICT Project 2024.08 <br />
        회원 가입
      </div>
      <div className={styles.formControl}>
        <label htmlFor="name">이름</label>
        <input type="text" id="name" value={userData.name} onChange={handleChange} placeholder="이름을 입력하세요" />
      </div>
      <div className={styles.formControl}>
        <label htmlFor="email">이메일</label>
        <input id="email" type="text" value={userData.email} onChange={handleChange} placeholder="이메일 입력하세요" />
      </div>
      <div className={styles.formControl}>
        <label htmlFor="password">비밀번호</label>
        <input
          id="password"
          type="password"
          value={userData.password}
          onChange={handleChange}
          placeholder="비밀번호 입력"
        />
      </div>
      <div className={styles.formControl}>
        <input
          type="password"
          value={testPass}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setTestPass(e.target.value);
          }}
          placeholder="비밀번호 확인"
        />
      </div>
      <button className={styles.btnSuccess} type="submit">
        회원가입 완료
      </button>
    </form>
  );
};

export default SignupForm;
