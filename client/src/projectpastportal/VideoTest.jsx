import React from 'react';

const VideoTest = () => {
  return (
    <div style={styles.container}>
      <h2>Video Test</h2>
      <div style={styles.videoWrapper}>
        <iframe
          src="https://www.youtube.com/embed/e5JZjztRImY"
          title="Test Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={styles.iframe}
        ></iframe>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    background: '#f8f8f8',
    minHeight: '100vh',
    textAlign: 'center',
  },
  videoWrapper: {
    marginTop: '1rem',
    width: '100%',
    maxWidth: '800px',
    aspectRatio: '16 / 9',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#000', // fallback background
  },
  iframe: {
    width: '100%',
    height: '100%',
    border: 'none',
    borderRadius: '10px',
  },
};

export default VideoTest;
