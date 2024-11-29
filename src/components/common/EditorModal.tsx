"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Stage,
  Layer,
  Image as KonvaImage,
  Transformer,
  Text as KonvaText,
  Rect,
} from "react-konva";
// import { useNavigate } from "react-router-dom";

const TENOR_API_KEY = "AIzaSyDtjlCWbN7dRP6RUgfgbnzDtmSaK65zaBU";

// Define types for images, gifs, and stickers
interface ImageProps {
  x: number;
  y: number;
  width: number;
  height: number;
  src: string;
  id: string;
  rotation?: number;
  type: "image" | "gif" | "sticker";
}

const ImageComponent: React.FC<{
  shapeProps: ImageProps;
  isSelected: boolean;
  onSelect: () => void;
  onChange: (newAttrs: ImageProps) => void;
}> = ({ shapeProps, isSelected, onSelect, onChange }) => {
  const shapeRef = useRef<any>(null);
  const trRef = useRef<any>(null);
  const [imageObj, setImageObj] = useState<HTMLImageElement | null>(null);

  useEffect(() => {
    const img = new window.Image();
    img.src = shapeProps.src; // Load the image from the provided src
    img.onload = () => {
      setImageObj(img); // Set the image to state when it is loaded
    };
  }, [shapeProps.src]);

  useEffect(() => {
    if (isSelected) {
      trRef.current?.nodes([shapeRef.current!]);
      trRef.current?.getLayer().batchDraw();
    }
  }, [isSelected]);

  const handleDragEnd = (e: any) => {
    onChange({
      ...shapeProps,
      x: e.target.x(),
      y: e.target.y(),
    });
  };

  const handleTransformEnd = (e: any) => {
    const node = shapeRef.current;
    const scaleX = node.scaleX();
    const scaleY = node.scaleY();

    // Reset scale
    node.scaleX(1);
    node.scaleY(1);

    onChange({
      ...shapeProps,
      width: Math.max(5, node.width() * scaleX),
      height: Math.max(5, node.height() * scaleY),
      rotation: node.rotation(), // Get rotation angle
    });
  };

  return (
    <>
      {isSelected && (
        <Rect
          x={shapeProps.x}
          y={shapeProps.y}
          width={shapeProps.width}
          height={shapeProps.height}
          stroke="blue"
          strokeWidth={4}
          listening={false}
        />
      )}
      {imageObj && (
        <KonvaImage
          ref={shapeRef}
          image={imageObj} // Pass the loaded image
          {...shapeProps}
          draggable
          onClick={onSelect}
          onTap={onSelect}
          onDragEnd={handleDragEnd}
          onTransformEnd={handleTransformEnd}
        />
      )}
      {isSelected && (
        <Transformer
          ref={trRef}
          flipEnabled={false}
          boundBoxFunc={(oldBox: any, newBox: any) => {
            if (Math.abs(newBox.width) < 5 || Math.abs(newBox.height) < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  );
};

const EditorModal: React.FC = () => {
  const [images, setImages] = useState<ImageProps[]>([]);
  const [thumbnails, setThumbnails] = useState<{ id: string; src: string }[]>(
    []
  );
  const [selectedImageId, setSelectedImageId] = useState<string | null>(null);
  const [texts, setTexts] = useState<
    {
      id: string;
      text: string;
      x: number;
      y: number;
      fontSize: number;
      fontFamily: string;
      fill: string;
    }[]
  >([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [gifs, setGifs] = useState<string[]>([]); // State to store GIF URLs
  const [stickers, setStickers] = useState<string[]>([]); // State to store Sticker URLs
  const [searchTerm, setSearchTerm] = useState<string>(""); // State to store search term for Tenor API
  const [currentText, setCurrentText] = useState<string>("");
  const [textStyles, setTextStyles] = useState({
    fontSize: 20,
    fontFamily: "Arial",
    color: "black",
  });
  const [isAddingText, setIsAddingText] = useState(false); // Added state for text addition mode
  // const navigate = useNavigate();
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  // Fetch GIFs from Tenor based on the search term
  const handleButtonClick = () => {
    openModal(); // Open modal
    setIsAddingText(true); // Set text adding to true
  };
  useEffect(() => {
    if (searchTerm) {
      fetch(
        `https://api.tenor.com/v1/search?q=${searchTerm}&key=${TENOR_API_KEY}&limit=5`
      )
        .then((response) => response.json())
        .then((data) => {
          const gifUrls = data.results.map(
            (result: any) => result.media[0].gif.url
          );
          setGifs(gifUrls);
        })
        .catch((err) => console.error(err));
    }
  }, [searchTerm]);

  // Handle image, GIF, and sticker uploads
  const handleMediaUpload = (
    files: FileList,
    type: "image" | "gif" | "sticker"
  ) => {
    if (files) {
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const img = new window.Image();
          img.src = reader.result as string;
          img.onload = () => {
            const newId = `${type}${thumbnails.length + 1}`;
            setThumbnails((prev) => [...prev, { id: newId, src: img.src }]);

            const newMedia: ImageProps = {
              x: 100,
              y: 100,
              width: 200,
              height: 200,
              src: img.src,
              id: newId,
              type: type,
              rotation: 0,
            };

            setImages((prevImages) => [...prevImages, newMedia]);
          };
        };
        reader.readAsDataURL(file);
      });
    }
  };

  // Add selected GIF or Sticker to the editor
  const handleSelectGifOrSticker = (url: string, type: "gif" | "sticker") => {
    const newId = `${type}${images.length + 1}`;
    const newMedia: ImageProps = {
      x: 100,
      y: 100,
      width: 200,
      height: 200,
      src: url,
      id: newId,
      type: type,
      rotation: 0,
    };
    setImages((prevImages) => [...prevImages, newMedia]);
  };

  // Handle adding text to the canvas
  const handleAddText = () => {
    const newText = {
      id: `text${texts.length + 1}`,
      text: currentText,
      x: 100, // Initial position
      y: 100, // Initial position
      fontSize: textStyles.fontSize,
      fontFamily: textStyles.fontFamily,
      fill: textStyles.color,
    };
    setTexts((prevTexts) => [...prevTexts, newText]);
    setCurrentText(""); // Clear the input field
    setIsAddingText(false); // Exit text adding mode
    closeModal()
  };

  const handleCartClick = () => {
    //   navigate("/cart", {
    //     state: {
    //       images: images.map((img) => ({
    //         id: img.id,
    //         src: img.src,
    //         width: img.width,
    //         height: img.height,
    //         rotation: img.rotation,
    //         type: img.type, // Include type for media
    //       })),
    //       texts: texts, // Include the text styles in the cart
    //     },
    //   });
  };

  const handleFontSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const size = parseInt(e.target.value);
    setTextStyles((prevStyles) => ({
      ...prevStyles,
      fontSize: size,
    }));
  };

  const handleFontFamilyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTextStyles((prevStyles) => ({
      ...prevStyles,
      fontFamily: e.target.value,
    }));
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextStyles((prevStyles) => ({
      ...prevStyles,
      color: e.target.value,
    }));
  };
  const stageRef = useRef<any>(null);
  const handleDownloadClick = () => {
    // When the download button is clicked, use Konva's toDataURL method
    if (stageRef.current) {
      // Capture the current stage as a base64-encoded PNG image
      const uri = stageRef.current.toDataURL();

      // Create a temporary download link
      const link = document.createElement("a");
      link.href = uri; // Set the image data as the link's href
      link.download = "canvas_image.png"; // Set the name of the downloaded file
      link.click(); // Trigger the download
    }
  };
  return (
    <div className="editor_app">
      {/* Left Section (Editor Canvas) */}

      {/* Right Section (Options and Thumbnails) */}
      <div className="editor_option">
        {/* Image Upload */}
        <div className="search_input">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleMediaUpload(e.target.files!, "image")}
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

        {/* GIFs and Stickers Search */}
        <div className="text_design">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search GIFs or Stickers"
            style={{ padding: "10px", width: "100%" }}
          />
          <div>
            {gifs.length > 0 && (
              <div>
                <h4>GIFs</h4>
                {gifs.map((gif, index) => (
                  <img
                    key={index}
                    src={gif}
                    alt="gif"
                    style={{ width: "50px", cursor: "pointer" }}
                    onClick={() => handleSelectGifOrSticker(gif, "gif")}
                  />
                ))}
              </div>
            )}
            {stickers.length > 0 && (
              <div>
                <h4>Stickers</h4>
                {stickers.map((sticker, index) => (
                  <img
                    key={index}
                    src={sticker}
                    alt="sticker"
                    style={{ width: "50px", cursor: "pointer" }}
                    onClick={() => handleSelectGifOrSticker(sticker, "sticker")}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Text Style Controls */}
        {/* {isAddingText&&
          <div> 
            <div>
              <label>Font Size:</label>
              <input
                type="number"
                value={textStyles.fontSize}
                onChange={handleFontSizeChange}
                style={{ marginLeft: "10px", padding: "5px", width: "60px" }}
              />
            </div>
            <div>
              <label>Font Family:</label>
              <select
                value={textStyles.fontFamily}
                onChange={handleFontFamilyChange}
                style={{ marginLeft: "10px", padding: "5px" }}
              >
                <option value="Arial">Arial</option>
                <option value="Verdana">Verdana</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Courier New">Courier New</option>
              </select>
            </div>
            <div>
              <label>Text Color:</label>
              <input
                type="color"
                value={textStyles.color}
                onChange={handleColorChange}
                style={{ marginLeft: "10px" }}
              />
            </div>
          </div>} */}

        {/* Add Text Section */}
        <div>
          <button
            onClick={handleButtonClick}
            style={{
              padding: "10px",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "4px",
            }}
          >
            Add Text
          </button>

          {/* {isAddingText && (
              <div>
                <input
                  type="text"
                  value={currentText}
                  onChange={(e) => setCurrentText(e.target.value)}
                  placeholder="Enter text"
                  style={{ padding: "5px", width: "200px" }}
                />
                <button
                  onClick={handleAddText}
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "#28a745",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    marginLeft: "10px",
                  }}
                >
                  Add Text
                </button>
              </div>
            )} */}
        </div>

        {/* Add to Cart Button */}
        {/* <div style={{ textAlign: "center"}}>
            <button
              onClick={handleCartClick}
              className="add_btn"
            >
              Add
            </button>
          </div> */}
        <div style={{ textAlign: "center" }}>
          <button
            onClick={handleDownloadClick}
            className="add_btn"

            //   style={{
            //     padding: "10px 20px",
            //     backgroundColor: "#007bff",
            //     color: "white",
            //     border: "none",
            //     borderRadius: "4px",
            //   }}
          >
            Add All Content
          </button>
        </div>
      </div>

      <div className="editoe_tab">
        <Stage width={1230} height={600} ref={stageRef}>
          <Layer>
            {images.map((image) => (
              <ImageComponent
                key={image.id}
                shapeProps={image}
                isSelected={image.id === selectedImageId}
                onSelect={() => setSelectedImageId(image.id)}
                onChange={(newAttrs) => {
                  setImages((prevImages) =>
                    prevImages.map((img) =>
                      img.id === image.id ? { ...img, ...newAttrs } : img
                    )
                  );
                }}
              />
            ))}
            {texts.map((text) => (
              <KonvaText
                key={text.id}
                text={text.text}
                x={text.x}
                y={text.y}
                fontSize={text.fontSize}
                fontFamily={text.fontFamily}
                fill={text.fill}
                draggable
                onDragEnd={(e) => {
                  setTexts((prevTexts) =>
                    prevTexts.map((t) =>
                      t.id === text.id
                        ? { ...t, x: e.target.x(), y: e.target.y() }
                        : t
                    )
                  );
                }}
              />
            ))}
          </Layer>
        </Stage>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-md shadow-lg max-w-sm w-full relative">
            {/* Top-left Cancel Button */}
            <h2 className="text-lg font-semibold mb-4 text-center text-gray-800">
              Add to Gift Card
            </h2>

            <button
              className="absolute top-4 right-4 bg-gray-200 text-gray-700 px-3 py-1 rounded-md hover:bg-gray-300 focus:outline-none"
              onClick={closeModal}
            >
              X
            </button>

            {/* Form Controls */}
            <div className="space-y-4">
              <div className="flex justify-between">
                <div className="w-full mr-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Font Size:
                  </label>
                  <input
                    type="number"
                    value={textStyles.fontSize}
                    onChange={handleFontSizeChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    style={{ maxWidth: "100px" }}
                  />
                </div>

                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Font Family:
                  </label>
                  <select
                    value={textStyles.fontFamily}
                    onChange={handleFontFamilyChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="Arial">Arial</option>
                    <option value="Verdana">Verdana</option>
                    <option value="Times New Roman">Times New Roman</option>
                    <option value="Courier New">Courier New</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-between">
                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Text Color:
                  </label>
                  <input
                    type="color"
                    value={textStyles.color}
                    onChange={handleColorChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
                    style={{ maxWidth: "60px" }}
                  />
                </div>
              </div>

              {/* Text Input and Add Button */}
              <div className="flex items-center space-x-2 mt-4">
                <input
                  type="textarea"
                  value={currentText}
                  onChange={(e) => setCurrentText(e.target.value)}
                  placeholder="Enter text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="modal-btn">

                <button
                  onClick={handleAddText}
                  className="bg-green-500 text-white bg-blueBg d-hide-btn px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none"
                >
                  Add Text
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditorModal;
