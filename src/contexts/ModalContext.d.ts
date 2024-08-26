// src/contexts/ModalContext.d.ts

import { ReactNode } from 'react';

interface ModalContextType {
  isOpen: boolean;
  content: ReactNode;
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
}

declare module '@contexts/ModalContext' {
  const ModalProvider: React.FC<{ children: ReactNode }>;
  const useModal: () => ModalContextType;
}
