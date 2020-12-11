import React from "react";

import MqHeader from "../mq-header";
import MqSearchPanel from  "../mq-search-panel"
import MqList from "../mq-list";
import './app.css'

const App = () => {
    return (
        <div>
            <MqHeader />
            <MqSearchPanel />
            <MqList />
        </div>
    )
}

export default App;