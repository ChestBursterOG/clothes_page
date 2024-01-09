// components/MultiLevelBackground.tsx
import React, { ReactNode } from 'react';

interface MultiLevelBackgroundProps {
  children: ReactNode;
}

const MultiLevelBackground: React.FC<MultiLevelBackgroundProps> = ({ children }) => {
  const levels = 4; // You can adjust the number of levels as per your requirement

  // Generate smoother achromatic colors for each level
  const generateColors = () => {
    const colors = [];
    for (let i = 0; i < levels; i++) {
      const shade = Math.floor((i + 1) * (256 / levels));
      const brightness = 220 + i * 10; // Adjust brightness for a brighter look
      const color = `rgb(${brightness},${brightness},${brightness})`;
      colors.push(color);
    }
    return colors;
  };

  const colors = generateColors();

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: `linear-gradient(to bottom, ${colors.join(', ')})`,
        overflowY: 'auto', // Allow vertical scrolling
      }}
    >
      {colors.map((color, index) => (
        <div
          key={index}
          style={{
            flex: 1,
          }}
        ></div>
      ))}
      {children}
    </div>
  );
};

export default MultiLevelBackground;
