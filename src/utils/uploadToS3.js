export async function uploadToS3(file) {
  const res = await fetch(`/api/upload/s3-url?fileName=${file.name}&fileType=${file.type}`);
  const { uploadUrl, fileUrl } = await res.json();

  await fetch(uploadUrl, {
    method: 'PUT',
    headers: { 'Content-Type': file.type },
    body: file,
  });

  return fileUrl;
}
