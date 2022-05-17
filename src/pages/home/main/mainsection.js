import "./mainsection.css";
import { fetchData } from "../../../utils/fetch";

function MainSection(props) {
    function handleChange(event) {
        props.setFormData(event.target.value);
    }

    function handleClear() {
        props.setHistory([]);
    }

    async function handleFetch(event) {
        props.setIsLoading((prevState) => !prevState);
        event.preventDefault();
        const fetchLink = "https://api.openai.com/v1/engines/text-curie-001/completions";
        const configObj = {
            prompt: String(props.formData),
            temperature: 0.5,
            max_tokens: 70,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        };

        let data = await fetchData(fetchLink, configObj);
        props.setIsLoading((prevState) => !prevState);
        props.setHistory([{ prompt: props.formData, response: data.choices[0].text }, ...props.history]);
    }

    return (
        <section className="mainsection">
            <div className="container">
                <h1>AI Prompt Sender</h1>
                <form>
                    <input
                        type="text"
                        placeholder="tell the AI what to do or ask a question"
                        name="prompt"
                        value={props.formData}
                        onChange={handleChange}
                    ></input>
                    <button onClick={handleFetch}>Send</button>
                    <button onClick={handleClear}>Clear</button>
                </form>
            </div>
        </section>
    );
}

export default MainSection;
