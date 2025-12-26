
const p1 = new Promise((resolve, reject) => setTimeout(() => reject(1), 1000))
const p2 = new Promise((resolve, reject) => setTimeout(() => reject(2), 3000))
const p3 = new Promise((resolve, reject) => setTimeout(() => reject(4), 1500))

Promise.myRace = function (promiseArray = []) {

    return new Promise((resolve, reject) => {
        promiseArray.forEach((promise) => {
            Promise.resolve(promise).
                then((res) => {
                    return resolve(res)
                }).
                catch(err => {
                    return reject(err)
                })
        })
    })
}

Promise.myRace([p1, p2, p3]).then(res => console.log(res))