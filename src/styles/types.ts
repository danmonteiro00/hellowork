export interface IThemeProps {
  colors: {
    white: string;
    blue: string;
  },
  fonts: Array<string>;
}

export interface IProps {
  variant?: 'primary' | 'secondary' | 'danger' | 'info' | 'light',
  theme: IThemeProps,
}
