import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const Header = styled.header`
  width: 50%;
  margin: 84px 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Imagem = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-left: 7px;
`

export const Div = styled.div`
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  width: 51%;
  padding: 24px;
  background: #e6e6e6;
  border-radius: 5px;
  border: none;
  font-size: 16px;
`

export const Button = styled.button`
  width: 54%;
  padding: 24px;
  font-weight: 700;
  background-color: #ea4c89;
  color: #fff;
  border: none;
  border-radius: 5px;
  margin: 12px 0 84px;
  cursor: pointer;
  font-size: 16px;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`
