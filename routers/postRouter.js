const express = require('express');
const Router = express.Router();
const Board = require('../schemas/board');
const authMiddleWare = require("../middlewares/auth-middleware");

//게시글 상세페이지 API
Router.get('/inspect/:postID', async(req, res) => {
  const { postID } = req.body;

  try {
    const postingList = await Board.findById(postID);
    res.json({ postingList: postingList })
  } catch (err) {
    res.status(500).send({
      errorMessage: '해당 페이지에 게시글이 존재하지 않습니다.'
    });
  }
})

//게시물 불러오기 API
Router.get('/postlist', async(req, res) => {
  try {
    const postList = await Board.find({postingDel: 1}).sort("-date");
    res.status(201).json({ postList : postList });
  } catch (err) {
    res.status(500).send({
      errorMessage: '해당 게시물을 더이상 찾을 수 없습니다.'
    })
  }
})

//게시글 등록 API

Router.post('/posting', authMiddleWare, async(req, res) => {
  const {user} = res.locals
  const { postingTitle, postingDate, postingComment, postingImgUrl, postingDel } = req.body;
  try {
    const posting = new Board({postingTitle, postingEmail:user.userEmail ,postingAuthor: user.userNickname, postingDate, postingComment, postingImgUrl, postingDel})
    await posting.save();
    res.status(201).send({ 
      message: "게시글 등록을 완료했습니다."
    });
  } catch (err) {
      res.status(500).send({ 
        errorMessage: '게시글 등록에 실패했습니다.'
      });
  }
})

//게시글 수정 API
Router.patch("/postModify", async (req, res, next) => {
  try {
    const { postID ,postingTitle, postingComment, postingUpdate } = req.body;
      await Board.updateOne({_id: postID},{ postingTitle, postingComment, postingUpdate });
      res.status(200).send({ message: '게시글 수정이 완료되었습니다!' });
  } catch (err) {
    res.status(500).send({ errorMessage: '게시글 수정 실패!, 관리자에 문의해주세요'})
  } //error found
});

//게시글 삭제 API
Router.delete("/postDelete", async(req, res) => {
  const { postID } = req.body;
  await Board.updateOne({_id: postID},{$set : {postingDel: 0}});
  res.send({ 
    Message: '게시글 삭제에 성공했습니다.' 
  });
})
module.exports = Router;