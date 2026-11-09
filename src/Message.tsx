function Message() {
    const name = "Charlie";
    if (name)
        return <h1>Hello world, {name}</h1>;
    return <h1>Hello world</h1>;
}

export default Message;