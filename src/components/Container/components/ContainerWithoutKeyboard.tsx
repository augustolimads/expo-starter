import React from "react";
import * as S from "../styles";
import { ContainerInsideProps } from "./ContainerInsideProps.type";

export function ContainerWithoutKeyboard({
  children,
  ...rest
}: ContainerInsideProps) {
  return <S.SafeArea {...rest}>{children}</S.SafeArea>;
}
