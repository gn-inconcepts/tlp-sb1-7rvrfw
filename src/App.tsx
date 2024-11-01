import { Button } from '@/components/ui/button';
import { Timer } from '@/components/Timer';
import { GameSection } from '@/components/GameSection';
import { PFPGenerator } from '@/components/PFPGenerator';
import { RoadmapSection } from '@/components/RoadmapSection';
import { TokenDetails } from '@/components/TokenDetails';
import { Copy, Home, Twitter } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a1f] text-white">
      {/* Hero Section */}
      <div className="relative bg-[#0a0a1f]">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Social Links */}
          <div className="fixed left-0 lg:left-4 top-1/4 flex flex-col gap-4 z-50 p-2">
            <Button variant="ghost" size="icon" className="bg-blue-600 hover:bg-blue-700">
              <Home className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="bg-blue-600 hover:bg-blue-700">
              <Twitter className="h-5 w-5" />
            </Button>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              {/* Stars */}
              <div className="flex justify-center lg:justify-start gap-2 mb-8">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="text-blue-500 text-4xl">★</div>
                ))}
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl font-bold mb-8">
                THE LAST PRESIDENT
                <div className="text-5xl sm:text-6xl mt-2">
                  <span className="text-green-500">$</span>TRUMP
                </div>
              </h1>

              {/* Timer */}
              <Timer />

              <p className="text-lg mb-8">
                Till launch of the last Token you will ever need
              </p>

              {/* Game Live Button */}
              <div className="flex justify-center lg:justify-start">
                <Button className="bg-blue-600 hover:bg-blue-700 text-xl px-8 py-4">
                  GAME LIVE
                </Button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-[url('/placeholder-hero.jpg')] bg-cover bg-center" />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <TokenDetails />
        <GameSection />
        <PFPGenerator />
        <RoadmapSection />
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-6 mt-16">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
              Buy $TRUMP
            </Button>
            <Button variant="outline" className="flex gap-2 w-full sm:w-auto">
              <span className="truncate">CA: 0x9bD20ed5.........f08152f0815Dd23AF3</span>
              <Copy className="h-4 w-4 flex-shrink-0" />
            </Button>
            <Button variant="destructive" className="w-full sm:w-auto">
              Dexscreener
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;