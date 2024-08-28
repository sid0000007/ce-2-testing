const Video1 = () => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="object-cover w-full h-full"
    >
      <source src="/videos/video_11.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video1;
