const VerifyToken = (req, res) => {
    res.send("Hey");
}

const ReceiveMessage = (req, res) => {
    res.send("Hey Received");
}

module.exports = {
    VerifyToken,
    ReceiveMessage
}