import React, { useState, useEffect, useRef } from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ 
  src, 
  alt, 
  className,
  priority = false
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const imgRef = useRef<HTMLImageElement>(null);

  // Default professional fallback image (Verified Working)
  const fallbackSrc = 'https://images.unsplash.com/photo-1640340434855-6084b1f4901c?auto=format&fit=crop&w=1200&q=80';

  useEffect(() => {
    setImgSrc(src);
    setHasError(false);
    setIsLoading(true);
  }, [src]);

  useEffect(() => {
    // If the image is already cached by the browser, onLoad might not fire.
    // We check the ref to see if it's already complete.
    if (imgRef.current && imgRef.current.complete) {
        if (imgRef.current.naturalWidth > 0) {
            // Image loaded successfully from cache
            setIsLoading(false);
        } else if (imgRef.current.naturalWidth === 0 && !hasError) {
             // Image "completed" but broken (width 0), trigger error manually
             onError();
        }
    }
  }, [imgSrc]);

  const onError = () => {
    if (!hasError) {
      // First error: Try the fallback
      setHasError(true);
      setImgSrc(fallbackSrc);
      // We keep isLoading(true) because we are now waiting for the fallback to load
    } else {
      // Second error: Fallback also failed, stop loading to prevent infinite spinner
      setIsLoading(false);
    }
  };

  const onLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={`relative overflow-hidden bg-gray-100 ${className}`}>
      <img 
        ref={imgRef}
        src={imgSrc} 
        alt={alt} 
        className={`w-full h-full object-cover transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        onError={onError}
        onLoad={onLoad}
        loading={priority ? "eager" : "lazy"}
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
          <div className="w-8 h-8 border-2 border-brand-primary/20 border-t-brand-primary rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default ImageWithFallback;