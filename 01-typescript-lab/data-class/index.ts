class Data {
    name: string;
    uri: string;
    version: string;
    message: string;
    response?: string;
    fulfilled: boolean;

    constructor(name: string, uri: string, version: string, message: string) {
        this.name = name;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
}
let myData = new Data('GET', 'http://google.com', 'HTTP/1.1', '')
console.log(myData);
