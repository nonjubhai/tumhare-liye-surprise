import { useState } from 'react';

const SweetWebsite = () => {
  const [surpriseRevealed, setSurpriseRevealed] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSurpriseClick = () => {
    setSurpriseRevealed(true);
    setShowConfetti(true);
    // Hide confetti after animation
    setTimeout(() => setShowConfetti(false), 600);
  };

  const memories = [
    { text: "Sabse pehle tumne mujhe bola \"Bhai\"", emoji: "😅" },
    { text: "Phir WhatsApp par fir se bola \"Bhai\"", emoji: "" },
    { text: "Phir Insta par bhi \"Bhai\"", emoji: "🙈" },
    { text: "Maine bola: \"Bhai mat bolo.\"", emoji: "" },
    { text: "Tumne bola: \"Chotu\"", emoji: "🥹" },
    { text: "Main baat karta raha, tumhare jawab hamesha the: \"hmm\", \"okay\", \"acha\"…", emoji: "" },
    { text: "Fir misunderstanding clear hui aur tum normal baat karne lagi", emoji: "😊" },
    { text: "Chess khela aur main haar gaya", emoji: "♟️💔", subtext: "(best loss ever!)" }
  ];

  return (
    <div className="min-h-screen p-4 font-poppins">
      {/* Floating hearts background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 text-pink-300 opacity-30 heart-float">💖</div>
        <div className="absolute top-20 right-16 text-pink-200 opacity-40 heart-float" style={{animationDelay: '0.5s'}}>🌸</div>
        <div className="absolute bottom-32 left-8 text-pink-300 opacity-30 heart-float" style={{animationDelay: '1s'}}>💕</div>
        <div className="absolute bottom-20 right-12 text-pink-200 opacity-40 heart-float" style={{animationDelay: '1.5s'}}>✨</div>
      </div>

      <div className="max-w-md mx-auto space-y-6 relative z-10">
        {/* Hero Section */}
        <div className="sweet-card text-center animate-fade-in-up">
          <h1 className="text-3xl font-bold text-primary mb-3">
            🌸 Tumhare Liye 🌸
          </h1>
          <p className="text-muted-foreground text-lg">
            Ek chhoti si website… sirf tumhare liye banayi hai 💖
          </p>
        </div>

        {/* Memories Timeline Section */}
        <div className="sweet-card animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <h2 className="text-xl font-semibold text-primary mb-4 text-center">
            Humare Memories 📚
          </h2>
          <div className="space-y-3">
            {memories.map((memory, index) => (
              <div 
                key={index} 
                className="flex items-start space-x-3 p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-sm font-semibold text-primary">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <p className="text-foreground leading-relaxed">
                    {memory.text} {memory.emoji}
                  </p>
                  {memory.subtext && (
                    <p className="text-muted-foreground text-sm italic mt-1">
                      {memory.subtext}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dance & Memories Section */}
        <div className="sweet-card animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <h2 className="text-xl font-semibold text-primary mb-4 text-center">
            Dance & Khushiyan 💃
          </h2>
          <p className="text-center text-foreground mb-4">
            Tumhari dance ki photos aur videos → hamesha smile le aati hai 💃✨
          </p>
          <div className="bg-accent/40 p-4 rounded-xl border-l-4 border-primary">
            <p className="text-foreground font-medium text-center italic">
              "Tum dance karti ho toh duniya thodi better lagti hai."
            </p>
          </div>
        </div>

        {/* Confession Section */}
        <div className="sweet-card animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <h2 className="text-xl font-semibold text-primary mb-4 text-center">
            Dil Ki Baat 💭
          </h2>
          <div className="space-y-4 text-center">
            <p className="text-foreground text-lg">
              Tumhe pata hai… main tumhe like karta hu 😊
            </p>
            <p className="text-muted-foreground">
              Par jab tak tum na bolo… main kuch aur nahi bolunga.
            </p>
            <p className="text-foreground font-medium">
              Bas itna chahta hu ki tum smile karti raho 🤍
            </p>
          </div>
        </div>

        {/* Surprise Section */}
        <div className="sweet-card animate-fade-in-up text-center relative" style={{animationDelay: '0.8s'}}>
          <h2 className="text-xl font-semibold text-primary mb-4">
            🎉 Ek Surprise
          </h2>
          {!surpriseRevealed ? (
            <>
              <p className="text-foreground mb-6">
                Agar tumne yaha tak padha hai… toh ek chhota sa surprise button dabao 👇
              </p>
              <button 
                onClick={handleSurpriseClick}
                className="sweet-button text-lg font-semibold relative overflow-hidden"
              >
                ❤️ Click Karo ❤️
              </button>
            </>
          ) : (
            <div className="animate-fade-in-up">
              <div className="text-6xl mb-4">💖</div>
              <p className="text-2xl font-bold text-primary mb-2">
                You're really special
              </p>
              <p className="text-muted-foreground">
                Tumhe pata hai na? ✨
              </p>
            </div>
          )}
          
          {/* Confetti Animation */}
          {showConfetti && (
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/4 text-2xl confetti-burst">💖</div>
              <div className="absolute top-1/3 right-1/4 text-2xl confetti-burst" style={{animationDelay: '0.1s'}}>✨</div>
              <div className="absolute bottom-1/3 left-1/3 text-2xl confetti-burst" style={{animationDelay: '0.2s'}}>🌸</div>
              <div className="absolute bottom-1/4 right-1/3 text-2xl confetti-burst" style={{animationDelay: '0.3s'}}>💕</div>
              <div className="absolute top-1/4 left-1/2 text-2xl confetti-burst" style={{animationDelay: '0.4s'}}>🎉</div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center py-6 animate-fade-in-up" style={{animationDelay: '1s'}}>
          <p className="text-muted-foreground text-sm">
            Made with 💕 only for you
          </p>
        </div>
      </div>
    </div>
  );
};

export default SweetWebsite;