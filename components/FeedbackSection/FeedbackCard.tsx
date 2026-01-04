import { Feedback } from "@/types/feedback";
import { FaStar } from "react-icons/fa";

export default function FeedbackCard({
  feedback,
  isEven,
}: {
  feedback: Feedback;
  isEven: boolean;
}) {
  const stars = Array.from({ length: 5 }, (_, i) => i < feedback.rating);

  if (isEven) {
    return (
      <div className="flex-shrink-0 w-full md:w-[600px] lg:w-[850px] bg-[#D8CFC4] grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4">
        <div className="flex flex-col justify-between p-4 pb-8">
          <div className="">
            <div className="space-y-3 h-24 bg-brand-orange text-white px-6 py-5">
              <div className="font-medium text-sm">
                {feedback.name}, {feedback.title}
              </div>
              <div className="flex gap-1">
                {stars.map((filled, i) => (
                  <FaStar
                    key={i}
                    className={filled ? "text-white" : "text-black/40"}
                    size={16}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="text-sm leading-relaxed pl-5 pr-6 mt-6">
            {feedback.content}
          </div>
        </div>

        <div className="w-full md:w-[350px] h-[400px]">
          <img
            src={feedback.mediaSrc}
            alt={feedback.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex-shrink-0 w-full md:w-[600px] lg:w-[850px] bg-[#D8CFC4] grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4">
      <div className="flex flex-col justify-between p-4 pt-8">
        <div className="text-sm leading-relaxed pl-5 pr-6 ">
          {feedback.content}
        </div>

        <div className="mt-6">
          <div className="space-y-3 h-24 bg-brand-orange text-white px-6 py-5">
            <div className="font-medium text-sm">
              {feedback.name}, {feedback.title}
            </div>
            <div className="text-xs font-light"></div>
            <div className="flex gap-1">
              {stars.map((filled, i) => (
                <FaStar
                  key={i}
                  className={filled ? "text-white" : "text-black/40"}
                  size={16}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-[350px] h-[400px]">
        <video
          src={feedback.mediaSrc}
          className="w-full h-full object-cover"
          controls
          muted
        />
      </div>
    </div>
  );
}
