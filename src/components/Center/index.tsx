import React from "react";
import { Children } from "src/types/children";
import * as S from "./styles";

type CenterProps = { children: Children };

export const Center = ({ children }: CenterProps) => {
  return <S.Container>{children}</S.Container>;
};
