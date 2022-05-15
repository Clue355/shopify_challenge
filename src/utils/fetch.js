function fetchData(api, configObj) {
    const data = fetch(api, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_OPEN_API_KEY}`,
        },
        body: JSON.stringify(configObj),
    }).then((res) => res.json());
    return data;
}
export { fetchData };
