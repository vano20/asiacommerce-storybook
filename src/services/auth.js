import BaseServices from "./baseServices";

class AuthServices extends BaseServices {
    constructor () {
        super();

        this.init()
    }

    init () {
        this.endPoint = "api/login";
    }

    login (username, password) {
        return this.post({
            client_id: "2",
            client_secret: "o4plg2OOjl0fr1vXMLae1e87OFvZGKV13inZQEWU",
            grant_type: "password",
            username,
            password
        })
    }

    async getUser () {
        this.endPoint = "api/v2/me";
        return this.get();
    }
}

export default new AuthServices();
