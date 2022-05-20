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
    const charLength = 280;
    const hunChar = 100;
    const dotChar = 3;

    if (newPrompt.length >= hunChar) {
        newPrompt = prompt.slice(0, hunChar) + "...";
    }

    newResponse = response.replaceAll(/[.]+/g, ", ").slice(0, charLength - newPrompt.length - dotChar) + "...";

    if (prompt === "") {
        return `AI: ${newResponse}`;
    }
    console.log(`Me: ${newPrompt} AI: ${newResponse}`);
    return `Me: ${newPrompt} AI: ${newResponse}`;
}

export default ShareTwitter;
