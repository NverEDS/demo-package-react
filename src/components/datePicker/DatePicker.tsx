import React, { FC, useState } from "react";
import type { Range } from "react-date-range";
import { DateRangePicker } from "react-date-range";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./styles.css";

type TProps = {
  month: number;
  direction: "horizontal" | "vertical";
};

const DatePicker: FC<TProps> = ({ month = 2, direction }): JSX.Element => {
  const [state, setState] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <div>
      <DateRangePicker
        onChange={(item) => setState([item.selection])}
        showPreview
        moveRangeOnFirstSelection={false}
        months={month}
        ranges={state}
        direction={direction}
        showMonthArrow
      />
    </div>
  );
};

export default DatePicker;
