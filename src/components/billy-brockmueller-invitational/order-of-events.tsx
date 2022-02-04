import { useState, useEffect } from "react";
import { Table, tableFromSheet } from "../table"

const ORDER_OF_EVENTS_SHEET_ID = "1l2xNdYDhPGymM981DcrBkpUcrMMqUi9Fh8OFEaoqXho";
const ORDER_OF_EVENTS_SHEET_NAME = "Schedule";

const OrderOfEvents = () => {
    const [schedule, setSchedule] = useState<JSX.Element | undefined>(undefined);

    useEffect(() => {
        if (schedule === undefined) {
            tableFromSheet(ORDER_OF_EVENTS_SHEET_ID, ORDER_OF_EVENTS_SHEET_NAME).then(setSchedule)
        }
    })

    return schedule ?? Table({ header: [], body: [] });
}

export default OrderOfEvents