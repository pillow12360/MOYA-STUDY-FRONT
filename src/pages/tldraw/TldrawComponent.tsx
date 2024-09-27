import React from 'react';
import 'tldraw/tldraw.css';
import { Tldraw, useEditor, getSnapshot, loadSnapshot } from '@tldraw/tldraw';
import { Button, Box, Grid } from '@mui/material'; // MUI 컴포넌트 임포트

// SaveButton 컴포넌트
const SaveButton: React.FC<{ documentId: string; userId: string }> = ({ documentId, userId }) => {
  const editor = useEditor();

  const handleSave = async () => {
    if (!editor) return;

    const { document, session } = getSnapshot(editor.store);

    try {
      await saveDocumentState(documentId, document);
      await saveSessionState(documentId, userId, session);
    } catch (error) {
      console.error('Error saving state:', error);
    }
    alert('문서가 저장되었습니다.');
  };

  return (
    <Button variant="contained" color="secondary" onClick={handleSave}>
      저장하기
    </Button>
  );
};

// LoadButton 컴포넌트
const LoadButton: React.FC<{ documentId: string; userId: string }> = ({ documentId, userId }) => {
  const editor = useEditor();

  const handleLoad = async () => {
    if (!editor) return;

    try {
      const document = await loadDocumentState(documentId);
      const session = await loadSessionState(documentId, userId);
      editor.setCurrentTool('select'); // 도구 상태를 리셋
      loadSnapshot(editor.store, { document, session });
    } catch (error) {
      console.error('Error loading state:', error);
    }
    alert('문서가 로드되었습니다.');
  };

  return (
    <Button variant="contained" color="primary" onClick={handleLoad}>
      불러오기
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
            <Grid item>
              <SaveButton documentId="my-document-id" userId="my-user-id" />
            </Grid>
            <Grid item>
              <LoadButton documentId="my-document-id" userId="my-user-id" />
            </Grid>
          </Grid>
        </Box>
      </Tldraw>
    </Box>
  );
};

export default TldrawComponent;

// 상태 저장 로직
async function saveDocumentState(documentId: string, document: any) {
  localStorage.setItem(`${documentId}-document`, JSON.stringify(document));
}

async function saveSessionState(documentId: string, userId: string, session: any) {
  localStorage.setItem(`${documentId}-${userId}-session`, JSON.stringify(session));
}

// 상태 불러오기 로직
async function loadDocumentState(documentId: string): Promise<any> {
  const savedDocument = localStorage.getItem(`${documentId}-document`);
  return savedDocument ? JSON.parse(savedDocument) : null;
}

async function loadSessionState(documentId: string, userId: string): Promise<any> {
  const savedSession = localStorage.getItem(`${documentId}-${userId}-session`);
  return savedSession ? JSON.parse(savedSession) : null;
}
