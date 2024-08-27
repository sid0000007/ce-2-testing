const Video2 = () => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="object-cover w-full h-full absolute top-0"
    >
      <source src="/videos/video_3.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video2;
