export default function Keyboard() {
  const letters = Array.from(
    { length: 26 },
    (_, i) => String.fromCharCode(65 + i) // 65 = ASCII for 'A'
  );

  return (
    <div className="w-full flex flex-wrap gap-2 justify-center mt-6 p-4">
      {letters.map((letter) => (
        <button
          key={letter}
          className="w-8 h-10 flex items-center justify-center rounded-md 
                     bg-yellow-300 text-black font-bold shadow-md hover:bg-blue-700
                     active:scale-95 transition"
        >
          {letter}
        </button>
      ))}
    </div>
  );
}
