import React, { useState } from 'react';
import logo from "./logo.svg";
import ReactJson from "react-json-view";

function parseJson(text) {
    if (!text.trim()) return { json: {}, error: null };
    try {
        return { json: JSON.parse(text), error: null };
    } catch (error) {
        return { json: {}, error: error.message };
    }
}

function JsonParser({ initialInput = '' }) {
    const [input, setInput] = useState(initialInput);
    const [{ json, error }, setParsed] = useState(() => parseJson(initialInput));
    const [displayDataTypes, setDisplayDataTypes] = useState(true);
    const [displayObjectSize, setDisplayObjectSize] = useState(true);
    const [theme, setTheme] = useState('rjv-default');

    const handleChange = (e) => {
        const value = e.target.value;
        setInput(value);
        setParsed(parseJson(value));
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', fontFamily: 'monospace', fontSize: '14px' }}>
            {/* Pasek górny */}
            <div style={{ display: 'flex', alignItems: 'center', padding: '10px', borderBottom: '1px solid #ddd', height:'70px'  }}>
                <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '20px' }} />
                <label style={{ marginRight: '10px' }}>
                    <input
                        type="checkbox"
                        checked={displayDataTypes}
                        onChange={() => setDisplayDataTypes(!displayDataTypes)}
                    />{' '}
                    displayDataTypes
                </label>
                <label style={{ marginRight: '10px' }}>
                    <input
                        type="checkbox"
                        checked={displayObjectSize}
                        onChange={() => setDisplayObjectSize(!displayObjectSize)}
                    />{' '}
                    displayObjectSize
                </label>
                <label style={{ marginRight: '10px' }}>
                    Theme:{' '}
                    <select value={theme} onChange={(e) => setTheme(e.target.value)} style={{ marginLeft: '5px' }}>
                        <option value="rjv-default">Default</option>
                        <option value="monokai">Monokai</option>
                        <option value="ocean">Ocean</option>
                    </select>
                </label>
            </div>
            {/* Obszar główny */}
            <div style={{ display: 'flex', flex: 1, minHeight: 0 }}>
                <textarea
                    style={{ flex: 1, padding: '10px', fontFamily: 'monospace', fontSize: '14px', height: '100%', overflowY: 'auto', boxSizing: 'border-box' }}
                    placeholder="Wklej JSON tutaj..."
                    value={input}
                    onChange={handleChange}
                />
                <div style={{ flex: 1, padding: '10px', backgroundColor: '#f7f7f7', overflow: 'auto', textAlign: 'left', height: '100%', boxSizing: 'border-box' }}>
                    {error && (
                        <div style={{ color: '#b00020', marginBottom: '10px' }}>
                            Niepoprawny JSON: {error}
                        </div>
                    )}
                    <ReactJson
                        src={json}
                        displayDataTypes={displayDataTypes}
                        displayObjectSize={displayObjectSize}
                        theme={theme}
                    />
                </div>
            </div>
        </div>
    );
}

export default JsonParser;
