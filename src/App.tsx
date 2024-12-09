import React from 'react';
import { AIIcebreakerGenerator } from './components/icebreaker/AIIcebreakerGenerator';
import { GridBackground } from './components/layout/GridBackground';
import { CreditsScreen } from './components/credits/CreditsScreen';
import { Starburst } from './components/starburst/Starburst';

function App() {
  return (
    <GridBackground>
      <div className="relative">
        <AIIcebreakerGenerator />
        <Starburst 
          className="hidden lg:block absolute bottom-[-30px] left-[820px] transform -translate-x-1/2 z-10"
          size={180}
        />
        <Starburst 
          className="hidden lg:block absolute top-[-650px] left-[950px] transform -translate-x-1/2 z-10"
          size={180}
        />
      </div>
      <CreditsScreen />
    </GridBackground>
  );
}

export default App;