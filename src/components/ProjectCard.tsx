import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";

type Project = {
  company: string;
  role: string;
  period: string;
  description: string[];
  images?: string[];
  techStack?: string[];
};

const ProjectCard = ({
  company,
  role,
  period,
  description,
  images,
  techStack,
}: Project) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: { perView: 1 },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
    },
    []
  );

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border dark:border-gray-700 mb-6 transition-all hover:scale-[1.02] overflow-hidden">
      <div className="px-4 py-1">
        <h3 className="font-medium text-sm">
          {role} –{" "}
          <span className="text-gray-600 dark:text-gray-400">{company}</span>
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
          {period}
        </p>
      </div>

      {images?.length ? (
        <div className="relative">
          <div ref={sliderRef} className="keen-slider w-full bg-black">
            {images.map((src, idx) => (
              <div
                key={idx}
                className="keen-slider__slide flex justify-center items-center"
              >
                <img
                  src={src}
                  alt={`Preview ${idx + 1}`}
                  className="object-contain h-[300px] w-full"
                />
              </div>
            ))}
          </div>

          <button
            onClick={() => slider.current?.prev()}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-white dark:bg-gray-700 p-2 rounded-full shadow hover:bg-gray-200 z-10"
          >
            ◀
          </button>
          <button
            onClick={() => slider.current?.next()}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-white dark:bg-gray-700 p-2 rounded-full shadow hover:bg-gray-200 z-10"
          >
            ▶
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 my-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => slider.current?.moveToIdx(idx)}
                className={`w-2 h-2 rounded-full ${
                  currentSlide === idx
                    ? "bg-blue-500"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      ) : null}

      <div className="p-4">
        <ul className="text-sm text-gray-700 dark:text-gray-200 list-disc list-inside space-y-1">
          {description.map((desc, i) => (
            <li key={i}>{desc}</li>
          ))}
        </ul>

        {techStack?.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {techStack.map((tech, i) => (
              <span
                key={i}
                className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectCard;
