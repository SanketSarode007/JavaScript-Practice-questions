
function promiseAll(p1, p2, p3) {
    const promiseArray = [p1, p2, p3];

    return new Promise((resolve, reject) => {
        let resolveCountes = 0;
        const result = []

        promiseArray.map((promise, index) => {
            Promise.resolve(promise).then((value) => {
                result[index] = value
                resolveCountes++;
                if (resolveCountes === promiseArray.length) {
                    resolve(result)
                }
            }).catch((err) => {
                reject(err)
            })
        })
    })
}

const p1 = Promise.resolve(1)
const p2 = Promise.reject(2)
const p3 = Promise.resolve(3)
promiseAll(p1, p2, p3).
    then(result => console.log(result)).
    catch(err => console.log(err))