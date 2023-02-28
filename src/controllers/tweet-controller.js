import User from "./user-controller.js";

class Tweet {
  constructor() {
    this.tweets = [];
    this.postTweet = this.postTweet.bind(this);
    this.getAllTweets = this.getAllTweets.bind(this);
  }

  postTweet(req, res) {
    const { tweet, username } = req.body;
  
    if (!username || !tweet) {
      return res.status(400).send('Todos os campos são obrigatórios!');
    }
  
    const { avatar } = User.getUser(username);

    this.tweets.push({ username, tweet, avatar });
  
    res.status(201).send('OK, seu tweet foi criado');
  }

  getAllTweets(req, res) {
    const { username } = req.params;
  
    const tweetsDoUsuario = this.tweets.filter(t => t.username === username);
  
    res.status(200).send(tweetsDoUsuario);
  }

}

export default new Tweet();
