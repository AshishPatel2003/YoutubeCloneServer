import videoFiles from './../models/videoFiles.js'

export const uploadVideo = async(req, res, next) => {
    console.log(req.file);
    if (req.file === undefined) {
        res.status(404).json({message: "plz Upload a '.mp4' file only"})
    } else {
        try {
            const file = new videoFiles({
                videoTitle: req.body.title,
                filename: req.file.originalname,
                filePath: req.file.path,
                fileType: req.file.mimetype,
                fileSize: req.file.size,
                videoChannel: req.body.channel,
                Uploader: req.body.Uploader
            })
            console.log(file);
            await file.save();
            res.status(201).send("File uploaded successfully")
        } catch (error) {
            res.status(400).send(error.message)
        }
    }
}

export const getAllvideos = async(req, res) => {
    try {
        const files = await videoFiles.find();
        res.status(200).send(files)
    } catch (error) {
        res.status(404).send(error.message)
    }
}