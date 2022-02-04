import { GSheetsTable } from "../table"

const ORDER_OF_EVENTS_SHEET_ID = "1l2xNdYDhPGymM981DcrBkpUcrMMqUi9Fh8OFEaoqXho";
const ORDER_OF_EVENTS_SHEET_NAME = "Schedule";

const OrderOfEvents = () => GSheetsTable({
    sheetId: ORDER_OF_EVENTS_SHEET_ID,
    range: ORDER_OF_EVENTS_SHEET_NAME,
    fontsize: 12
});

export default OrderOfEvents