import styled from 'styled-components'
import variables from '../../styles/variables'

export const Card = styled.div`
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
`

export const Title = styled.h3`
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: bold;
`

export const Tag = styled.span`
  display: inline-block;
  padding: 4px 8px;
  margin-right: 16px;
  font-size: 10px;
  border-radius: 8px;
  font-weight: bold;
  color: #fff;
  background-color: #e1a32a;
`

export const Description = styled.textarea`
  display: block;
  width: 100%;
  margin: 16px 0;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  resize: none;
  border: none;
  background: transparent;
  color: #8b8b8b;
`

export const ActionBar = styled.div`
  border-top: 1px solid rgba(0,0,0,0.1);
  padding-top: 16px;
`

export const Button = styled.button`
  padding: 8px 12px;
  margin-right: 8px;
  font-weight: bold;
  font-size: 12px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  color: #fff;
`

export const SaveButton = styled(Button)`
  background-color: ${variables.green};
`

export const CancelButton = styled(Button)`
  background-color: ${variables.red};
`
