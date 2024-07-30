import React from "react";
import resume from "../assets/Paul-Ouma-Ocholla-Resume.pdf";

const DownloadResume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.rel = "noopener noreferrer";
    link.target = "_blank";
    link.download = "Paul-Ocholla-Resume.pdf";
    link.click();
  };

  return (
    <div>
      <button type="button" className="form-btn" onClick={handleDownload}>
        <span>Download Resume</span>
      </button>
    </div>
  );
};

export default DownloadResume;
