import history from '../models/History.js'

export const HistoryController = async(req, res) => {
    const HistoryData = req.body;
    // console.log(HistoryData)

    const addToHistory = new history(HistoryData);

    try {
        await addToHistory.save();
        res.status(200).json('Added to History');
    } catch (error) {
        res.status(400).json(error)
    }
}


export const getAllHistoryController = async(req, res) => {
    try {
        const files = await history.find();
        res.status(200).send(files)
    } catch (error) {
        res.status(404).send(error.message)
    }
}

export const deleteHistoryController = async(req, res) => {
    const { userId : userId } = req.params;
    try {
        await history.deleteMany({
            Viewer : userId
        })
        res.status(200).json({message: "Removed from your watch Later"})
    } catch (error) {
        res.status(400).json({message: error.message})
        
    }
}
