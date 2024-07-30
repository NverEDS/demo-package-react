import React, { FC } from "react";

import LinkIcon from "@atlaskit/icon/glyph/link";

import Button, { ButtonProps } from "@atlaskit/button/new";

const ButtonIconBeforeSizeExample: FC<ButtonProps> = (props) => {
  return (
    <Button
      iconBefore={(iconProps) => <LinkIcon {...iconProps} size="small" />}
      {...props}
    >
      Icon with size override
    </Button>
  );
};

export default ButtonIconBeforeSizeExample;
