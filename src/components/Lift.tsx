"use client"
import React, { useState, useEffect } from 'react';

interface LiftProps {
  id: number;
  currentFloor: number;
  targetFloor: number | null;
  setCurrentFloor: (id: number, floor: number) => void;
}

const Lift: React.FC<LiftProps> = ({ id, currentFloor, targetFloor, setCurrentFloor }) => {
  useEffect(() => {
    if (targetFloor !== null && targetFloor !== currentFloor) {
      const interval = setInterval(() => {
        if (currentFloor < targetFloor) {
          setCurrentFloor(id, currentFloor + 1);
        } else if (currentFloor > targetFloor) {
          setCurrentFloor(id, currentFloor - 1);
        } else {
          clearInterval(interval);
        }
      }, 1000); // Move every second

      return () => clearInterval(interval);
    }
  }, [currentFloor, targetFloor, id, setCurrentFloor]);

  const liftHeight = 350; // Height of the lift container in pixels
  const floorHeight = 50; // Height of each floor in pixels

  const liftStyle: React.CSSProperties = {
    width: '100px',
    height: `${liftHeight}px`,
    border: '2px solid #333',
    position: 'relative',
    overflow: 'hidden',
    marginBottom: '20px'
  };

  const liftPositionStyle: React.CSSProperties = {
    width: '100%',
    height: `${floorHeight}px`,
    position: 'absolute',
    bottom: `${(currentFloor - 1) * floorHeight}px`,
    textAlign: 'center',
    fontSize: '24px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray'
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={liftStyle}>
        <div style={liftPositionStyle}>
          🚪
          <div style={{ position: 'absolute', bottom: '5px', width: '100%', textAlign: 'center', fontSize: '16px' }}>
            {currentFloor}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lift;
