import { VideoFrame } from "./video-frame";

const VideoFrames = () => {
  const arr = Array.from({ length: 100 }, (_, i) => i);
  return (
    <div className="flex flex-wrap gap-x-2 overflow-scroll">
      {arr.map((i) => (
        <VideoFrame key={i} />
      ))}
    </div>
  );
};

export default VideoFrames;
