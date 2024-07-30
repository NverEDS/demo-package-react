import React, { FC } from "react";

import { ButtonGroup } from "@atlaskit/button";
import Button, { LinkButton, ButtonProps } from "@atlaskit/button/new";

const ButtonSpacingExample = () => {
  return (
    <ButtonGroup>
      <Button appearance="primary">Default</Button>
      <Button appearance="primary" spacing="compact">
        Compact
      </Button>
      <LinkButton href="/" spacing="none" appearance="subtle-link">
        None
      </LinkButton>
    </ButtonGroup>
  );
};

export default ButtonSpacingExample;
