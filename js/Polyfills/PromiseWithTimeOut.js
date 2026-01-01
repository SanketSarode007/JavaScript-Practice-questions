
function promiseWithTimeout(promise, ms) {

    return new Promise((resolve, reject) => {
        const timeId = setTimeout(() => {
            reject(new Error(`Promise timed out after ${ms} ms`));
        }, ms)

        promise.then((res) => {
            clearTimeout(timeId)
            resolve(res)
        }).catch((err) => {
            clearTimeout(timeId);
            reject(err)
        })

    })
}

async function runTests() {
    console.log("Starting tests...\n");

    // Test 1: Promise resolves quickly (within timeout)
    const quickPromise = new Promise(resolve => setTimeout(() => resolve("quick"), 100));
    try {
        const result = await promiseWithTimeout(quickPromise, 500);
        console.log("Test 1 passed:", result === "quick");
    } catch (err) {
        console.log("Test 1 failed:", err.message);
    }

    // Test 2: Promise takes too long → should timeout
    const slowPromise = new Promise(resolve => setTimeout(() => resolve("too slow"), 300));
    try {
        await promiseWithTimeout(slowPromise, 100);
        console.log("Test 2 failed: should have timed out");
    } catch (err) {
        console.log("Test 2 passed:", err.message.includes("timed out"));
    }

    // Test 3: Original promise rejects quickly
    const rejectPromise = new Promise((_, reject) => setTimeout(() => reject(new Error("failed")), 50));
    try {
        await promiseWithTimeout(rejectPromise, 500);
        console.log("Test 3 failed: should have rejected");
    } catch (err) {
        console.log("Test 3 passed:", err.message === "failed");
    }

    // Test 4: Already settled promise (resolved)
    const alreadyResolved = Promise.resolve("already done");
    try {
        const result = await promiseWithTimeout(alreadyResolved, 100);
        console.log("Test 4 passed:", result === "already done");
    } catch (err) {
        console.log("Test 4 failed:", err);
    }

    // Test 5: Already settled promise (rejected)
    const alreadyRejected = Promise.reject(new Error("already failed"));
    try {
        await promiseWithTimeout(alreadyRejected, 100);
        console.log("Test 5 failed: should have rejected");
    } catch (err) {
        console.log("Test 5 passed:", err.message === "already failed");
    }
}

runTests();