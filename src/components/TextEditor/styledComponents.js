import styled from 'styled-components'

export const Container = styled.div`
  background-color: #1b1c22;
  color: #ffff;
`
export const ContainerBlack = styled.div`
  background-color: #1b1c22;
`
export const Heading = styled.h1`
  color: #ffff;
`
export const Image = styled.img`
  height: 100%;
`
export const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => props.color};
`
export const TextArea = styled.textarea`
  color: #1b1c22;
  font-weight: ${props => props.fontWeight};
  font-style: ${props => props.fontStyle};
  text-decoration: ${props => props.textDecoration};
`
export const UnOrderList = styled.ul`
  list-style-type: none;
`
export const UnderlineButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => props.color};
`
export const ItalicButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => props.color};
`
