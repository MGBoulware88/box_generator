import React, {useState} from 'react';
import Box from './boxes';

const BoxGenerator = () => {
    const [boxColor, setBoxColor] = useState('');
    const [boxesGenerated, setBoxesGenerated] = useState([]);
    
    const generateBox = e => {
        e.preventDefault()
        setBoxesGenerated([...boxesGenerated, boxColor]);
        setBoxColor('');
    }

    const boxContainer = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
        marginTop: '1rem'
    };

    return (
        <div>
            <form onSubmit={generateBox}>
                <label htmlFor="boxColor">Color</label>{' '}
                <input type="text" name="boxColor" id="boxColor" value={boxColor} onChange={e => setBoxColor(e.target.value)} />
                <button type="submit" >Add</button>
            </form>
            <div id="boxContainer" style={boxContainer}>
                {boxesGenerated.map((color) => {
                    return <Box thisBoxColor={color}/>
                })}
            </div>
            
        </div>
    )
};

export default BoxGenerator;