// Fill-in field

const userNameInput = document.querySelector('#userName');
const userAvatarInput = document.querySelector('#avatarLink');
const userCommentsInput = document.querySelector('#userComments');
const sendCommnetButton = document.querySelector('#sendButton');

// Chat Board

const usersChatBoard = document.querySelector('.chatArea');
const messages = document.querySelector('.messages');

const checkName = () => {
    const name = userNameInput.value;
    const userName = name.trim().split(' ');
    const changedName = [];

    userName.forEach((element) => {
        let newName = element[0].toUpperCase() + element.slice(1).toLowerCase();
        changedName.push(newName);
    });

    const nameFormatted = changedName.join(' ');
    return nameFormatted;
};

userNameInput.addEventListener('change', () => {
    userNameInput.value = checkName();
});

// spam check

const checkMessage = (spam) => {
    const str = spam.replace(/viagra|сволочь|гад/gi, '***');
    return str;
};

const createMessage = () => {
    const message = document.createElement('div');
    message.className = 'message';
    messages.prepend(message);

const messageUserName = document.createElement('p');
messageUserName.className = 'message_name';

if (userNameInput.value !== '') {
    messageUserName.innerHTML = checkName ();
}
else {
    messageUserName.innerHTML = 'Username';
}
message.append(messageUserName);

// text
const messageText = document.createElement('p');
messageText.className = 'message_text';
messageText.innerHTML = checkMessage(userCommentsInput.value);
message.append(messageText);
userNameInput.value = '';
userAvatarInput.value = '';


// removing elements over 5

if (messages.childElementCount > 5) {
    messages.removeChild (messages.lastChild);
}

};

sendCommnetButton.addEventListener('click', () => {
    createMessage();
    userCommentsInput.value = '';
});