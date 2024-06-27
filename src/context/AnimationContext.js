// src/AnimationContext.js
import React, { createContext, useState } from 'react';

const AnimationContext = createContext();

const AnimationProvider = ({ children }) => {
  const [animationEnded, setAnimationEnded] = useState(false);

  return (
    <AnimationContext.Provider value={{ animationEnded, setAnimationEnded }}>
      {children}
    </AnimationContext.Provider>
  );
};

export { AnimationContext, AnimationProvider };
