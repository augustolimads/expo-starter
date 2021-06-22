import React from "react";
import { Children } from "src/@types/children";
import { ThemeProps } from "~/theme";
import * as S from "./Text.styled";

type TextProps = {
  children: Children;
  isBold?: boolean;
  color?:
    | "black"
    | "darkGray"
    | "gray"
    | "blue"
    | "blueHighlight"
    | "red"
    | "alert";
};

export function Caption({ children, isBold, color }: TextProps) {
  return (
    <S.Text color={color} isBold={isBold}>
      {children}
    </S.Text>
  );
}
