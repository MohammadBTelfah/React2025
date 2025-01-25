import React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { colors } from '@mui/material';
import './Table.css';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#ffffff', // خلفية بيضاء
    border: '2px solid #000',
    boxShadow: 24,
    color: '#000000', // نص أسود
    p: 4,
};
export default function Table() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);  
    const [userName, setUserName] = useState('');
    const [Age, setAge] = useState(0);
    const [address, setAddress] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const [tableData, setTableData] = useState([
        {
            name: 'ali',
            age: 22,
            address: 'irbid',
        },
        {
            name: 'mohammed',
            age: 23,
            address: 'jarash',
        },
        {
            name: 'ghaith',
            age: 21,
            address: 'amman',
        },
        {
            name: 'ahmad',
            age: 27,
            address: 'zarqa',
        }
    ]);
const deleteRow = (index) => {
    const newData = tableData.filter((_, i) => i !== index);
    setTableData(newData);
}
const editRow = (index) => {
    handleOpen();
    setEditIndex(index);
    const rowtoedit = tableData[index];
    console.log(rowtoedit);
    setUserName(rowtoedit.name);
    setAge(rowtoedit.age);
    setAddress(rowtoedit.address);

    
}
    return (
        <div>
            <form onSubmit={(event)=>{
                event.preventDefault();
                
                    setTableData([...tableData, {
                        name: userName,
                        age: Age,
                        address: address
                    }]);
                
                setUserName('');
                    setAge(0);
                    setAddress('');
            }}>
                <input type="text" placeholder="Name"  onChange={(event)=>{
                    setUserName(event.target.value);
                    console.log(userName);
                }} />
                <input type="number" placeholder="Age"  onChange={(event)=>{
                    setAge(event.target.value);
                }} />
                <input type="text" placeholder="Address"  onChange={(event)=>{
                    setAddress(event.target.value);
                }} />
                <button type='submit'>ADD</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>delete</th>
                        <th>update</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.address}</td>
                            <td><button onClick={()=>{deleteRow(index)}}>Delete</button></td>
                            <td><button onClick={()=>{editRow(index)}}>Update</button></td>
                           
                        </tr>
                    ))}
                </tbody>
            </table>
            <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          
          <form onSubmit={(event)=>{
                event.preventDefault();
                if (editIndex !== null) {
                    const updatedData= [...tableData];
                    updatedData[editIndex] = {
                        name: userName,
                        age: Age,
                        address: address
                    };
                    setTableData(updatedData);
                    setEditIndex(null);
                    
                }
                setUserName('');
                    setAge(0);
                    setAddress('');
                    handleClose();
            }}>
                <input type="text" placeholder="Name" value={userName} onChange={(event)=>{
                    setUserName(event.target.value);
                    console.log(userName);
                }} />
                <input type="number" placeholder="Age" value={Age} onChange={(event)=>{
                    setAge(event.target.value);
                }} />
                <input type="text" placeholder="Address" value={address} onChange={(event)=>{
                    setAddress(event.target.value);
                }} />
                <button type='submit'>Update</button>
            </form>
        </Box>
      </Modal>

        </div>
    );
}