import User from "./user-controller.js";

class Tweet {
  constructor() {
    this.tweets = [];
    this.postTweet = this.postTweet.bind(this);
    this.getByUser = this.getByUser.bind(this);
    this.getAll = this.getAll.bind(this);
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

  getByUser(req, res) {
    const { username } = req.params;
  
    const tweetsDoUsuario = this.tweets.filter(t => t.username === username);
  
    res.status(200).send(tweetsDoUsuario);
  }

  getAll(req, res) {
    const { page } = req.query;
  
    if (page && page < 1) {
      res.status(400).send('Informe uma página válida!');
      return;
    }
    const limite = 10;
    const start = (page - 1) * limite;
    const end = page * limite;

    if (this.tweets.length <= 10) {
      return res.send(this.reverseTweets());
    }

    res.status(200).send([...this.tweets].reverse().slice(start, end));
  }

  reverseTweets() {
    return [...this.tweets].reverse();
  }

}

export default new Tweet();
