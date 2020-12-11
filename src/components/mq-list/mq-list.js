import React from "react";

import MqListItem from "../mq-list-item"

const MqList = ({ props }) => {
    return (
        <ul>
            <li><MqListItem label="Drink coffee" /></li>
            <li><MqListItem label="Learn react" /></li>
            <li><MqListItem label="Be nice" /></li>
        </ul>
    )
}

export default MqList;