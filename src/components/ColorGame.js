import React, { useState } from 'react'

const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'pink']

function ColorGame() {
    const [boardColors] = useState(colors);
    const [blocksColors, setBlocksColors] = useState(Array(3).fill(colors));
    const [selectedColor, setSelectedColor] = useState(null);
    const [bets, setBets] = useState(10);

    const handleColorClick = (color) => {
        setSelectedColor(color);
        setBets(bets - 10);
    }

    function getRandomColorBlock() {
        const colorBlocks = colors;

        const color = new Array(1).fill('').map(()=> colorBlocks[Math.floor(Math.random() * colorBlocks.length)])
        return `${color}`
    }

    function generateRandomColorBlock(){
        const blocks = getRandomColorBlock();
        setBlocksColors(blocks);
    }

    /*const handleGenerateBlocks = () =>{
        const newBlockColors = blocksColors.map((blockColors)=>{
            const randomIdx = Math.floor(Math.random() * blockColors.length);
            return blockColors[randomIdx]
        });
        setBlocksColors(newBlockColors);
        setBets(bets - 1)

    }*/


    //function handleGenerateColorBlocks() {
    // if user clicks on a color, store that color
    // if the stored equals the colors on colorBlock, double the bets of player
    // if the store doesn't equal reduce bets by amount of previous bets
    //}

    return (
        <section className='game-container'>
            <h1>Color Game</h1>

            <aside>
                <p>Bets left: {bets} </p>
            </aside>
            <button disabled={!selectedColor} type='button' className='generate-color-block' onClick={generateRandomColorBlock}>Generate Colors</button>

            <article className="game-container__block__container">
                {blocksColors.map((blockColors, blockIdx) => (
                    <div key={blockIdx}>
                        {blockColors.map((color, colorIdx) => (
                            <div key={colorIdx}
                                style={{ backgroundColor: color }}
                                className='game-container__block__container__blocks'></div>
                        ))}
                    </div>
                ))}
            </article>

            <article className="game-board-container">
                <div className='game-board'>
                    {boardColors.map((color, idx) => (
                        <div className="game-board__blocks" key={idx}
                            style={{ backgroundColor: color }}
                            onClick={() => handleColorClick(color)}></div>
                    ))}
                </div>
            </article>

        </section>
    )
}

export default ColorGame


    // TODO: - create 3 blocks that have the same colors as the board
    // - create button that makes the 3 blocks generate their own individual color from the array of color
    // - if the colors on the 3 blocks match the colors that the player bets on the board, multiply bets by 2
    // - if the colors on the 3 blocks dont match, subtract their bets by the number of their previous bets
    // - players can double down on a single color on the board depending on the number of bets they have


/*

 /*useEffect(() => {
        const newColors = boardColors.map(row => row.map(() => getNewColor()));
        setBoardColors(newColors)
    }, []);

    function handleBets() {
        setIsBet(true)
        if(isBet === true){
            setBets(0)
        }
    }
    
    if(bets === 0){
        alert('You have no more bets left!')
        return;
    }
    const generateRandomColorBlocks = () =>{
        const newColorBlocks = randomColorBlocks.map(row => row.map(() => getRandomColorBlocks()));
        setRandomColorBlocks(newColorBlocks)
    }

    const getRandomColorBlocks = () =>{
        const fixedColorBlocks = [
            ...randomColorBlocks[0],
            ...randomColorBlocks[1]
        ];
        return fixedColorBlocks[Math.floor(Math.random() * fixedColorBlocks.length)]
    }*/

/*const handleGenerateRandomColorBlocks = () =>{
    const blockColors = randomColorBlocks;
    const getBlockColors = blockColors[Math.floor(Math.random() * blockColors.length)];
    return getBlockColors
}*/

/*{randomColorBlocks.map((blockRow, blockRowIdx)=>(
                <div key={blockRowIdx} className='blockRow'>
                    {blockRow.map((blockColColor, blockColIdx)=> (
                        <div className="blockCol" style={{backgroundColor: blockColColor}} key={blockColIdx}></div>
                    ))}
                </div>
                    ))}*/

/*<article className="game-container__board">
{boardColors.map((row, rowIdx) => (
<div key={rowIdx} className="row">
{row.map((color, colIdx) => (
    <div style={{ backgroundColor: color }} onClick={handleBets} key={colIdx} className="col"></div>
))}
</div>
))}
</article>*/