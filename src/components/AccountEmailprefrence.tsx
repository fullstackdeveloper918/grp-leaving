"use client"
import React, { useState } from 'react'

const AccountEmailprefrence = () => {
    const [cardReminders, setCardReminders] = useState<boolean>(true);
    const [eventReminders, setEventReminders] = useState<boolean>(true);
    const [paidCardUpdates, setPaidCardUpdates] = useState<boolean>(true);
    const [marketingEmails, setMarketingEmails] = useState<boolean>(false);
    const handleUpdatePreferences = () => {
        console.log({
          cardReminders,
          eventReminders,
          paidCardUpdates,
          marketingEmails,
        });
        alert("Preferences updated!");
      };
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold text-center mb-4">Email Preferences</h2>

    <div className="space-y-4">
      {/* Card Reminders */}
      <div className="flex items-center justify-between">
        <label htmlFor="card-reminders" className="text-sm font-medium">Card Reminders</label>
        <input
          type="checkbox"
          id="card-reminders"
          checked={cardReminders}
          onChange={() => setCardReminders(!cardReminders)}
          className="toggle toggle-primary"
        />
      </div>
      <p className="text-xs text-gray-500 pl-4">
        Receive specific emails about the cards you’ve created, e.g., a reminder to finish a started card
      </p>

      {/* Event Reminders */}
      <div className="flex items-center justify-between">
        <label htmlFor="event-reminders" className="text-sm font-medium">Event Reminders</label>
        <input
          type="checkbox"
          id="event-reminders"
          checked={eventReminders}
          onChange={() => setEventReminders(!eventReminders)}
          className="toggle toggle-primary"
        />
      </div>
      <p className="text-xs text-gray-500 pl-4">
        Event reminder emails that you create on our reminders page
      </p>

      {/* Paid Card Updates */}
      <div className="flex items-center justify-between">
        <label htmlFor="paid-updates" className="text-sm font-medium">Paid Card Updates</label>
        <input
          type="checkbox"
          id="paid-updates"
          checked={paidCardUpdates}
          onChange={() => setPaidCardUpdates(!paidCardUpdates)}
          className="toggle toggle-primary"
        />
      </div>
      <p className="text-xs text-gray-500 pl-4">
        Updates about your paid cards, e.g., a warning when it is about to be sent
      </p>

      {/* Marketing Emails */}
      <div className="flex items-center justify-between">
        <label htmlFor="marketing-emails" className="text-sm font-medium">Marketing Emails and Discounts</label>
        <input
          type="checkbox"
          id="marketing-emails"
          checked={marketingEmails}
          onChange={() => setMarketingEmails(!marketingEmails)}
          className="toggle toggle-primary"
        />
      </div>
      <p className="text-xs text-gray-500 pl-4">
        Occasionally receive emails about our product updates, relevant events, and discounts
      </p>
    </div>

    {/* Informational Section */}
    <div className="bg-blue-100 p-3 mt-4 rounded-md text-sm text-blue-700">
      <p>We will always send you transactional emails related to your purchases, e.g., a receipt, an email when your card is sent, thank you emails received from the recipient.</p>
    </div>

    {/* Update Button */}
    <button
      onClick={handleUpdatePreferences}
      className="w-full mt-6 bg-blue-600 text-black border-2 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
    >
      Update
    </button>
  </div>
  )
}

export default AccountEmailprefrence