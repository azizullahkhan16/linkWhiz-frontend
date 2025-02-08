import { useState, useEffect } from "react";

export default function LoadingToTick() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Simulate loading completion
    }, 3000); // 3 seconds loading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center items-center ">
      <div className="relative w-12 h-12">
        {loading ? (
          <div className="relative w-12 h-12">
            {[...Array(6)].map((_, i) => (
              <span
                key={i}
                className={`absolute left-5 top-5 w-2 h-2 bg-green-600 rounded-full animate-circle-rotate`}
                style={{
                  animationDelay: `${i * 0.2}s`,
                  transformOrigin: "10px 10px",
                }}
              ></span>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center w-full h-full">
            <svg
              className="w-12 h-12 animate-tick-fill"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 13l4 4L19 7"
                stroke="green"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}
