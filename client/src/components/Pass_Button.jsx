import React, { useState } from 'react';
const Pass_input = () => {
    const [text, setText] = useState('');
    const handleChange = (event) => {
        setText(event.target.value);
    };
    return (
        <input
            type="password"
            value={text}
            onChange={handleChange}
        />
    );
};

export default Pass_input;