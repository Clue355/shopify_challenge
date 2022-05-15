import "./index.css";

function History(props) {
    console.log(props.history);
    return (
        <section>
            <div class="historycontainer">
                {props.history.map((item, index) => {
                    return (
                        <div class="historybox" key={index}>
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
