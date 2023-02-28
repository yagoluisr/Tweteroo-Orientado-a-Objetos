
const tweets = [];


class Tweet {
    constructor(tweet, username) {
        this.tweet = tweet;
        this.username = username;
    }
}

export function postTweet(req, res) {
    const { tweet, username } = req.body;
  
    if (!username || !tweet) {
      return res.status(400).send('Todos os campos são obrigatórios!');
    }
  
    const { avatar } = usuarios.find(user => user.username === username);
  
    tweets.push({ username, tweet, avatar });
  
    res.status(201).send('OK, seu tweet foi criado');
  }
