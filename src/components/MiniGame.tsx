import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Gamepad2, Trophy, Clock } from "lucide-react";

export function MiniGame() {
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [bestScore, setBestScore] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startGame = () => {
    setGameStarted(true);
    setScore(0);
    setTimeLeft(30);
    moveTarget();
  };

  const moveTarget = () => {
    const newX = Math.random() * 80 + 10; // 10-90% range
    const newY = Math.random() * 70 + 15; // 15-85% range
    setPosition({ x: newX, y: newY });
  };

  const handleTargetClick = () => {
    setScore((prev) => prev + 1);
    moveTarget();
  };

  useEffect(() => {
    if (gameStarted && timeLeft > 0) {
      timerRef.current = setTimeout(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setGameStarted(false);
      if (score > bestScore) {
        setBestScore(score);
      }
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [gameStarted, timeLeft, score, bestScore]);

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Gamepad2 className="w-8 h-8 text-cyan-400" />
            <h2 className="text-white">Try a Mini Game</h2>
          </div>
          <p className="text-slate-400 mb-8 text-lg">
            Test your reflexes! Click the glowing targets before time runs out
          </p>

          <Card className="bg-slate-950 border-slate-800 p-6">
            {/* Stats Bar */}
            <div className="flex justify-around mb-6 gap-4">
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-cyan-400" />
                <div className="text-left">
                  <div className="text-xs text-slate-500">Score</div>
                  <div className="text-xl text-white">{score}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-cyan-400" />
                <div className="text-left">
                  <div className="text-xs text-slate-500">Time</div>
                  <div className="text-xl text-white">{timeLeft}s</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-400" />
                <div className="text-left">
                  <div className="text-xs text-slate-500">Best</div>
                  <div className="text-xl text-white">{bestScore}</div>
                </div>
              </div>
            </div>

            {/* Game Area */}
            <div className="relative w-full h-96 bg-gradient-to-br from-slate-900 to-slate-950 rounded-lg border-2 border-slate-800 overflow-hidden mb-6">
              {!gameStarted && timeLeft === 30 && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Gamepad2 className="w-16 h-16 text-cyan-400 mx-auto mb-4 animate-pulse" />
                    <p className="text-slate-400 mb-4">Click the cyan circles as fast as you can!</p>
                    <Button 
                      onClick={startGame}
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black"
                    >
                      Start Game
                    </Button>
                  </div>
                </div>
              )}

              {!gameStarted && timeLeft === 0 && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                    <h3 className="text-white mb-2">Game Over!</h3>
                    <p className="text-xl text-cyan-400 mb-4">Final Score: {score}</p>
                    {score === bestScore && score > 0 && (
                      <p className="text-yellow-400 mb-4">🎉 New Best Score!</p>
                    )}
                    <Button 
                      onClick={startGame}
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black"
                    >
                      Play Again
                    </Button>
                  </div>
                </div>
              )}

              {gameStarted && (
                <div
                  onClick={handleTargetClick}
                  className="absolute w-16 h-16 cursor-pointer transition-all duration-200 hover:scale-110"
                  style={{
                    left: `${position.x}%`,
                    top: `${position.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <div className="relative w-full h-full">
                    {/* Outer glow */}
                    <div className="absolute inset-0 bg-cyan-500 rounded-full opacity-30 animate-ping"></div>
                    {/* Main circle */}
                    <div className="absolute inset-2 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-lg shadow-cyan-500/50"></div>
                    {/* Inner highlight */}
                    <div className="absolute inset-4 bg-white rounded-full opacity-50"></div>
                  </div>
                </div>
              )}

              {/* Grid pattern for visual effect */}
              <div className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
                  backgroundSize: '50px 50px'
                }}
              ></div>
            </div>

            {gameStarted && (
              <div className="text-sm text-slate-500">
                Click the glowing target to score points!
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}
