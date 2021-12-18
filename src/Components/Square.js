import {ReactComponent as Circle} from "../img/circle.svg";
import {ReactComponent as X} from '../img/x.svg';
import React from 'react';
import styled from 'styled-components';

const Square = (props) => {
    const number = props.number
    const [last, setLast] = props.last
    const [table, setTable] = props.table
    const winner = props.winner

    const Image = props => {
        if (props.tableN === 5) {
            return <X fill={winner.indexOf(number) !== -1? '#64d369':"#6e6e6e"} width="100%" height="100%"/>
        } else if ( props.tableN === 3 ){
            return <Circle fill={winner.indexOf(number) !== -1? '#64d369':"#6e6e6e"} width="100%" height="100%"/>
        } else {
         return <img/>
        }
    }
    
    return (
        <Block onClick={() => {
            if (table[number] === 0 && winner.length === 0) {
            setTable(( () => {
                let newTable = [...table];
                let newLast = last === 3? 5:3
                newTable[number] = newLast
                setLast(newLast)
                return newTable
            })())}
            }}>
            <Image tableN={table[number]}/> 
        </Block>
    )
}

export default Square;

const Block = styled('div')`
  padding: 9px;
  border: solid;
  border-width: 0.5px;
  background: #efefef;
  border-color: #e1e1e1;
  width: 5em;
  height: 5em;
`
