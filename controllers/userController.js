const db = require("../db/queries");


async function getUsernames(req, res) {
  const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  res.send("Usernames: " + usernames.map(user => user.username).join(", "));
}

async function createUsernameGet(req, res) {
  // render the form
}

async function createUsernamePost(req, res) {
  console.log(req.body)
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}


async function searchUsernameGET(req, res){
  const search = req.query.search;
  const usernames = await db.searchUsernames(search)
  res.send(usernames);
}

module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
  searchUsernameGET,
};
