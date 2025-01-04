import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Draggable from "react-draggable";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const EditorCarousel = () => {
  const [messages, setMessages] = useState<{
    id: number;
    text: string;
    x: number;
    y: number;
    slide: number;
    name: string;
    zIndex: number;
    isEditing: boolean;
    imageUrl?: string; // Add field for image URL
  }[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [centerIndex, setCenterIndex] = useState(0);

  const images = [
    "https://groupleavingcards.com/assets/design/617318f94c962c605abdeabb.jpg",
    "https://groupleavingcards.com/assets/design/66bd382d51e4bce9bdd31fc6_sm.avif",
    "https://groupleavingcards.com/assets/design/66e30136ffa5cb04d55d990e_sm.avif",
    "https://groupleavingcards.com/assets/design/6734d2bbe8c991dba26a0288_sm.webp",
    "https://groupleavingcards.com/assets/design/66967675b0d2b479aa568c98_sm.avif",
    "https://groupleavingcards.com/assets/design/66d88499b4fb75024aa2d8de_sm.avif",
  ];

  useEffect(() => {
    const savedMessages = JSON.parse(localStorage.getItem("messages") || "[]");
    setMessages(savedMessages);
  }, []);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    afterChange: (current: number) => setCurrentSlide(current),
    beforeChange: (current: any, next: any) => {
      setCenterIndex(next);
    },
  };

  const addMessage = () => {
    const newMessage = {
      id: messages.length + 1,
      text: "",
      x: 50,
      y: 50,
      slide: currentSlide,
      name: "",
      zIndex: 1000,
      isEditing: true, // Set to true immediately
    };
    setMessages([...messages, newMessage]);
  };

  const saveMessage = (id: number, name: string, text: string, imageUrl?: string) => {
    const updatedMessages = messages.map((msg) =>
      msg.id === id ? { ...msg, name, text, imageUrl, isEditing: false } : msg
    );
    setMessages(updatedMessages);
    localStorage.setItem("messages", JSON.stringify(updatedMessages));
  };

  const handleDoubleClick = (id: number) => {
    const updatedMessages = messages.map((msg) =>
      msg.id === id ? { ...msg, isEditing: true } : msg
    );
    setMessages(updatedMessages);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, messageId: number) => {
    if (e.target.files && e.target.files[0]) {
      const imageUrl = URL.createObjectURL(e.target.files[0]);
      const updatedMessages = messages.map((msg) =>
        msg.id === messageId ? { ...msg, imageUrl } : msg
      );
      setMessages(updatedMessages);
      localStorage.setItem("messages", JSON.stringify(updatedMessages));
    }
  };

  return (
    <div className="slider-container mt-3" style={{ width: "85%", padding: "0px 30px" }}>
      <div className="editor_option mb-3">
        <div>
          <button
            className="add_btn"
            onClick={addMessage}
            style={{
              padding: "10px",
              border: "none",
              borderRadius: "50px",
            }}
          >
            Add Message
          </button>
        </div>

        {/* File Input for Image Upload */}
        <div className="search_input">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageUpload(e, messages[messages.length - 1]?.id || 0)}
            multiple
          />
          <div className="upload_svg">
            <svg
              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mus-vubbuv"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="AddPhotoAlternateIcon"
            >
              <path d="M19 7v2.99s-1.99.01-2 0V7h-3s.01-1.99 0-2h3V2h2v3h3v2zm-3 4V8h-3V5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8zM5 19l3-4 2 3 3-4 4 5z"></path>
            </svg>
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <button
            // onClick={handleDownloadClick}
            className="add_btn"
            style={{
              borderRadius: "40px",
            }}
          >
            Download
          </button>
        </div>
      </div>

      <div style={{ position: "relative", height: "700px" }}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} style={{ position: "relative" }}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                style={{
                  width: "100%",
                  borderRadius: "15px",
                  objectFit: "cover",
                  transition: "transform 0.5s, height 0.5s, margin-top 0.5s",
                  marginTop: index === centerIndex ? "0px" : "66px",
                  transform: index === centerIndex ? "scale(1.1)" : "scale(0.9)",
                  height: index === centerIndex ? "600px" : "500px",
                }}
              />
              {messages
                .filter((message) => message.slide === index)
                .map((message) => (
                  <Draggable
                    key={message.id}
                    defaultPosition={{ x: message.x, y: message.y }}
                    onStop={(e, data) => {
                      const updatedMessages = messages.map((msg) =>
                        msg.id === message.id
                          ? { ...msg, x: data.x, y: data.y }
                          : msg
                      );
                      setMessages(updatedMessages);
                      localStorage.setItem("messages", JSON.stringify(updatedMessages));
                    }}
                  >
                    <div
                      onDoubleClick={() => handleDoubleClick(message.id)}
                      style={{
                        top: `${message.y}px`,
                        left: `${message.x}px`,
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "16px",
                        zIndex: message.zIndex,
                        cursor: "move",
                      }}
                    >
                      <div style={{ position: "relative" }}>
                        <div contentEditable="true" dangerouslySetInnerHTML={{ __html: message.text }}></div>
                        {message.imageUrl && (
                          <img
                            src={message.imageUrl}
                            alt="Uploaded"
                            style={{
                              width: "100px",
                              height: "100px",
                              objectFit: "cover",
                              borderRadius: "5px",
                              marginTop: "10px",
                            }}
                          />
                        )}
                        <br />
                        <span style={{ fontSize: "12px", fontStyle: "italic" }}>{message.name}</span>
                      </div>
                    </div>
                  </Draggable>
                ))}
            </div>
          ))}
        </Slider>

        {messages
          .filter((message) => message.slide === currentSlide && message.isEditing)
          .map((message) => (
            <Draggable
              key={message.id}
              defaultPosition={{ x: message.x, y: message.y }}
              onStop={(e, data) => {
                const updatedMessages = messages.map((msg) =>
                  msg.id === message.id ? { ...msg, x: data.x, y: data.y } : msg
                );
                setMessages(updatedMessages);
                localStorage.setItem("messages", JSON.stringify(updatedMessages));
              }}
            >
              <div
                style={{
                  position: "relative",
                  top: `${message.y}px`,
                  left: `${message.x}px`,
                  padding: "10px",
                  backgroundColor: "rgba(255, 255, 255, 0.7)",
                  borderRadius: "5px",
                  zIndex: message.zIndex,
                  cursor: "move",
                  width: "250px",
                }}
              >
                <div style={{ marginBottom: "10px" }}>
                  <label style={{ fontWeight: "bold", display: "block" }}>Name:</label>
                  <input
                    type="text"
                    value={message.name}
                    onChange={(e) =>
                      setMessages((prev) =>
                        prev.map((msg) =>
                          msg.id === message.id ? { ...msg, name: e.target.value } : msg
                        )
                      )
                    }
                    style={{
                      width: "100%",
                      padding: "5px",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                      backgroundColor: "#f7f7f7",
                    }}
                  />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <label style={{ fontWeight: "bold", display: "block" }}>Message:</label>
                  <ReactQuill
                    value={message.text}
                    onChange={(value) =>
                      setMessages((prev) =>
                        prev.map((msg) =>
                          msg.id === message.id ? { ...msg, text: value } : msg
                        )
                      )
                    }
                    style={{
                      width: "100%",
                      minHeight: "100px",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      backgroundColor: "#f7f7f7",
                    }}
                  />
                </div>

                {/* Image Upload Input */}
                {/* <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, message.id)}
                  style={{
                    width: "100%",
                    padding: "5px",
                    borderRadius: "5px",
                    backgroundColor: "#f7f7f7",
                  }}
                /> */}

                <button
                  onClick={() =>
                    saveMessage(message.id, message.name, message.text, message.imageUrl)
                  }
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "#28a745",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Save Message
                </button>
              </div>
            </Draggable>
          ))}
      </div>
    </div>
  );
};

export default EditorCarousel;
