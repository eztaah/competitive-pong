const socket = io();
const container = document.querySelector('.container');

setTimeout(() => {
    socket.emit('load-leaderboard');
    console.log("send : load-leaderboard")
}, 4000)




socket.on('transfer-database', sqlDatabase => {
    for(let i=0 ; i<sqlDatabase.length ; i++) {
        const name = sqlDatabase[i].name;
        const score = sqlDatabase[i].score;
        const line = document.createElement('p');
        const points = '.'.repeat(21 - name.length).trimEnd()
        line.innerHTML = `${i+1}. ${name} ${points} ${score}`
        line.setAttribute('class', 'line');
        container.appendChild(line);
    };
});