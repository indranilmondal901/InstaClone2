const router = require("express").Router();
const path = require("path");
const collection = require("../models/collection");
const { v4: uuidv4 } = require("uuid");

//routing

/*:::::::::::::::::::::::::::::::::::::::::::::::::::[Post]:::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
router.post("/user", async (req, res) => {
    // console.log(req.files)
    const { fileName } = req.files; // whole file_name
    const imgfileName = fileName.name.split("."); // abc.png
    const imgExtension = imgfileName[imgfileName.length - 1];  // .png
    const new_imgfileName = uuidv4() + "." + imgExtension;  //random file_name name create
    //likes
    const likes = Math.random() * 100 | 0;
    /*condition to store  data*/
    if (['jpg', 'png', 'svg', 'jpeg'].includes(imgExtension)) {

        fileName.mv(path.join(__dirname, "../uploads", new_imgfileName), async (err) => {
            try {
                if (err) {
                    res.status(404).send({
                        status: "failed",
                        message: err.message
                    })
                } else {
                    const { author, location, description } = req.body;
                    const data = await collection.create({
                        author,
                        location,
                        description,
                        fileName: new_imgfileName,
                        likes: likes
                    });
                    res.status(201).json({
                        status: "sucessfull",
                        result: data
                    })
                }
            } catch (err) {
                res.status(502).send({
                    status: "faliur",
                    data: err.message
                })
            }
        })
    } else {
        req.status(404).send({
            status: "failed",
            err: err.message
        })
    }
})

/*:::::::::::::::::::::::::::::::::::::::::::::::[get]:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
router.get("/user", async (req, res) => {
    
    try {
        const data = await collection.find()
        res.status(201).json({
            status: "sucessfull",
            result: data
        })
    } catch (err) {
        res.status(502).send({
            status: "faliur",
            data: err.message
        })
    }
})
router.get("/user/:fileName", async (req, res) => {

    try {
        const imgFilePath = req.params.fileName
        res.status(201).sendFile(path.join(__dirname, "../uploads", imgFilePath))
    } catch (err) {
        res.status(502).send({
            status: "faliur",
            data: err.message
        })
    }
})
module.exports = router;
