import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [reservedNumbers, setReservedNumbers] = useState([]);

    const handleReserve = (number) => {
        // Implement logic to reserve a number
        // Update reservedNumbers state
    };

    return (
        <div className="container">
            <h1>Rifa Inteligente</h1>
            <input
                type="text"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Telefone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <button onClick={() => handleReserve(1)}>Reservar Número 1</button>
            {/* Render other numbers and reservation buttons */}
            <table>
                <thead>
                    <tr>
                        <th>Número da Rifa</th>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Reservado</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Map through reservedNumbers and render rows */}
                </tbody>
            </table>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
