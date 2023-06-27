import {styled} from 'styled-components'

export const Card = styled.li`
  width: 200px;
  height: 280px;
  padding: 20px;
  border: 2px solid rgb(83, 91, 242);
  border-radius: 1rem;
  box-shadow: inset 0px 0px 21px 15px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* gap: 10px; */
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
