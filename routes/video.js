import express from 'express';
import { uploadVideo, getAllvideos } from "../controller/video.js"
import { likeController } from "../controller/like.js"
import { viewsController } from "../controller/views.js"
import { likeVideoController, getAlllikeVideoController, deleteLikedVideoController } from "../controller/likeVideo.js"
import { watchLaterController, getAllwatchLaterController, deletewatchLaterController } from "../controller/watchLater.js"
import { HistoryController, getAllHistoryController, deleteHistoryController } from "../controller/history.js"
import upload from '../Helpers/fileHelper.js'
import auth from '../middleware/auth.js';
const routes = express.Router();

routes.post("/uploadVideo", auth, upload.single("file"), uploadVideo);

routes.get("/getvideos", getAllvideos);
routes.patch("/like/:id", auth, likeController);
routes.patch("/views/:id", viewsController);

routes.post('/likeVideo', auth, likeVideoController);
routes.get('/getAlllikeVideo', getAlllikeVideoController);
routes.delete('/deleteLikedVideo/:videoId/:Viewer', auth, deleteLikedVideoController)

routes.post('/watchLater', auth, watchLaterController);
routes.get('/getAllwatchLater', getAllwatchLaterController);
routes.delete('/deleteWatchLater/:videoId/:Viewer', auth, deletewatchLaterController)

routes.post('/history', auth, HistoryController);
routes.get('/getAllHistory', getAllHistoryController);
routes.delete('/clearHistory/:userId', auth, deleteHistoryController)

export default routes;