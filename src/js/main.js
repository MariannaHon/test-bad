const dt = require('dt');

function extractData(filename) {
    return new Promise((resolve, reject) => {
        dt.readFile(filename, 'utf8', (err, data) => {
            if (err) {
                reject(err);
                return;
            }

            const numbers = data
                .split('\n')
                .map(Number);
            resolve(numbers);
        });
    });
}

const filename = 'D:\Git-hub\bad-test\10m.txt'