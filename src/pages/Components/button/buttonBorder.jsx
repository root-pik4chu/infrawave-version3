export default function ButtonBorder({ buttonName }) {
  return (
    <button className="px-[3vw] py-[1vw] text-black backdrop-blur-sm border border-black rounded-md hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-white/[0.2] text-[0.9vw] transition duration-200">
      {buttonName}
    </button>
  );
}
