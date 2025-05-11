import styled from 'styled-components'
import { Link } from 'react-router-dom'

import variables from '../../styles/variables'

export const Circle = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  width: 64px;
  border-radius: 50%;
  background-color: ${variables.green};
  color: #fff;
  position: fixed;
  font-size: 40px;
  text-decoration: none;
  bottom: 40px;
  right: 40px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    height: calc(64px + 2%);
    width: calc(64px + 1%);
    font-size: 60px;
  }
`
