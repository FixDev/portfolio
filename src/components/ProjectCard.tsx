import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

type Project = {
  company: string;
  role: string;
  period: string;
  description: string[];
  images?: string[];
};

const ProjectCard = ({
  company,
  role,
  period,
  description,
  images,
}: Project) => {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
    },
  });

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
                  className="object-contain"
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
        </div>
      ) : null}

      <div className="p-4">
        <ul className="text-sm text-gray-700 dark:text-gray-200 list-disc list-inside space-y-1">
          {description.map((desc, i) => (
            <li key={i}>{desc}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
