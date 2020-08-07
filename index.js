const log = (msg) => console.log(msg)

const shout = (msg) => {
    if (typeof msg === str) {
        console.log(msg.toUpperCase())
    } else {
        log(msg)
    };
};

const whisper = (msg) => {
    if (typeof msg === str) {
        console.log(msg.toUpperCase())
    } else {
        log(msg)
    };
};

module.exports = {log, shout, whisper}