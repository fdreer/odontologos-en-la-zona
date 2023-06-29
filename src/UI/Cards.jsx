import {styled} from 'styled-components'

export const Card = styled.li`
  width: 200px;
  height: 280px;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #fff;
  color: #242424;
  border: #242424 2px solid;
  box-shadow: 9px 9px 0px -3px rgba(0, 0, 0, 0.9);
`

export const ListCards = styled.ul`
  max-width: 970px;
  margin: 0 auto;
  list-style: none;
  display: grid;
  justify-items: center;
  align-items: center;
  align-content: center;

  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));

  padding: 0 20px;
  gap: 10px;
  row-gap: 30px;
`
