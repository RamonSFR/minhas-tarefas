import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`

export const Titulo = styled.h2`
  font-size: 18px;
  margin: 40px 0;
  text-decoration: italic;
  font-weight: bold;
`

export const Campo = styled.input`
  width: 100%;
  border-radius: 8px;
  padding: 8px;
  font-weight: bold;
  background-color: #fff;
  border-color: #666666;
`

export const Botao = styled.button`
  padding: 6px 12px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 8px;
  margin-right: 8px;
  border: none;
  color: ${variaveis.defaultWhite};
  background-color: ${variaveis.darkBlue};
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.success};
`

export default EstiloGlobal
