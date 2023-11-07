const express = require("express")
const multer = require("multer");

app = express()
port = 4000


app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const upload = multer({ dest: "uploads/" });

app.post("/upload_files", upload.array("files"), ((req, res) => {

    console.log(req.body);
    console.log(req.files);
    res.send("image successfullt updated")


}));
















app.listen(port, () => {
    console.log("server started in port ", port);
})