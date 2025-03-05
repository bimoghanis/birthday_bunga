import { useState, useEffect, useRef } from "react";
import Confetti from "react-confetti";
import { FaHeart, FaGift } from "react-icons/fa";

function App() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [secretMessage, setSecretMessage] = useState(false);
  const [text, setText] = useState("");
  const message =
    " Selamat ulang tahun yang ke-22 Bunga Tersayang tercinta tertua, Semoga di usia yang baru ini, Bunga bisa jadi pribadi yang lebih kuat, sabar, dan ga gampang ngamuk lagi. Jangan tantruman terus ya, nanti aku laporin mamah papah klo marah marah mulu 😀. Semoga Semua mimpi-mimpi indahmu terwujud satu per satu, udah kewujud satu sih, aku kan mimpi indah mu 😎. Semoga umur 22 ini penuh berkah, energi positif, dan jadi langkah awal buat jadi versi terbaik dari diri kamu. Tetap semangat yaa sama kerjaan, tugas, ujian hidup, aku , dan lain lain. Aku selalu doaiin kamu kalo aku solat biar kamu kaya raya dan banyak rejekinya ya 😁, kamu juga doaiin aku ya. Love u cinta , Happy Birthday !!😘❤️";
  const quote = "Ubur ubur ikan lele, love u so much lee 💖";
  const poem = "tidak ada perempuan lain dihatiku, cuman bunga satu-satunya. im fully yours 🤪";

  const audioRef = useRef(null);

  useEffect(() => {
    let index = 0;
    if (showMessage) {
      const interval = setInterval(() => {
        setText((prev) => prev + message[index]);
        index++;
        if (index === message.length) clearInterval(interval);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [showMessage]);

  const handleSurprise = () => {
    setShowConfetti(true);

    if (!audioRef.current) {
      audioRef.current = new Audio("/lagu.mp3");
    }

    if (audioRef.current.paused) {
      audioRef.current.play();
    }

    setTimeout(() => setShowMessage(true), 1500);
  };

  const handleSecret = () => {
    setSecretMessage(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFE4E1] to-[#E6E6FA] relative overflow-hidden flex items-center justify-center p-6 text-center">
      {showConfetti && <Confetti />}
      {showMessage && (
        <div className="absolute inset-0 pointer-events-none animate-pulse">
          {[...Array(30)].map((_, i) => (
            <FaHeart
              key={i}
              className="absolute text-[#FF0000] opacity-60 animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 30 + 20}px`,
                animationDuration: `${Math.random() * 3 + 2}s`,
                zIndex: 1,
              }}
            />
          ))}
        </div>
      )}

      <div
        className={`bg-white p-8 rounded-3xl shadow-xl w-full max-w-xs sm:max-w-sm transition-transform duration-300 hover:scale-105 cursor-pointer ${
          showMessage ? "bg-gradient-to-r from-[#FF7F7F] to-[#FFE4E1] animate-glowing" : ""
        }`}
        onClick={handleSurprise}
        style={{ zIndex: 10 }}
      >
        {!showMessage ? (
          <div className="flex flex-col items-center">
            <FaGift className="text-[#FF69B4] text-6xl animate-bounce mb-4" />
            <p className="text-lg font-[Dancing Script] text-[#FF69B4]">Untuk Anja Bunga Aditya</p>
            <p className="text-sm text-[#6D6875] mt-2 italic font-[Quicksand]">Di klik ya cintaa..</p>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <h1 className="text-3xl text-[#8B0000] animate-pulse font-[Dancing Script]">Happy Birthday! 🎉</h1>
            <p className="mt-3 text-[#6D6875] font-[Quicksand]">{text}</p>
            {quote && <p className="mt-4 text-[#8B0000] font-[Quicksand] italic">{quote}</p>}
            <FaHeart className="text-[#FF0000] text-6xl animate-bounce mt-6" />
            {!secretMessage && (
              <button
                onClick={handleSecret}
                className="mt-4 bg-[#FF7F7F] text-white px-4 py-2 rounded-full shadow-lg animate-wiggle font-[Quicksand]"
              >
                Klik Lagi ❤️
              </button>
            )}
            {secretMessage && (
              <p className="mt-4 text-[#FF69B4] font-[Dancing Script] animate-pulse">{poem}</p>
            )}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-100px);
            opacity: 0.4;
          }
          100% {
            transform: translateY(0px);
            opacity: 0.8;
          }
        }
        @keyframes glowing {
          0% {
            box-shadow: 0 0 10px pink;
          }
          50% {
            box-shadow: 0 0 20px pink;
          }
          100% {
            box-shadow: 0 0 10px pink;
          }
        }
        @keyframes wiggle {
          0%, 100% {
            transform: rotate(-3deg);
          }
          50% {
            transform: rotate(3deg);
          }
        }
      `}</style>
    </div>
  );
}

export default App;
