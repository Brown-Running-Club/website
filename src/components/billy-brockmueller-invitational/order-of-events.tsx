import { GSheetsTable } from "../table"

const ORDER_OF_EVENTS_SHEET_ID = "1l2xNdYDhPGymM981DcrBkpUcrMMqUi9Fh8OFEaoqXho";
const ORDER_OF_EVENTS_SHEET_NAME = "Schedule";

const OrderOfEvents = () => GSheetsTable(ORDER_OF_EVENTS_SHEET_ID, ORDER_OF_EVENTS_SHEET_NAME);

export default OrderOfEvents