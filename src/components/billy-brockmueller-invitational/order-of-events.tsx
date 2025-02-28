import { GSheetsTable } from "../table"

// const ORDER_OF_EVENTS_SHEET_ID = "1hHV3PcK2PRhJK40xlhsF4u1aTzTSgyAnAfxKug4NdR0";
const ORDER_OF_EVENTS_SHEET_ID = "1hHV3PcK2PRhJK40xlhsF4u1aTzTSgyAnAfxKug4NdR0";
const ORDER_OF_EVENTS_SHEET_NAME = "Indoor Schedule";

const OrderOfEvents = () => GSheetsTable({
    sheetId: ORDER_OF_EVENTS_SHEET_ID,
    range: ORDER_OF_EVENTS_SHEET_NAME,
    fontsize: 12,
    padding: 4,
});

export default OrderOfEvents
