import React from 'react';
import 'tldraw/tldraw.css';
import { Tldraw, useEditor, getSnapshot, loadSnapshot } from '@tldraw/tldraw';
import { Button, Box, Grid } from '@mui/material';
import axios from 'axios'; // axios 모듈 임포트

// SaveDocumentButton 컴포넌트 (문서 저장 버튼)
const SaveDocumentButton: React.FC<{ documentId: string }> = ({ documentId }) => {
  const editor = useEditor();

  const handleSaveDocument = async () => {
    if (!editor) return;

    const { document } = getSnapshot(editor.store);
    console.log('Saving session data:', document); // 세션 데이터를 콘솔에 출력

    try {
      await saveDocumentState(documentId, document);
    } catch (error) {
      console.error('Error saving document:', error);
    }
    alert('문서가 저장되었습니다.');
  };

  return (
    <Button variant="contained" color="primary" onClick={handleSaveDocument}>
      문서 저장하기
    </Button>
  );
};

// SaveSessionButton 컴포넌트 (세션 저장 버튼)
const SaveSessionButton: React.FC<{ documentId: string; userId: string }> = ({ documentId, userId }) => {
  const editor = useEditor();

  const handleSaveSession = async () => {
    if (!editor) return;
    console.log('Saving session data:', document); // 세션 데이터를 콘솔에 출력

    const { session } = getSnapshot(editor.store);

    try {
      await saveSessionState(documentId, userId, session);
    } catch (error) {
      console.error('Error saving session:', error);
    }
    alert('세션이 저장되었습니다.');
  };

  return (
    <Button variant="contained" color="secondary" onClick={handleSaveSession}>
      세션 저장하기
    </Button>
  );
};

// LoadDocumentButton 컴포넌트 (문서 불러오기 버튼)
const LoadDocumentButton: React.FC<{ documentId: string }> = ({ documentId }) => {
  const editor = useEditor();

  const handleLoadDocument = async () => {
    if (!editor) return;

    try {
      const document = await loadDocumentState(documentId);
      editor.setCurrentTool('select');
      loadSnapshot(editor.store, { document });
    } catch (error) {
      console.error('Error loading document:', error);
    }
    alert('문서가 로드되었습니다.');
  };

  return (
    <Button variant="contained" color="primary" onClick={handleLoadDocument}>
      문서 불러오기
    </Button>
  );
};

// LoadSessionButton 컴포넌트 (세션 불러오기 버튼)
const LoadSessionButton: React.FC<{ documentId: string; userId: string }> = ({ documentId, userId }) => {
  const editor = useEditor();

  const handleLoadSession = async () => {
    if (!editor) return;

    try {
      const session = await loadSessionState(documentId, userId);
      editor.setCurrentTool('select');
      loadSnapshot(editor.store, { session });
    } catch (error) {
      console.error('Error loading session:', error);
    }
    alert('세션이 로드되었습니다.');
  };

  return (
    <Button variant="contained" color="secondary" onClick={handleLoadSession}>
      세션 불러오기
    </Button>
  );
};

// TldrawComponent
const TldrawComponent: React.FC = () => {
  return (
    <Box sx={{ position: 'absolute', padding: '2vw', paddingTop: '20vh', inset: 0 }}>
      <Tldraw persistenceKey="my-persistence-key">
        <Box sx={{ mt: 2 }}>
          <Grid container justifyContent="center" spacing={2}>
            {/* 서버 저장 및 불러오기 */}
            <Grid item>
              <SaveDocumentButton documentId="my-document-id" />
            </Grid>
            <Grid item>
              <LoadDocumentButton documentId="my-document-id" />
            </Grid>
            {/* 세션 저장 및 불러오기 */}
            <Grid item>
              <SaveSessionButton documentId="my-document-id" userId="my-user-id" />
            </Grid>
            <Grid item>
              <LoadSessionButton documentId="my-document-id" userId="my-user-id" />
            </Grid>
          </Grid>
        </Box>
      </Tldraw>
    </Box>
  );
};

export default TldrawComponent;

// 서버로 문서 상태 저장
async function saveDocumentState(documentId: string, document: any) {
  try {
    const response = await axios.post('http://localhost:5000/api/save-document', {
      documentId,
      document,
    });
    if (response.status !== 200) {
      throw new Error('Failed to save document');
    }
  } catch (error) {
    console.error('Error saving document:', error);
  }
}

// 서버로 세션 상태 저장
async function saveSessionState(documentId: string, userId: string, session: any) {
  try {
    const response = await axios.post('http://localhost:5000/api/save-session', {
      documentId,
      userId,
      session,
    });
    if (response.status !== 200) {
      throw new Error('Failed to save session');
    }
  } catch (error) {
    console.error('Error saving session:', error);
  }
}

// 서버에서 문서 상태 불러오기
async function loadDocumentState(documentId: string): Promise<any> {
  try {
    const response = await axios.get(`http://localhost:5000/api/load-document/${documentId}`);
    return response.data;
  } catch (error) {
    console.error('Error loading document:', error);
    throw error;
  }
}

// 서버에서 세션 상태 불러오기
async function loadSessionState(documentId: string, userId: string): Promise<any> {
  try {
    const response = await axios.get(`http://localhost:5000/api/load-session/${documentId}/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error loading session:', error);
    throw error;
  }
}
