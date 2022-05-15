import { React, useState } from "react";
import "./App.css";
// home components
import MainSection from "./pages/home/main/mainsection";
import History from "./pages/home/history";

function App() {
    const [formData, setFormData] = useState("");
    const [history, setHistory] = useState([]);

    return (
        <>
            <MainSection formData={formData} setFormData={setFormData} setHistory={setHistory} history={history} />
            <History history={history} setHistory={setHistory} />
        </>
    );
}

export default App;
