function decryptMessage(chat) {
    let chatArray = chat.split('');
    for (let i = 0; i < chatArray.length; i++) {
        let char = chatArray[i];
        if (char.match(/[a-z]/)) {
            chatArray[i] = String.fromCharCode(((char.charCodeAt(0) - 97 - 5 + 26) % 26) + 97);
        } else if (chatArray[i].match(/[A-Z]/)) {
            chatArray[i] = String.fromCharCode(((char.charCodeAt(0) - 65 - 5 + 26) % 26) + 65);
        }
    }

    return chatArray.join('');
}

console.log(decryptMessage("xfqfr bfmdz"));
console.log(decryptMessage("gjxtp lzj rfz ifkyfw jxi snm"));
console.log(decryptMessage("gwt, gjxtp qz rfz rfpfs in bfwlty lfp?"));
console.log(decryptMessage("fpz xfdfsl pfrz, rfz lfp ofin ufhfwpz"));
console.log(decryptMessage("dfsl pnwnr xynhpjw otrtp pz pnhp ifwn lwzu"));
