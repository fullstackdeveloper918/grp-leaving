import React from 'react'


const DemoViewCard = ({downloadBoard,excludeDiv}:any) => {
    const messages = [
        {
            imgSrc: "https://media1.giphy.com/media/L2qe789Bpy2IM/giphy.gif",
            text: "Happy Birthday Harry! Wishing you a magical birthday filled with enchanting moments and wizardly wonders! May your day be as extraordinary as a trip to Diagon Alley.",
            sender: "Ron",
        },
        {
            imgSrc: "https://media1.giphy.com/media/RgPoybdZLxxd9ZTFq3/giphy.gif",
            text: "Accio birthday celebration! May your special day be as brilliant as a Lumos charm and as joyful as a Weasley family reunion. Have a magical birthday, Harry!",
            sender: "Lupin",
        },
        {
            text: "Happiest of birthdays to the chosen one! May your year be filled with as much adventure and triumph as a year at Hogwarts. Cheers to another magical journey around the sun!",
            sender: "Fred",
        },
        {
            text: "Happy Birthday, fellow wizard! May your day be filled with laughter, joy, and a touch of magic. Remember, age is just a number, but spells are forever!",
            sender: "Hermione",
        },
        {
            text: "Wishing the Boy Who Lived a spectacular birthday! May your day be as golden as a Snitch and as heartwarming as the friendship in the Gryffindor common room.",
            sender: "Ginny",
        },
    ];

 
    return (
        <div className="bg-blue-900 min-h-screen p-8">
            <div className="text-center bg-black text-white">
                <div className="gap-3">
                    <button className=" " disabled>Add to gift card</button>
                    <button className="btnPrimary" onClick={downloadBoard}>
                        Download Board
                    </button>
                </div>
                <div>
                    <h1 className="text-4xl mt- font-bold mb-4">
                        Happy Birthday Harry! <span role="img" aria-label="party">🥳</span>
                    </h1>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">
                        + Add Message
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-md p-4 text-gray-800"
                    >
                        {msg.imgSrc && (
                            <img
                                src={msg.imgSrc}
                                alt="Birthday image"
                                className="w-full rounded-md mb-4"
                            />
                        )}
                        <p className="text-lg mb-4">{msg.text}</p>
                        <p className="text-right text-sm font-semibold">From {msg.sender}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DemoViewCard;
