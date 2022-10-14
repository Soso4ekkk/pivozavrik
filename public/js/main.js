window.onload = function () {

    const server = new Server;

    async function sendLoginHandler() {
        const login = document.getElementById('login').value;
        const password = document.getElementById('password').value;
        const data = await server.login(login, password);
        if (data) {
            window.location.href = '/public/pages/userPage.html'
        }

        console.log(data);
    }

    function sendConvertHandler() {
        server.convert(1, 'a', 'b');
    }

    document.getElementById('sendLogin').addEventListener('click', sendLoginHandler);
    document.getElementById('sendConvert').addEventListener('click', sendConvertHandler);
};