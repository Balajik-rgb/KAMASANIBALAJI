import React from 'react';

interface LcdDisplayProps {
  temperature: number;
  unit: 'C' | 'F';
  counter: number;
  status: string;
}

export const LcdDisplay: React.FC<LcdDisplayProps> = ({
  temperature,
  unit,
  counter,
  status
}) => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-2xl border-4 border-gray-700">
      <div className="bg-green-400 text-black p-4 rounded font-mono text-lg leading-tight">
        <div className="flex justify-between items-start mb-2">
          <span className="text-sm">TEMP MONITOR v1.0</span>
          <span className="text-sm">CODTECH</span>
        </div>
        
        <div className="border-t border-black pt-2">
          <div className="text-2xl font-bold mb-1">
            {temperature.toFixed(1)}°{unit}
          </div>
          
          <div className="text-sm mb-2">
            Status: {status}
          </div>
          
          <div className="flex justify-between text-sm">
            <span>Count: {counter}</span>
            <span>Ready</span>
          </div>
        </div>
      </div>
      
      <div className="mt-4 text-center">
        <div className="text-green-400 text-xs font-mono">
          16x2 LCD Display
        </div>
      </div>
    </div>
  );
};