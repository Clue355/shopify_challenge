import "./mainsection.css";
import { fetchData } from "../../../utils/fetch";

function MainSection(props) {
    function handleChange(event) {
        props.setFormData(event.target.value);
    }

    async function handleFetch(event) {
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
        props.setHistory([{ prompt: props.formData, response: data.choices[0].text }, ...props.history]);
    }

    return (
        <section className="mainsection">
            <div className="container">
                <h1>AI Prompt Sender</h1>
                <form>
                    <input
                        type="text"
                        placeholder="Enter Your Prompt"
                        name="prompt"
                        value={props.formData}
                        onChange={handleChange}
                    ></input>
                    <button onClick={handleFetch}>Send</button>
                </form>
            </div>
        </section>
    );
}

export default MainSection;
