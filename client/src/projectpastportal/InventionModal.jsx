// // src/components/InventionModal.jsx
// import React from 'react';
// import './InventionModal.css';

// const InventionModal = ({ invention, onClose }) => {
//   if (!invention) return null;

//   return (
//     <div className="invention-modal-overlay" onClick={onClose}>
//       <div className="invention-modal-content" onClick={(e) => e.stopPropagation()}>
//         <button className="invention-modal-close" onClick={onClose}>✖</button>
//         <img src={invention.image} alt={invention.name} />
//         <h3>{invention.name}</h3>
//         <p>{invention.desc}</p>
//         {invention.keyPoints && (
//           <ul>
//             {invention.keyPoints.map((point, index) => (
//               <li key={index}>{point}</li>
//             ))}
//           </ul>
//         )}
//            {invention.videoUrl && (
//   <div className="video-wrapper">
//     <iframe
//       src={invention.videoUrl}
//       title={`Video about ${invention.name}`}
//       frameBorder="0"
//       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//       allowFullScreen
//     ></iframe>
//   </div>
// )}

//       </div>
//     </div>
//   );
// };

// export default InventionModal;

import YouTube from 'react-youtube';
import './InventionModal.css';

const InventionModal = ({ invention, onClose }) => {
  if (!invention) return null;

  // ✅ Define the helper function to extract the video ID from the URL
  const getVideoId = (url) => {
    try {
    const urlObj = new URL(url);
    const videoId = urlObj.searchParams.get("v");
    if (videoId) return videoId;

    // fallback for already embedded links
    const parts = url.split("/embed/");
    if (parts[1]) return parts[1];

    return null;
  } catch {
    return null;
  }
};

  // ✅ Define videoId using the function above
  const videoId = invention.videoUrl ? getVideoId(invention.videoUrl) : null;

  return (
    <div className="invention-modal-overlay" onClick={onClose}>
      <div className="invention-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="invention-modal-close" onClick={onClose}>✖</button>
        <div className="modal-body">
        <img src={invention.image} alt={invention.name} className="modal-image" />
          <div className="modal-details">
        <h3>{invention.name}</h3>
        <p>{invention.desc}</p>
        {invention.keyPoints && (
          <ul>
            {invention.keyPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        )}
        </div>
        </div>

        {/* ✅ Only render if videoId is present */}
        {videoId && (
          <div className="video-wrapper">
            <YouTube videoId={videoId} />
          </div>
        )}
      </div>
    </div>
  );
};

export default InventionModal;
