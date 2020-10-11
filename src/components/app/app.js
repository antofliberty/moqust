import React from "react";

import MqHeader from "../mq-header";

const App = () => {
    return (
        <MqHeader />
        <MqSearchPanel />
        <MqStatusFilter />
        <MqList />

    )
}

export default App;