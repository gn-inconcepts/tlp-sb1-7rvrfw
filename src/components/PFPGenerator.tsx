import { Button } from '@/components/ui/button';

export function PFPGenerator() {
  return (
    <div className="py-16">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">PFP GENERATOR</h3>
          <p className="text-lg sm:text-xl mb-4">
            Introducing Trump Coin, the crypto that's making trading great again!
          </p>
          <p className="mb-8">
            Ticker $TRUMP symbolizes bold leadership and economic freedom. Ideal for investors who value
            growth and resilience, $TRUMP offers a unique opportunity to back a currency as dynamic as its
            namesake.
          </p>
          <Button className="bg-red-600 hover:bg-red-700 w-full sm:w-auto">
            GENERATE PFP 🥤
          </Button>
        </div>
        <div className="bg-blue-900 rounded-lg aspect-square">
          {/* Placeholder for PFP preview */}
          <div className="w-full h-full flex items-center justify-center">
            PFP Preview
          </div>
        </div>
      </div>
    </div>
  );
}