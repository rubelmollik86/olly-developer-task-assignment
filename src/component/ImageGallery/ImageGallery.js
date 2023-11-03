import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import DraggableImage from '../DraggableImage/DraggableImage'


const ImageGallery = () => {
  const [images, setImages] = React.useState([
    { id: 1, src: "images/image-1.webp", featured: true },
    { id: 2, src: "images/image-2.webp", featured: false },
    { id: 3, src: "images/image-3.webp", featured: false },
    { id: 4, src: "images/image-4.webp", featured: false },
    { id: 5, src: "images/image-5.webp", featured: false },
    { id: 6, src: "images/image-6.webp", featured: false },
    { id: 7, src: "images/image-7.webp", featured: false },
    { id: 8, src: "images/image-8.webp", featured: false },
    { id: 9, src: "images/image-9.webp", featured: false },
    { id: 11, src: "images/image-10.jpeg", featured: false },
    { id: 11, src: "images/image-11.jpeg", featured: false },
    // Add more image objects
  ]);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedImages = [...images];
    const [movedImage] = reorderedImages.splice(result.source.index, 1);
    reorderedImages.splice(result.destination.index, 0, movedImage);

    setImages(reorderedImages);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="image-gallery" direction="horizontal">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="grid grid-cols-3 gap-4 p-4"
          >
            {images.map((image, index) => (
              <DraggableImage key={image.id} image={image} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default ImageGallery;
