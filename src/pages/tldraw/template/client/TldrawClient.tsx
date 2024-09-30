import { useSync } from '@tldraw/sync';
import React from 'react';
import { AssetRecordType, getHashForString, TLAssetStore, TLBookmarkAsset, Tldraw, uniqueId } from 'tldraw';

const WORKER_URL = `http://localhost:5858`;

// 이 예시에서는 방 ID가 하드코딩되어 있습니다. 물론 이를 원하는 방식으로 설정할 수 있습니다.
// const roomId = 'test-room';

function TldrawClient() {
  // 멀티플레이어와 연결된 스토어를 생성합니다.
  const store = useSync({
    // 웹소켓의 URI를 알아야 합니다...
    uri: `${WORKER_URL}/connect/1`,
    // ...그리고 이미지 및 비디오와 같은 정적 자산을 어떻게 처리할지 정의해야 합니다.
    assets: multiplayerAssets,
  });

  return (
    <div style={{ position: 'fixed', inset: 0 }}>
      <Tldraw
        // 연결된 스토어를 Tldraw 컴포넌트에 전달하면 로딩 상태를 처리하고
        // 커서 및 참여자 목록과 같은 멀티플레이어 UX 기능을 활성화할 수 있습니다.
        store={store}
        onMount={(editor) => {
          // @ts-expect-error
          window.editor = editor;
          // 에디터가 준비되면 북마크 unfurling(확장) 서비스를 등록해야 합니다.
          // editor.registerExternalAssetHandler('url', unfurlBookmarkUrl);
        }}
      />
    </div>
  );
}

// 서버는 이미지와 비디오 같은 자산을 어떻게 처리하나요?
const multiplayerAssets: TLAssetStore = {
  // 자산을 업로드하려면 고유한 ID를 앞에 붙이고, 워커(worker)로 POST한 후 URL을 반환합니다.
  async upload(_asset, file) {
    const id = uniqueId();

    const objectName = `${id}-${file.name}`;
    const url = `${WORKER_URL}/uploads/${encodeURIComponent(objectName)}`;

    const response = await fetch(url, {
      method: 'PUT',
      body: file,
    });

    if (!response.ok) {
      throw new Error(`자산 업로드 실패: ${response.statusText}`);
    }

    return url;
  },
  // 자산을 불러올 때는 동일한 URL을 사용할 수 있습니다. 이를 사용자 인증 추가, 또는 최적화된
  // 버전/크기의 자산을 제공하는 방식으로 맞춤화할 수 있습니다.
  resolve(asset) {
    return asset.props.src;
  },
};

// 서버는 북마크 unfurling(확장)을 어떻게 처리하나요?
// async function unfurlBookmarkUrl({ url }: { url: string }): Promise<TLBookmarkAsset> {
//   const asset: TLBookmarkAsset = {
//     id: AssetRecordType.createId(getHashForString(url)),
//     typeName: 'asset',
//     type: 'bookmark',
//     meta: {},
//     props: {
//       src: url,
//       description: '',
//       image: '',
//       favicon: '',
//       title: '',
//     },
//   };
//
//   try {
//     const response = await fetch(`${WORKER_URL}/unfurl?url=${encodeURIComponent(url)}`);
//     const data = await response.json();
//
//     asset.props.description = data?.description ?? '';
//     asset.props.image = data?.image ?? '';
//     asset.props.favicon = data?.favicon ?? '';
//     asset.props.title = data?.title ?? '';
//   } catch (e) {
//     console.error(e);
//   }
//
//   return asset;
// }

export default TldrawClient;
