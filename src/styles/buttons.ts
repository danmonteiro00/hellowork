import styled from 'styled-components';
import { IProps } from './types';

export const Button = styled.button<IProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px;
  gap: 14px;
  border-radius: 70px;
  border: none;
  font-family: Roboto 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  box-shadow: 1px 2px 12px -4px rgba(132, 136, 147, 0.53);
  width: 472px;

  ${(props) => {
    switch (props.variant) {
      case 'primary':
        return `
          background: ${props.theme.colors.blue};
          color: ${props.theme.colors.white};
        `;
      case 'light':
        return `
          background: ${props.theme.colors.white};
          color: ${props.theme.colors.blue};
          `;
    }
  }}
`;
