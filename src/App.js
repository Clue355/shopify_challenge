import { React, useState } from "react";
import "./App.css";
// home components
import MainSection from "./pages/home/main/mainsection";
import History from "./pages/home/history";

function App() {
    const [formData, setFormData] = useState("");
    const [history, setHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <>
            <MainSection
                formData={formData}
                setFormData={setFormData}
                setHistory={setHistory}
                history={history}
                setIsLoading={setIsLoading}
            />
            <History history={history} setHistory={setHistory} isLoading={isLoading} setIsLoading={setIsLoading} />
        </>
    );
}

export default App;
