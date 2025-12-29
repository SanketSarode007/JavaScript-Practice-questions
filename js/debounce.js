
function debounce(callback, delay) {
    let timeId;

    return function (...args) {
        clearTimeout(timeId)

        timeId = setTimeout(() => {
            callback.apply(this, args)
        }, delay)
    }
}

let value;
const fn = debounce((x) => console.log(x), 100);

fn(1);
fn(2);
fn(3);

setTimeout(() => {
    value; // 3
}, 150);

// ⚠️ Possible improvements / minor issues:

// No return value handling – If the original callback returns something, you currently cannot capture it from the debounced function. 
//Usually this is not critical because debounced functions are often used for side effects (like events), but worth noting.

// No immediate option – Some debounce implementations allow an "immediate" call on the first trigger. Your version always waits for the delay. 
//That’s fine, but some users expect an immediate feature.