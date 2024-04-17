import { GSheetsTable } from "../table"

const ORDER_OF_EVENTS_SHEET_ID = "1l2xNdYDhPGymM981DcrBkpUcrMMqUi9Fh8OFEaoqXho";
// const ORDER_OF_EVENTS_SHEET_ID = "1FlHkAbPRTOYWFypzAnPipNlUgXh8FvXTOzxOqVC70fg";
const ORDER_OF_EVENTS_SHEET_NAME = "Outdoor Schedule";

const OrderOfEvents = () => GSheetsTable({
    sheetId: ORDER_OF_EVENTS_SHEET_ID,
    range: ORDER_OF_EVENTS_SHEET_NAME,
    fontsize: 12,
    padding: 4,
});

export default OrderOfEvents
