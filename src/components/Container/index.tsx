import React from "react";
import { Children } from "src/types/children";
import { ContainerWithKeyboard } from "./components/ContainerWithKeyboard";
import { ContainerWithoutKeyboard } from "./components/ContainerWithoutKeyboard";

type ContainerProps = {
  children?: Children;
  hasKeyboard?: boolean;
};

export function Container({ children, hasKeyboard, ...rest }: ContainerProps) {
  if (hasKeyboard) {
    return <ContainerWithKeyboard children={children} {...rest} />;
  }
  return <ContainerWithoutKeyboard children={children} {...rest} />;
}
