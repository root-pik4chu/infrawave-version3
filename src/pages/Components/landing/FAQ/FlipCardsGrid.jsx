import { useState } from "react";


// Custom Card component instead of importing from shadcn/ui
const Card = ({ className, children }) => {
  return <div className={`  ${className}`}>{children}</div>;
};

export default function FlipCardsGrid() {
  // Card data with questions and answers
  const cardData = [
    {
      question: "What services does Infrawave Solutions offer?",
      answer:
        "Infrawave Solutions specializes in web and app development, intuitive UI/UX design, AI and ML solutions, blockchain integration, and secure cloud services, alongside tailored consultancy to help businesses achieve digital transformation.",
    },
    {
      question: "What services does Infrawave Solutions offer?",
      answer:
        "Infrawave Solutions specializes in web and app development, intuitive UI/UX design, AI and ML solutions, blockchain integration, and secure cloud services, alongside tailored consultancy to help businesses achieve digital transformation.",
    },
    {
      question: "What services does Infrawave Solutions offer?",
      answer:
        "Infrawave Solutions specializes in web and app development, intuitive UI/UX design, AI and ML solutions, blockchain integration, and secure cloud services, alongside tailored consultancy to help businesses achieve digital transformation.",
    },
    {
      question: "What services does Infrawave Solutions offer?",
      answer:
        "Infrawave Solutions specializes in web and app development, intuitive UI/UX design, AI and ML solutions, blockchain integration, and secure cloud services, alongside tailored consultancy to help businesses achieve digital transformation.",
    },
    {
      question: "What services does Infrawave Solutions offer?",
      answer:
        "Infrawave Solutions specializes in web and app development, intuitive UI/UX design, AI and ML solutions, blockchain integration, and secure cloud services, alongside tailored consultancy to help businesses achieve digital transformation.",
    },
    {
      question: "What services does Infrawave Solutions offer?",
      answer:
        "Infrawave Solutions specializes in web and app development, intuitive UI/UX design, AI and ML solutions, blockchain integration, and secure cloud services, alongside tailored consultancy to help businesses achieve digital transformation.",
    },
  ];

  // Track flipped state for each card
  const [flippedCards, setFlippedCards] = useState({});

  const handleFlip = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className=" w-full h-[120vh] px-[1vw]  mx-auto flex justify-center flex-col">
      <h1 className="text-3xl mb-8 lg:w-[70%] sm:w-full ">
        faq
      </h1>

      <div className="  lg:w-[70%] sm:w-full h-[screen] lg:left-[12%] relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-[5vw]">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="perspective-1000 h-[40vh] cursor-pointer  "
            onClick={() => handleFlip(index)}
          >
            <div
              className={`relative w-full h-full transition-transform duration-700 ease-in-out preserve-3d ${
                flippedCards[index] ? "rotate-y-180" : ""
              } `}
            >
              {/* Front of Card */}

              <Card
                className="absolute w-full h-full backface-hidden p-6 bg-zinc-100
              shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]

              "
              >
                {/* card content */}
                <h2 className="text-black text-2xl">{card.question}</h2>
              </Card>

              {/* Back of Card */}
              <Card
                className="absolute w-full h-full backface-hidden p-6  bg-zinc-100 rotate-y-180 
               shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]"
              >
                <p className="text-black ">{card.answer}</p>
              </Card>
            </div>
          </div>
        ))}
      </div>

      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }

        .preserve-3d {
          transform-style: preserve-3d;
        }

        .backface-hidden {
          backface-visibility: hidden;
        }

        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}
