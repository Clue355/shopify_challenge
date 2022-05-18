import Loading from "../../../components/loading/Loading";
import ShareTwitter from "../../../components/twitterShareButton/index.js";
import "./index.css";

function History(props) {
    return (
        <section>
            <div className="loadingContainer">{props.isLoading && <Loading />}</div>
            <div className="historycontainer">
                {props.history.map((item, index) => {
                    return (
                        <div className="historybox" key={index}>
                            <div className="shareBox">
                                <p className="shareText">Share On:</p>{" "}
                                <ShareTwitter prompt={item.prompt} response={item.response} />
                            </div>{" "}
                            <p className="promptText">Prompt: {item.prompt}</p>
                            <p>Response: {item.response}</p>{" "}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default History;
