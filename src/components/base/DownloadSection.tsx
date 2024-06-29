import React from "react";

const DownloadSection: React.FC = () => {
  return (
    <div className="container mx-auto py-12 text-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
        Get the App
      </h2>
      <p className="text-lg font-normal mb-8">
        Download our app from the stores below
      </p>
      <div className="flex justify-center gap-4">
        <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
          <img src="/assets/getGooglePlay.png" alt="Get on Google Play" className="h-10 md:h-13 lg:h-16" />
        </a>
        <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
          <img src="/assets/getAppStore.svg" alt="Get on the App Store" className="h-10 md:h-13 lg:h-16" />
        </a>
      </div>
    </div>
  );
};

export default DownloadSection;