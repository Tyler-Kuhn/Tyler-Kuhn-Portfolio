import { useState, useEffect } from "react";

const IntroCard = ({ imageSrc = "", title = "", description = "" }) => {
  const [visible, setVisible] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setDisplayText(""); // Reset before starting

    let index = 0;
    const typeText = () => {
      if (index <= title.length) {
        setDisplayText(title.slice(0, index)); // Properly update text
        index++;
        setTimeout(typeText, 100); // Adjust speed
      }
    };

    typeText();
  }, [title]); // Runs whenever title changes

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  // Image fade-in effect
  useEffect(() => {
    setTimeout(() => setVisible(true), 500);
  }, []);

  // Handle Mouse Move for 3D Effect
  const handleMouseMove = (e: { clientX: any; clientY: any; currentTarget: any; }) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();

    const x = (clientX - left - width / 2) / 20;
    const y = (clientY - top - height / 2) / 20;

    setTilt({ x, y });
  };

  // Reset Effect on Mouse Leave
  const handleMouseLeave = () => {
    setTimeout(() => setTilt({ x: 0, y: 0 }), 200);
  };

  return (
    <div className="flex flex-row items-center w-[75vw] max-w-[650px] mx-auto mt-50 p-6 bg-zinc-900 rounded-3xl shadow-lg text-white md:flex-col md:text-center md:w-full"
    onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
      }}
      >
      {/* Profile Image */}
      <img
        src={imageSrc}
        alt="Profile"
        className={`w-[36vw] max-w-[280px] h-[300px] object-cover rounded-3xl shadow-md transition-opacity duration-1000 ${
          visible ? "opacity-100" : "opacity-0"
        } md:w-full md:h-[250px] md:rounded-1 md:mt-[-100px]`}
      />

      {/* Text Content */}
      <div className="ml-6 md:ml-0 md:mt-4">
        <h2 className="text-2xl font-light flex items-center justify-center">
          {displayText}
          <span
            className={`w-[2px] h-[1.5rem] bg-white ml-2 ${
              cursorVisible ? "opacity-100" : "opacity-0"
            }`}
          ></span>
        </h2>
        <p className="text-sm opacity-50 mt-2">{description}</p>

        {/* Social Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-4 md:flex-row md:gap-6">
          <button >
            <img src="/github_5968866.png" className="w-[50px] h-[50px] grid place-items-center bg-blue-500 text-white rounded-full shadow-lg border-4 border-zinc-100"/>
          </button>
          <button >
          <img src="/instagram_2504918.png" className="w-[50px] h-[50px] grid place-items-center bg-zinc-100 text-white rounded-full shadow-lg border-4 border-zinc-100"/>
          </button>
          <button className="">
          <img src="/linkedin_2504923.png" className="w-[50px] h-[50px] grid place-items-center bg-zinc-100 text-white rounded-full shadow-lg border-4 border-zinc-100" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntroCard;