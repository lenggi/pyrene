/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-named-default */

// Sort alphabetically to find stuff easily
import { default as BarChartTable } from '../components/BarChartTable/BarChartTable.examples';
import { default as TimeSeriesPlayground } from '../components/TimeSeriesPlayground/TimeSeriesPlayground.examples';

import {
  tableData,
  tableColumns,
  tableDataComparison,
  tableColumnsComparison,
  tableDataUpDown,
  tableColumnsUpDown,
  tableDataSecLabel,
  tableColumnsSecLabel,
} from './tableData';

// Sort alphabetically to find stuff easily
const examples = {
  BarChartTable,
  TimeSeriesPlayground,
};

export default examples;

export const exampleData = {
  tableData: { data: tableData, columns: tableColumns },
  tableDataComparison: { data: tableDataComparison, columns: tableColumnsComparison },
  tableDataUpDown: { data: tableDataUpDown, columns: tableColumnsUpDown },
  tableDataSecLabel: { data: tableDataSecLabel, columns: tableColumnsSecLabel },
};
