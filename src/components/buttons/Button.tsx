import React, { FC } from "react";
import Button, { ButtonProps } from "@atlaskit/button/new";

const ButtonExample: FC<ButtonProps> = (props) => {
  return <Button {...props}>Default button</Button>;
};

export default ButtonExample;
