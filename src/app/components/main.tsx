import React from "react";

const Main:React.FC = () => {
    return (
      <div className="mt-6 px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* First Box */}
        <div className="h-64 rounded-lg p-8 shadow-lg flex flex-col justify-center bg-cover bg-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            The Adventure of Blue Sword
          </h2>
          <p className="text-base text-white">
            A thrilling story of bravery and courage in an epic journey.
          </p>
        </div>
  
        {/* Second Box */}
        <div className="h-64 rounded-lg p-8 shadow-lg flex flex-col justify-center bg-cover bg-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Recalling the Journey of Dol's Exciting Story
          </h2>
          <p className="text-base text-white">
            Follow Dol and his friends as they navigate an extraordinary adventure.
          </p>
        </div>
      </div>
    );
  };
  
  export default Main;
  