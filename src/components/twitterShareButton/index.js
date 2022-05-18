import twitter from "../../assets/images/icons8-twitter-30.png";
import "./index.css";

function ShareTwitter(props) {
    let reducedCharacters = characterReducer(props.prompt, props.response);
    return (
        <div>
            <a
                className="twitterbtn"
                href={`https://twitter.com/intent/tweet?text=${reducedCharacters}`}
                target="_blank"
                rel="noreferrer"
            >
                <img src={twitter} alt="twitter share button" />
            </a>
        </div>
    );
}

function characterReducer(prompt, response) {
    let newResponse = response;
    let newPrompt = prompt;
    const createdBy = "web app created by @clue355";
    const infoCharLength = createdBy.length;
    const charLength = 280;
    const halfCharLength = 140;

    if (newPrompt + infoCharLength >= charLength || newPrompt + infoCharLength >= halfCharLength) {
        newPrompt = prompt.slice(0, halfCharLength - (infoCharLength / 2 + 1));
    } else if (prompt === "") {
        newPrompt = "";
    }
    newResponse = response.slice(0, charLength - (newPrompt.length + infoCharLength) - 4) + "...";

    if (prompt === "") {
        newResponse = response.slice(0, charLength - infoCharLength - 5) + "...";
        return `AI: ${newResponse} ${createdBy}`;
    }
    return `Me: ${newPrompt} AI: ${newResponse} ${createdBy}`;
}

export default ShareTwitter;
