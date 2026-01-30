import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

/**
 * VIP Group Access Landing Page
 *
 * Design Philosophy: Luxury Minimalism
 * - Premium emerald green palette with gold accents
 * - Playfair Display serif for headlines (exclusive feel)
 * - Clean whitespace and sophisticated layout
 * - Smooth animations and premium interactions
 * - Mobile-first responsive design
 */
export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animations on mount
    setIsVisible(true);
  }, []);

  const handleTelegramClick = () => {
    // Meta Pixel tracking is handled in index.html
    window.location.href = "https://t.me/+kDPyBk6Rzyc4ODBh";
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero Section with Image */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-8 sm:py-12 md:py-16">
        <div className="w-full max-w-md">
          {/* Image Container with Premium Frame */}
          <div
            className={`mb-8 transition-all duration-700 transform ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-emerald-100">
              <img
                src="/images/vip-hero.jpg"
                alt="VIP Group"
                className="w-full h-auto object-cover"
              />
              {/* Premium Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Headline Section */}
          <div
            className={`text-center mb-8 transition-all duration-700 delay-100 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-emerald-900 mb-3">
              Bem-vindo ao VIP
            </h1>
            <p className="text-lg sm:text-xl text-emerald-700 font-medium mb-2">
              🔥 APROVEITE BASTANTE 🔥
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Você foi selecionado para acessar nosso grupo exclusivo. Clique no
              botão abaixo para entrar agora mesmo.
            </p>
          </div>

          {/* CTA Button */}
          <div
            className={`transition-all duration-700 delay-200 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <Button
              id="vip-button"
              onClick={handleTelegramClick}
              className="w-full py-6 sm:py-7 px-6 text-lg sm:text-xl font-bold bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl active:scale-95 shadow-lg"
            >
              ACESSAR GRUPO VIP AQUI
            </Button>
          </div>

          {/* Decorative Elements */}
          <div className="mt-8 flex justify-center gap-2 text-2xl">
            <span className="animate-bounce" style={{ animationDelay: "0s" }}>
              🔥
            </span>
            <span className="animate-bounce" style={{ animationDelay: "0.1s" }}>
              💜
            </span>
            <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>
              🔥
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
