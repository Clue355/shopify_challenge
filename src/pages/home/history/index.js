import Loading from "../../../components/loading/Loading";
import ShareTwitter from "../../../components/twitterShareButton/index.js";
import image from "../../../assets/images/nohistory.png";
import "./index.css";

function History(props) {
    console.log(props.history);
    return (
        <section>
            <div className="loadingContainer">{props.isLoading && <Loading />}</div>
            {!props.history.length && (
                <div className="noHistoryBox">
                    <img src={image} alt="Loading" />
                </div>
            )}
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
