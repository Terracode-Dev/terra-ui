import { useState, useEffect } from "react";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";

type ImageSliderProps = {
  images: {
    url: string;
    alt: string;
  }[];
};

export function ImageSlider({ images }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((index) => (index === images.length - 1 ? 0 : index + 1));
  }

  function showPrevImage() {
    setImageIndex((index) => (index === 0 ? images.length - 1 : index - 1));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      showNextImage();
    }, 3000);

    return () => clearInterval(interval);
  }, [imageIndex, images.length]);

  return (
    <section aria-label="Image Slider" className="relative w-full h-full">
      <a
        href="#after-image-slider-controls"
        className="absolute w-px h-px p-0 m-[-1px] overflow-hidden border-0 clip-rect(0,0,0,0) focus-visible:w-auto focus-visible:h-auto focus-visible:m-0 focus-visible:clip-auto focus-visible:border focus-visible:border-black focus-visible:bg-white focus-visible:p-2 focus-visible:text-black focus-visible:z-100"
      >
        Skip Image Slider Controls
      </a>
      <div className="relative flex w-full h-full overflow-hidden">
        {images.map(({ url, alt }, index) => (
          <img
            key={url}
            src={url}
            alt={alt}
            aria-hidden={imageIndex !== index}
            className={`object-cover w-full h-full block flex-shrink-0 transition-transform duration-700 ease-in-out ${imageIndex === index ? 'opacity-100' : 'opacity-0'}`}
            style={{ transform: `translateX(${-100 * imageIndex}%)` }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>
      <button
        onClick={showPrevImage}
        className="absolute p-2 transition-colors duration-300 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full top-1/2 left-4 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
        aria-label="View Previous Image"
      >
        <ArrowBigLeft aria-hidden className="w-8 h-8 stroke-white" />
      </button>
      <button
        onClick={showNextImage}
        className="absolute p-2 transition-colors duration-300 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full top-1/2 right-4 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
        aria-label="View Next Image"
      >
        <ArrowBigRight aria-hidden className="w-8 h-8 stroke-white" />
      </button>
      <div className="absolute flex gap-2 transform -translate-x-1/2 bottom-4 left-1/2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`cursor-pointer w-4 h-4 rounded-full transition-transform duration-300 ease-in-out ${index === imageIndex ? 'bg-white scale-110' : 'bg-gray-400'}`}
            aria-label={`View Image ${index + 1}`}
            onClick={() => setImageIndex(index)}
          />
        ))}
      </div>
      <div id="after-image-slider-controls" />
    </section>
  );
}
