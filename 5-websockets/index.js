const app = require("express")()
const http = require("http").Server(app)
const io = require("socket.io")(http)

const PORT = 3000

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html")
})

io.on("connection", (socket) => {
    console.log("Client connected")
    socket.emit("chat", "Client connected")

    socket.on("chat", (msg) => {
        console.log("Message", msg, "sent")
        socket.emit("chat", msg)
    })

    socket.on("disconnect", () => {
        console.log("Client disconnected")
        socket.emit("chat", "Client disconnected")
    })
})


http.listen(3000, () => {
    console.log("Server running on", "http://localhost:" + PORT)
})
