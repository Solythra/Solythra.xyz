'use client';

import { upload } from '@vercel/blob/client';
import { useState, useRef } from 'react';

export default function VideoUploadPage() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blobUrl, setBlobUrl] = useState<string | null>(null);

  return (
    <>
      <h1>Upload Video</h1>

      <form
        onSubmit={async (event) => {
          event.preventDefault();

          if (!inputFileRef.current?.files) {
            throw new Error('No file selected');
          }

          const file = inputFileRef.current.files[0];

          // Upload the video to Vercel Blob
          const blob = await upload(file.name, file, {
            access: 'public',
            handleUploadUrl: '/api/upload',
          });

          setBlobUrl(blob.url);
        }}
      >
        <input name="file" ref={inputFileRef} type="file" accept="video/mp4, video/webm" required />
        <button type="submit">Upload</button>
      </form>

      {blobUrl && (
        <div>
          Video URL: <a href={blobUrl}>{blobUrl}</a>
        </div>
      )}
    </>
  );
}
