import React, { useState, useContext, createContext, ReactNode } from 'react';
import Modal from '@hooks/Modal';

// ModalContext에서 사용할 값의 타입 정의
interface ModalContextType {
  isModalOpen: boolean;
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
}

// ModalContext 생성
const ModalContext = createContext<ModalContextType | undefined>(undefined);

// ModalProvider 컴포넌트
export function ModalProvider({ children }: { children: ReactNode }): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<ReactNode>(null);

  // 모달을 여는 함수
  function openModal(content: ReactNode): void {
    setModalContent(content);
    setIsModalOpen(true);
  }

  // 모달을 닫는 함수
  function closeModal(): void {
    setIsModalOpen(false);
    setModalContent(null);
  }

  // 컨텍스트에 제공할 값
  const value: ModalContextType = { isModalOpen, openModal, closeModal };

  return (
    <ModalContext.Provider value={value}>
      {children}
      {isModalOpen && <Modal>{modalContent}</Modal>}
    </ModalContext.Provider>
  );
}

// useModal 훅
export function useModal(): ModalContextType {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}
