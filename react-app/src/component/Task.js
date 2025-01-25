import React from "react";
import { useState } from "react";
export default function Task() {
    const [car, setCar] = useState("");
    const [modle, setModle] = useState("");
    const [year, setYear] = useState(0);
    const [data, setData] = useState([
        {
            car: 'Kia',
            modle: 'niro',
            year: 2022,
        },
        {
            car: 'marcedess',
            modle: 'benz',
            year: '2025',
        },
        {
            car: 'bmw',
            modle: 'x6',
            year: '2023',
        },
        {
            car: 'audi',
            modle: 'a8',
            year: '2024',
        }
    ]);
    const addCar = (e) => {
        e.preventDefault();
        setData([...data, { car, modle, year }]);
        setCar("");
        setModle("");
        setYear(0);
    };
    const deleteCar=(index)=>{
        const newData = data.filter((_, i) => i !== index);
        setData(newData);
    }
    
    return (
        <>
        <form onSubmit={event => {
            event.preventDefault();
            setData([...data, { car, modle, year }]);
            setCar("");
            setModle("");
            setYear(0);
        }}>
        <input type="text" placeholder="Car" value={car} onChange={(e) => setCar(e.target.value)} />
        <input type="text" placeholder="Modle" value={modle} onChange={(e) => setModle(e.target.value)} />
        <input type="number" placeholder="Year" value={year} onChange={(e) => setYear(Number(e.target.value))} />
        <button type="sumbit">ADD</button>
    </form>

            <table>
                <thead>
                    <tr>
                        <th>Car</th>
                        <th>Modle</th>
                        <th>Year</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.car}</td>
                            <td>{item.modle}</td>
                            <td>{item.year}</td>
                            <td><button onClick={() => deleteCar(index)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}