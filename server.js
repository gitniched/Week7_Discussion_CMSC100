import express from "express"

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(express.static("static_files"))

var port = 3000
app.listen(port, () => {
    console.log(`Connected to ${port}`);
})