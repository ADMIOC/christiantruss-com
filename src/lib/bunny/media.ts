export function getBunnyStreamEmbed(videoId: string) {
  const libraryId = process.env.BUNNY_STREAM_LIBRARY_ID;

  if (!libraryId || !videoId) {
    return null;
  }

  return `https://iframe.mediadelivery.net/embed/${libraryId}/${videoId}`;
}

export function getBunnyCdnUrl(path: string) {
  const base = process.env.NEXT_PUBLIC_BUNNY_CDN_URL;

  if (!base) {
    return path;
  }

  return `${base.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
}
