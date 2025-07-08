import React from 'react';
import { Thermometer, MonitorSpeaker, Cpu, Circle } from 'lucide-react';

export const CircuitDiagram: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Circuit Design</h3>
      
      <div className="relative bg-gray-50 p-8 rounded-lg min-h-[300px]">
        {/* Arduino/Microcontroller */}
        <div className="absolute top-4 left-4 flex flex-col items-center">
          <div className="bg-blue-600 p-3 rounded-lg shadow-md">
            <Cpu className="w-8 h-8 text-white" />
          </div>
          <span className="text-xs mt-2 font-mono">Arduino Uno</span>
        </div>
        
        {/* Temperature Sensor */}
        <div className="absolute top-4 right-4 flex flex-col items-center">
          <div className="bg-red-500 p-3 rounded-lg shadow-md">
            <Thermometer className="w-8 h-8 text-white" />
          </div>
          <span className="text-xs mt-2 font-mono">DS18B20</span>
        </div>
        
        {/* LCD Display */}
        <div className="absolute bottom-4 left-4 flex flex-col items-center">
          <div className="bg-green-600 p-3 rounded-lg shadow-md">
            <MonitorSpeaker className="w-8 h-8 text-white" />
          </div>
          <span className="text-xs mt-2 font-mono">16x2 LCD</span>
        </div>
        
        {/* Push Button */}
        <div className="absolute bottom-4 right-4 flex flex-col items-center">
          <div className="bg-yellow-500 p-3 rounded-full shadow-md">
            <Circle className="w-8 h-8 text-white" />
          </div>
          <span className="text-xs mt-2 font-mono">Push Button</span>
        </div>
        
        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                    refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#666" />
            </marker>
          </defs>
          
          {/* Arduino to Temperature Sensor */}
          <line x1="80" y1="50" x2="200" y2="50" 
                stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)" />
          
          {/* Arduino to LCD */}
          <line x1="80" y1="100" x2="80" y2="220" 
                stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)" />
          
          {/* Arduino to Button */}
          <line x1="120" y1="80" x2="200" y2="200" 
                stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)" />
        </svg>
        
        {/* Pin Labels */}
        <div className="absolute top-16 left-20 text-xs font-mono text-gray-600">
          Pin 2 (Data)
        </div>
        <div className="absolute top-24 left-20 text-xs font-mono text-gray-600">
          Pin 4-7 (LCD)
        </div>
        <div className="absolute bottom-16 right-20 text-xs font-mono text-gray-600">
          Pin 3 (Button)
        </div>
      </div>
    </div>
  );
};