import { Link } from 'react-router-dom'
import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Circulo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  width: 64px;
  bottom: 40px;
  right: 40px;
  font-size: 40px;
  border-radius: 50%;
  position: fixed;
  text-decoration: none;
  background-color: ${variaveis.success};
  color: ${variaveis.defaultWhite};
`
