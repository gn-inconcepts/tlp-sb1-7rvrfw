export function TokenDetails() {
  return (
    <div className="py-16">
      <div className="bg-[#131339] rounded-lg p-6 lg:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">THE LAST PRESIDENT</h2>
        <p className="text-lg sm:text-xl mb-6">
          Introducing Trump Coin, the crypto that's making trading great again!
        </p>
        <p className="text-gray-300 mb-8">
          Ticker $TRUMP symbolizes bold leadership and economic freedom. Ideal for investors who value
          growth and resilience, $TRUMP offers a unique opportunity to back a currency as dynamic as its
          namesake. Invest in $TRUMP and join a movement of strength and distinction in the crypto world.
        </p>
        <div className="space-y-4">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className="bg-[#1a1a4d] p-4 rounded cursor-pointer hover:bg-[#222260] transition-colors"
            >
              TOKEN DETAILS OR BENEFITS {num}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}