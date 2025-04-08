const express = require("express");
const SabzLearnShopDB = require("./../db/SabzLearnShop");

const commentsRouter = express.Router();

// routes

commentsRouter.get("/", (req, res) => {
  let selectAllCommentsQuery = `SELECT \`c\`.\`id\` , \`c\`.\`isAccept\` , \`c\`.\`body\` , \`c\`.\`date\` , \`c\`.\`hour\` , \`u\`.\`firstname\` AS 'userID' , \`p\`.\`title\` AS 'productID' , \`c\`.\`createdAt\` FROM \`comments\` \`c\` LEFT JOIN \`users\` \`u\` ON \`c\`.\`userID\` = \`u\`.\`id\` LEFT JOIN \`products\` \`p\` ON \`c\`.\`productID\` = \`p\`.\`id\` ORDER BY \`c\`.\`createdAt\` DESC`;

  SabzLearnShopDB.query(selectAllCommentsQuery, (err, result) => {
    if (err) {
      res.send(null);
    } else {
      res.send(result);
    }
  });
});

commentsRouter.delete("/:commentID", (req, res) => {
  let commentID = req.params.commentID;

  let deleteCommentQuery = `DELETE FROM Comments WHERE id = ${commentID}`;
  SabzLearnShopDB.query(deleteCommentQuery, (err, result) => {
    if (err) {
      res.send(null);
    } else {
      res.send(result);
    }
  });
});

commentsRouter.put("/:commentID", (req, res) => {
  let commentID = req.params.commentID;
  let editCommentQuery = `UPDATE Comments SET body="${req.body.body}" WHERE id = ${commentID}`;

  SabzLearnShopDB.query(editCommentQuery, (err, result) => {
    if (err) {
      res.send(null);
    } else {
      res.send(result);
    }
  });
});

module.exports = commentsRouter;
