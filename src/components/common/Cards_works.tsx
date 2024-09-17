import React from 'react'
import { Row, Col, Typography, Button, Card } from 'antd';

const { Title, Text } = Typography;
const Cards_works = () => {
  return (
   
    <div className="flex flex-col lg:flex-row justify-center gap-12 lg:gap-24 items-center">
      {/* Step 1: Choose a Design */}
      <div className="text-center">
        <div className="w-20 h-20 mx-auto mb-4">
          <img src="/choose-design-icon.png" alt="Choose a design" className="w-full h-full" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Choose a design</h3>
        <p className="text-gray-600 max-w-xs">
          Pick one of our designs, add your friend's name, email and select a delivery date.
        </p>
      </div>

      {/* Step 2: Invite Others */}
      <div className="text-center">
        <div className="w-20 h-20 mx-auto mb-4">
          <img src="/invite-others-icon.png" alt="Invite others" className="w-full h-full" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Invite others to sign</h3>
        <p className="text-gray-600 max-w-xs">
          Share the link with friends and colleagues to collect messages and see your group card grow.
        </p>
      </div>

      {/* Step 3: Send the Card */}
      <div className="text-center">
        <div className="w-20 h-20 mx-auto mb-4">
          <img src="/send-card-icon.png" alt="Send the card" className="w-full h-full" />
        </div>
        <h3 className="text-xl font-semibold mb-2">We'll send the card</h3>
        <p className="text-gray-600 max-w-xs">
          Deliver the group greeting card via email on your scheduled date or save it as a PDF to print it.
        </p>
      </div>
    </div>

  )
}

export default Cards_works