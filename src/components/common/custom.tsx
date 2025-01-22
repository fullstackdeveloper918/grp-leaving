import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDrag } from "@use-gesture/react";
import { useSpring, animated } from "@react-spring/web";
import "swiper/css";
import "swiper/css/pagination";
import Modal from "react-modal";
import axios from "axios";
const images = [
  "https://groupleavingcards.com/assets/design/617318f94c962c605abdeabb.jpg",
  "https://groupleavingcards.com/assets/design/66bd382d51e4bce9bdd31fc6_sm.avif",
  "https://groupleavingcards.com/assets/design/66e30136ffa5cb04d55d990e_sm.avif",
  "https://groupleavingcards.com/assets/design/6734d2bbe8c991dba26a0288_sm.webp",
  "https://groupleavingcards.com/assets/design/66967675b0d2b479aa568c98_sm.avif",
  "https://groupleavingcards.com/assets/design/66d88499b4fb75024aa2d8de_sm.avif",
];

const Custom: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [gifs, setGifs] = useState<string[]>([]);
  const [gifUrl, setGifUrl] = useState<any>(null);
  const [gifUrls, setGifUrls] = useState<any>([]);
  const [activeSlideIndex, setActiveSlideIndex] = useState<any>(null);
  const [elements, setElements] = useState<any[]>([]); // Store messages and images
  console.log(elements,"elements");
  
  const messageInputRef = useRef<HTMLTextAreaElement>(null);



  useEffect(() => {
    const storedElements = localStorage.getItem("slideElements");
    if (storedElements) {
      setElements(JSON.parse(storedElements));
    }
  }, []);

  // Store elements in localStorage whenever the state changes
  useEffect(() => {
    if (elements.length > 0) {
      localStorage.setItem("slideElements", JSON.stringify(elements));
    }
  }, [elements]);
  const handleAddMessageClick = () => {
    setShowModal(true);
  };
  const closeModal = () => setIsOpen(false);
  console.log(gifUrls,"gifUrls");
  const handleSaveMessage = () => {
    if (activeSlideIndex + 1 === null) {
      alert("No active slide selected!");
      return;
    }

    const newMessage = {
      type: "text",
      content: messageInputRef.current?.value || "Default message",
      slideIndex: activeSlideIndex + 1,
    };

    setElements([...elements, newMessage]); // Add the new message to the state
    setShowModal(false);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (activeSlideIndex !== null) {
          const newImage = {
            type: "image",
            content: reader.result as string,
            slideIndex: activeSlideIndex + 1,
          };

          setElements([...elements, newImage]); // Add uploaded image as a new element
        }
      };
      reader.readAsDataURL(file);
    }
  };
  const defaultTerm = "wave";

  const handleAddGif = (gifUrl: string) => {
    if (activeSlideIndex !== null) {
      const newGif = {
        type: "gif",
        content: gifUrl,
        slideIndex: activeSlideIndex + 1,
      };

      setElements((prevElements) => [...prevElements, newGif]);
    }
  };
  const fetchGifs = async (term: string) => {
    console.log(term, "term");

    try {
      const searchTerm = term || defaultTerm;
      const response = await axios.get(
        "https://tenor.googleapis.com/v2/search",
        {
          params: {
            q: searchTerm,
            key: "AIzaSyBphMbpVXm8Rc9CnWX7W3LuePqIHgSWoDo",
            client_key: "my_test_app",
            limit: 100,
            locale: "en_US",
          },
        }
      );
      console.log(response.data.results, "jgjgj");

      setGifs(
        response.data.results.map((result: any) => result.media_formats.gif.url)
      );
    } catch (error) {
      console.error("Error fetching GIFs:", error);
    }
  };
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm) fetchGifs(searchTerm);
  };
  const openModal = () => {
    setIsOpen(true);
    fetchGifs("trending"); // Fetch trending GIFs initially
  };

  return (
    <div style={styles.container}>
      <button style={styles.button} onClick={handleAddMessageClick}>
        Add Message
      </button>

      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        style={{ marginBottom: "10px" }}
      />
      <button
        onClick={openModal}
        className="px-4 py-2 bg-white border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition"
      >
        Add Gif
      </button>
      {showModal && (
        <div style={styles.modalOverlay} onClick={() => setShowModal(false)}>
          <div
            style={styles.modal}
            onClick={(e) => e.stopPropagation()} // Prevent modal close on inner click
          >
            <textarea
              ref={messageInputRef}
              style={styles.textarea}
              rows={5}
            ></textarea>
            <button style={styles.button} onClick={handleSaveMessage}>
              Save
            </button>
          </div>
        </div>
      )}

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        onSlideChange={({ activeIndex }) => setActiveSlideIndex(activeIndex)}
      >
        <>
          {images.map((image, index) => (
            <SwiperSlide key={index} style={{
              ...styles.swiperSlide,
              ...(activeSlideIndex+1 === index
                ? {
                    transform: "scale(1.6)",
                    backgroundColor: "#000000",
                    zIndex: 9,
                  }
                : {}),
            }}>
              <div style={styles.slideWrapper}>
                <img
                  src={image}
                  alt={`slide-${index}`}
                  style={{ width: "100%", height: "500px" }}
                />
                {elements
                  .filter((el) => el.slideIndex === index) // Only render elements for the current slide
                  .map((el, i) => (
                    <DraggableElement
                      key={i}
                      content={el.content}
                      type={el.type}
                    />
                  ))}
                {/* {renderSlideElements(index)} */}
              </div>
            </SwiperSlide>
          ))}
        </>
      </Swiper>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className="p-4 bg-white rounded-lg shadow-lg max-w-xl mx-auto"
      >
        <h2 className="text-lg font-bold mb-4">Select a GIF</h2>
        <form onSubmit={handleSearch} className="mb-4 flex gap-2">
          <input
            type="text"
            placeholder="Search GIFs"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow px-4 py-2 border rounded-md"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-black border rounded-md hover:bg-blue-700 transition"
          >
            Search
          </button>
        </form>
        <div className="grid grid-cols-2 gap-4 overflow-y-auto max-h-96">
          {gifs.map((gifUrl, index) => (
            <img
              key={index}
              src={gifUrl}
              alt="GIF"
              style={{ width: "80%", height: "80%" }}
              className="rounded-lg cursor-pointer"
              onClick={() => {
                handleAddGif(gifUrl);
                console.log("Selected GIF:", gifUrl); // Handle selected GIF URL
                closeModal();
              }}
              // onClick={() => handleAddElement(gifUrl, "gif") closeModal()}
            />
          ))}
        </div>
        <button
          onClick={closeModal}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default Custom;

const DraggableElement = ({
  content,
  type,
}: {
  content: string;
  type: string;
}) => {
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

  const bind = useDrag((state: any) => {
    api.start({
      x: state.offset[0],
      y: state.offset[1],
    });
  });

  return (
    <animated.div
      {...bind()}
      style={{
        x,
        y,
        position: "absolute",
        cursor: "move",
        zIndex: 10,
        color: "rgb(17, 17, 17)",
        left: "0px",
        right: "0px",
        top: "50%",
        transform: "translate3d(0px, 12px, 0px)",
      }}
    >
      {type == "image"||type =="gif" ? (
        <img
          src={content}
          alt="uploaded"
          style={{ width: "100px", height: "100px" }}
        />
      ) : (
        content
      )}
    </animated.div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Helvetica, Arial, sans-serif",
    backgroundColor: "#eee",
    minHeight: "100vh",
  } as React.CSSProperties,
  button: {
    margin: "10px",
    padding: "10px 15px",
    fontSize: "14px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  } as React.CSSProperties,
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.5)",
    zIndex: 999,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  } as React.CSSProperties,
  modal: {
    background: "#fff",
    padding: "20px",
    border: "1px solid #ccc",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
    display: "flex",
    flexDirection: "column",
  } as React.CSSProperties,
  textarea: {
    width: "100%",
    marginBottom: "10px",
    fontSize: "14px",
    padding: "5px",
  } as React.CSSProperties,
  swiperSlide: {
    textAlign: "center",
    fontSize: "18px",
    background: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative", // Required for Draggable to work
    height: "500px",
    overflow: "hidden",
  } as React.CSSProperties,
  slideWrapper: {
    position: "relative",
    width: "100%",
    height: "100%",
    overflow: "hidden", // Allow draggable elements within bounds
  } as React.CSSProperties,
};
