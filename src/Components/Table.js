import React,{useState, useEffect} from 'react';
import Square from './Square';
import styled from 'styled-components';

const Table = () => {
    const [table, setTable] = useState([0,0,0, 0,0,0, 0,0,0])
    const [winner, setWinner] = useState([])
    const [last, setLast] = useState(Math.random() > 0.5? 5:3)
    const [displayGameStatus, setDisplayGameStatus] = useState('')
    
    useEffect(()=>{
        //checking winner row and col
        for (let i = 0; i <= 2; i++){
            const idx = (i % 3) * 3 // -> 0,3,6
            //check row
            if ( (table[idx] + table[idx+1] + table[idx+2] )=== 9 || (table[idx] + table[idx+1] + table[idx+2] ) === 15){
                setWinner([idx,idx+1,idx+2])
                gameOver()
            }
            //check col
            if ((table[i] + table[i+3] + table[i+6] )=== 9 || (table[i] + table[i+3] + table[i+6] ) === 15){
                setWinner([i,i+3,i+6])
                gameOver()
            }
        }
        //checking winner diagonal
        if ((table[0] + table[4] + table[8] ) === 15 || (table[0] + table[4] + table[8] ) === 9 ){
            setWinner([0, 4, 8])
            gameOver()
        }
        if ((table[2] + table[4] + table[6] ) === 9 || (table[2] + table[4] + table[6] ) ===15){
            setWinner([2, 4, 6])
            gameOver()
        }
        // check if table completed
        if (table.indexOf(0) === -1){
            gameOver()
        }
    }, [table])

    const gameOver = () => {
        setDisplayGameStatus('Game Over');
        setTimeout(() => {
                setTable([0,0,0,0,0,0,0,0,0]);
                setWinner([])
                setDisplayGameStatus('');
            },2000);
    }

    return (
        <MainTable>
            <H1>Tic Tac Toe</H1>
            <Row>
                <Square number={0} last={[last,setLast]} table={[table,setTable]} winner={winner}/>
                <Square number={1} last={[last,setLast]} table={[table,setTable]} winner={winner}/>
                <Square number={2} last={[last,setLast]} table={[table,setTable]} winner={winner}/>
            </Row>
            <Row>
                <Square number={3} last={[last,setLast]} table={[table,setTable]} winner={winner}/>
                <Square number={4} last={[last,setLast]} table={[table,setTable]} winner={winner}/>
                <Square number={5} last={[last,setLast]} table={[table,setTable]} winner={winner}/>
            </Row>
            <Row>
                <Square number={6} last={[last,setLast]} table={[table,setTable]} winner={winner}/>
                <Square number={7} last={[last,setLast]} table={[table,setTable]} winner={winner}/>
                <Square number={8} last={[last,setLast]} table={[table,setTable]} winner={winner}/>
            </Row>
            <H1>{displayGameStatus}</H1>
        </MainTable>
    )
}

export default Table;

const MainTable = styled('div')`
  margin: 1em;
  display: inline-block;
`

const Row = styled('div')`
  display: flex;
  border: solid;
  border-width: 0px;
`

const H1 = styled('h1')`
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    font-weight: 200;
    font-size: 24px;
    text-transform: uppercase;
    letter-spacing: 5px;
    margin: 1em 0 1em 0;
`