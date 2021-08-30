import styled, { css } from "styled-components/native";
import { theme, ThemeProps } from "src/theme";
import { ColorType } from "src/@types/color";

function fontSize(h1, h2, h3, h4, caption) {
  const params = { h1, h2, h3, h4, caption };
  const stringKeys = Object.keys(params);
  const Paramsvalues = Object.values(params);
  const indexValue = Paramsvalues.findIndex((el) => el === true);
  const choosedValue = stringKeys[indexValue];
  return `font-size: ${
    choosedValue ? theme.fontSizes[choosedValue] : theme.fontSizes["body"]
  }`;
}

type TextProps = {
  color?: ColorType;
  isBold?: boolean;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  caption?: boolean;
  theme: ThemeProps;
};

type TextAttrs = { isBold: boolean; theme: ThemeProps };

export const Text = styled.Text.attrs(({ isBold, theme }: TextAttrs) => ({
  style: {
    fontFamily: isBold ? theme.fontWeights.bold : theme.fontWeights.regular,
  },
}))`
  ${({ color, theme, h1, h2, h3, h4, caption, center }: TextProps) => css`
    color: ${theme.colors[color || "primary"]};
    text-align: ${center ? "center" : "left"};
  `}
  ${({ h1, h2, h3, h4, caption }) => fontSize(h1, h2, h3, h4, caption)}
`;
