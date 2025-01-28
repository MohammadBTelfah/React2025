import React from "react";
import { useState } from "react";
import './cards.css'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function Task2() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [image, setImage] = useState("");
    const [price, setPrice] = useState(0);
    const [editIndex, setEditIndex] = useState(null);
    const [paragraph, setParagraph] = useState("");
    const [card, setCard] = useState([
      {
          image: "https://www.w3schools.com/w3images/lights.jpg",
          price: 100,
          paragraph: "Admire the shimmering aurora borealis dancing across the Arctic night sky in a spectacular light show",
      },
      {
          image: "https://www.w3schools.com/w3images/nature.jpg",
          price: 200,
          paragraph: "Wander through sun-dappled forests where ancient trees whisper secrets of the wilderness.",
      },
      {
          image: "https://www.w3schools.com/w3images/fjords.jpg",
          price: 300,
          paragraph: "Conquer pristine alpine slopes where powdery snow blankets majestic mountain peaks.",
      },
      {
          image: "https://www.w3schools.com/w3images/mountains.jpg",
          price: 400,
          paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
          image: "https://www.w3schools.com/w3images/mountains.jpg",
          price: 500,
          paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
          image: "https://www.w3schools.com/w3images/mountains.jpg",
          price: 600,
          paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
          image: "https://www.w3schools.com/w3images/mountains.jpg",
          price: 700,
          paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
          image: "https://www.w3schools.com/w3images/mountains.jpg",
          price: 800,
          paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
          image: "https://www.w3schools.com/w3images/mountains.jpg",
          price: 900,
          paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
          image: "https://www.w3schools.com/w3images/mountains.jpg",
          price: 1000,
          paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
          image: "https://www.w3schools.com/w3images/mountains.jpg",
          price: 1100,
          paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
          image: "https://www.w3schools.com/w3images/mountains.jpg",
          price: 1200,
          paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      }
  ]);
    const handleDelete = (index) => {
        const newCard = card.filter((_, i) => i !== index);
        setCard(newCard); 
    };

    const editRow = (index) => {
        handleOpen();
        setEditIndex(index);
        const rowToEdit = card[index];
        setImage(rowToEdit.image);
        setPrice(rowToEdit.price);
        setParagraph(rowToEdit.paragraph);
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        const updatedCards = card.map((item, i) =>
            i === editIndex ? { ...item, image, price, paragraph } : item
        );
        setCard(updatedCards);
        setImage("");
        setPrice(0);
        setParagraph("");
        setEditIndex(null);
        handleClose();
    };

    return (
        <>
            <div className="card-container">
                {card.map((item, index) => (
                    <div key={index} className="card">
                        <img src={item.image} alt="card" />
                        <h3>Price: ${item.price}</h3>
                        <p>{item.paragraph}</p>
                        <button
                            onClick={() => handleDelete(index)}
                            className="delete-button"
                        >
                            Delete
                        </button>
                        <button
                            onClick={() => editRow(index)}
                            className="update-button"
                        >
                            Update
                        </button>
                    </div>
                ))}
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit Card
                    </Typography>
                    <form onSubmit={handleUpdate}>
                        <div>
                            <input
                                type="text"
                                placeholder="Image URL"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                            />
                            <input
                                type="number"
                                placeholder="Price"
                                value={price}
                                onChange={(e) => setPrice(Number(e.target.value))} // Convert to number
                            />
                            <input
                                type="text"
                                placeholder="Paragraph"
                                value={paragraph}
                                onChange={(e) => setParagraph(e.target.value)}
                            />
                            <button type="submit">Update Card</button>
                        </div>
                    </form>
                </Box>
            </Modal>
        </>
    );
}