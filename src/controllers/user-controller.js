const usuarios = [];
const tweets = [];

class User {
    constructor(username, avatar) {
        
        this.username = username;
        this.avatar = avatar;
    }

    insertUser() {
        const body = {
            username: this.username,
            avatar: this.avatar
        }
        usuarios.push(body);
    }
}

export async function userPost(req, res) {

    const { username, avatar } = req.body;

    if (!username || !avatar) {
        res.status(400).send('Todos os campos são obrigatórios!');
        return;
    }

    const newUser = new User(username, avatar);
    newUser.insertUser();

    res.status(200).send('OK deu tudo certo');
}