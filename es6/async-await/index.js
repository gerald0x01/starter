import axios from 'axios';

class Api {
    static getUserInfo(username) {
        try {
            const reponse = await axios.get(`https://locallhost/api/${username}`);
        } catch (err) {
            console.log(response);
        }
    }
}

Api.getUserInfo('geraldo');