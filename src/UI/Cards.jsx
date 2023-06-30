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

  .items-card {
    gap: 10px;
    display: flex;
    align-items: center;
    position: absolute;
    right: 10px;
    top: 10px;
  }

  img {
    overflow: hidden;
    width: 80px;
    height: 80px;
  }

  h3 {
    margin: 10px 0;
  }
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

export const BoxStyled = styled.article`
  width: 500px;
  height: 300px;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: left;

  background-color: #fff;
  color: #242424;
  border: #242424 2px solid;
  box-shadow: 9px 9px 0px -3px rgba(0, 0, 0, 0.9);

  img {
    overflow: hidden;
    width: 80px;
    height: 80px;
    border: #242424 1px solid;
    box-shadow: 9px 9px 0px -5px rgba(0, 0, 0, 0.9);
  }

  h3 {
    margin-left: 10px;
  }

  p {
    font-size: 18px;
    font-weight: 500;
  }
`
