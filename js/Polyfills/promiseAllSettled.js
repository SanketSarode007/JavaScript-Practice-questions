
const p1 = Promise.resolve(1)
const p2 = Promise.reject(2)
const p3 = Promise.reject(3)

Promise.myPromiseAllSettled = function (promiseArray = []) {

    return new Promise((resolve) => {
        const result = []
        let completed = 0;

        if (promiseArray.length === 0) {
            resolve([])
        }

        promiseArray.forEach((promise, index) => {
            Promise.resolve(promise).
                then(value => {
                    result[index] = { status: 'fulfilled', value }
                }).
                catch(reason => {
                    result[index] = { status: 'rejected', reason }
                }).
                finally(() => {
                    completed++;
                    if (completed === promiseArray.length) {
                        resolve(result)
                    }
                })
        })
    })
}

Promise.myPromiseAllSettled([p1, p2, p3]).then(res => console.log(res))