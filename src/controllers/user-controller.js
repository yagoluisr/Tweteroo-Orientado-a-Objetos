class User {
    constructor() {
        this.usuarios = [];
        this.userPost = this.userPost.bind(this);
    }

    userPost(req, res) {
        const { username, avatar } = req.body;
    
        if (!username || !avatar) {
            res.status(400).send('Todos os campos são obrigatórios!');
            return;
        }
    
        this.usuarios.push({ username, avatar });

        res.status(200).send('OK deu tudo certo');
    }

    getUser(username) {
        return this.usuarios.find(user => user.username === username);
    }
}

export default new User();
