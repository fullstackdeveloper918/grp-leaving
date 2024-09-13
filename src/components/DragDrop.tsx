"use client"
import React, { useState } from 'react';
import Lift from './Lift';

// Define the number of lifts and floors
const numberOfLifts = 3;
const floors = [0, 1, 2, 3, 4, 5, 6, 7];

const DragDrop: React.FC = () => {
  // Initial floors for the lifts
  const [lifts, setLifts] = useState<number[]>([4, 6, 7]); // Lifts starting at floors 4, 6, 7
  const [targetFloor, setTargetFloor] = useState<number | null>(null);
  const [movingLiftId, setMovingLiftId] = useState<number | null>(null);

  // Function to update the current floor of a lift
  const setCurrentFloor = (id: number, floor: number) => {
    setLifts(prev => {
      const updated = [...prev];
      updated[id] = floor;
      return updated;
    });
  };

  // Function to handle floor button clicks
  const handleFloorClick = (floor: number) => {
    // Determine the nearest lift to the target floor
    const distances = lifts.map((liftFloor, index) => Math.abs(liftFloor - floor));
    const minDistance = Math.min(...distances);
    const nearestLiftId = distances.indexOf(minDistance);

    // Update the target floor and the lift that should move
    setTargetFloor(floor);
    setMovingLiftId(nearestLiftId);
  };

  return (
    <div>
      <h1>Lift Simulation</h1>
      <div style={{ marginBottom: '20px' }}>
        {floors.map(floor => (
          <button
            key={floor}
            style={{
              padding: '10px 20px',
              margin: '5px',
              cursor: 'pointer',
              backgroundColor: '#ddd',
              border: 'none',
              borderRadius: '5px'
            }}
            onClick={() => handleFloorClick(floor)}
          >
            Go to {floor} Floor
          </button>
        ))}
      </div>
      {lifts.map((liftFloor, index) => (
        <div key={index} style={{ marginBottom: '40px' }}>
          <h2>Lift {index + 1}</h2>
          <Lift 
            id={index} 
            currentFloor={liftFloor} 
            targetFloor={movingLiftId === index && targetFloor !== null ? targetFloor : null}
            setCurrentFloor={setCurrentFloor} 
          />
        </div>
      ))}
    </div>
  );
};

export default DragDrop;
