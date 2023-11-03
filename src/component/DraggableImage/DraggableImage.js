// src/components/DraggableImage.js
import React from "react";
import { Draggable } from "react-beautiful-dnd";

const DraggableImage = ({ image, index }) => {
  return (
    <Draggable draggableId={image.id.toString()} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <img
            src={image.src}
            alt={`DraggableImage ${image.id}`}
            className={`w-full ${
              image.featured ? "border-2 border-blue-500" : ""
            }`}
          />
        </div>
      )}
    </Draggable>
  );
};

export default DraggableImage;
