import styled, { css } from "styled-components/native";
import { ThemeProps } from "src/theme";

type TextProps = {
  color?:
    | "black"
    | "darkGray"
    | "gray"
    | "blue"
    | "blueHighlight"
    | "red"
    | "alert";
  isBold?: boolean;
  theme: ThemeProps;
};

type TextAttrs = { isBold: boolean; theme: ThemeProps };

export const Text = styled.Text.attrs(({ isBold, theme }: TextAttrs) => ({
  style: {
    fontFamily: isBold ? theme.fontWeights.bold : theme.fontWeights.regular,
  },
}))`
  ${({ color, theme }: TextProps) => css`
    font-size: 12px;
    color: ${theme.colors[color || "black"]};
  `}
`;
