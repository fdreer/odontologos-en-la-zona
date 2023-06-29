import {styled} from 'styled-components'

const LoadingSpinner = styled.button`
  height: 40px;
  width: 40px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  border: 2px solid rgba(0, 0, 0, 0.4);
  border-top-color: #fff;
  border-bottom-color: #fff;
  animation: spinner3 800ms ease infinite;
  margin: 0 auto;

  @keyframes spinner3 {
    to {
      transform: rotate(360deg);
    }
  }
`
export default LoadingSpinner
