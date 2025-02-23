const arr = [
    { userName: "Test",
    lastName: "Test",
    email: "test.test@gmail.com" },

    { userName: "Dmitro",
    lastName: "Porohov",
    email: "dmitro.porohov@yahoo.com" },

    { userName: "Andrii",
    lastName: "",
    email: "andrii@mail.ru" }
];

const realEmails = arr
    .map(obj => obj.email)
    .filter(email => /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/.test(email));

console.log(realEmails);
