import Loading from "../../../components/loading/Loading";
import "./index.css";

function History(props) {
    return (
        <section>
            <div className="loadingContainer">{props.isLoading && <Loading />}</div>
            <div className="historycontainer">
                {props.history.map((item, index) => {
                    return (
                        <div className="historybox" key={index}>
                            {" "}
                            <p>Prompt: {item.prompt}</p>
                            <p>Response: {item.response}</p>{" "}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default History;
