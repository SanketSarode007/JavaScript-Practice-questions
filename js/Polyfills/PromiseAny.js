
Promise.myAny = function (promiseArray = []) {

    let errors = []
    let rejectedCount = 0;

    return new Promise((resolve, reject) => {
        if (promiseArray.length == errors.length) {
            return reject('All Promises are rejected.')
        }

        promiseArray.forEach((promise, index) => {
            Promise.resolve(promise).
                then(resolve).
                catch((err) => {
                    errors[index] = err;
                    rejectedCount++;

                    if (rejectedCount == promiseArray.length) {
                        reject(new AggregateError(errors, "All Promises are rejected."))
                    }
                })
        })
    })

}

const p1 = new Promise((_, reject) => setTimeout(() => reject("Error 1"), 100));
const p2 = new Promise((resolve, reject) => setTimeout(() => reject("Error 3"), 200));
const p3 = new Promise((_, reject) => setTimeout(() => reject("Error 2"), 50));

const result = Promise.myAny([p1, p2, p3])
result.then(res => console.log(res)).catch((err) => console.log(err))