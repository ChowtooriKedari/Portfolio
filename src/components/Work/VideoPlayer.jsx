import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ url }) => {
  // Function to format Google Drive link
  const getGoogleDriveUrl = (driveUrl) => {
    const fileId = driveUrl.match(/[-\w]{25,}/);
    console.log(fileId);
    return fileId ? `https://drive.google.com/uc?export=download&id=${fileId[0]}` : driveUrl;
  };

  // Format the URL if it's a Google Drive link
  const formattedUrl = url.includes("drive.google.com") ? getGoogleDriveUrl(url) : url;

  return (
    <div className="video-player">
      <ReactPlayer url={formattedUrl} controls width="100%" height="100%" />
    </div>
  );
};

export default VideoPlayer;
