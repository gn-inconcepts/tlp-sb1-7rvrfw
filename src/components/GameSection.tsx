import { Button } from '@/components/ui/button';

export function GameSection() {
  return (
    <div className="py-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        <span className="text-blue-500">TRUMP</span> GAME
      </h2>
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="bg-blue-200 aspect-video rounded-lg">
          {/* Game placeholder - you'll replace this with the actual game */}
          <div className="w-full h-full flex items-center justify-center text-blue-800">
            Game Preview
          </div>
        </div>
        <div>
          <p className="text-lg sm:text-xl mb-6">
            Introducing Trump Coin, the crypto that's making trading great again!
          </p>
          <p className="mb-8">
            Ticker $TRUMP symbolizes bold leadership and economic freedom. Ideal for investors who value
            growth and resilience, $TRUMP offers a unique opportunity to back a currency as dynamic as its
            namesake.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
            START GAME
          </Button>
        </div>
      </div>
    </div>
  );
}