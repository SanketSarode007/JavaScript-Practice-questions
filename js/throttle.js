
function throttle(callback, delay) {
    let lastCallTime = 0;

    return function (...args) {
        let now = Date.now();
        if (now - lastCallTime >= delay) {
            lastCallTime = now;
            return callback.apply(this, args);
        }
    }
}

let calls = 0;
let count = 0;
const fn = throttle(() => count++, 1500);

const interval = setInterval(fn, 10);

setTimeout(() => {
  clearInterval(interval);
  calls; 
}, 1000);