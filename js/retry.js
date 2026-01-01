
async function retry(fn, retries, delay) {
    let lastError;

    for (let attempt = 0; attempt <= retries; attempt++) {
        try {
            const result = await fn();
            return result;
        } catch (err) {
            lastError = err;

            // If this wasn't the last attempt, wait before continuing the loop
            if (attempt < retries) {
                new Promise(resolve => setTimeout(resolve, delay))
            }
        }
    }

    throw lastError;

}

async function runTests() {
    console.log("Starting retry tests...\n");

    let callCount = 0;

    // Helper: a function that fails N times then succeeds
    const flakyFn = (failTimes, successValue = "success") => {
        return async () => {
            callCount++;
            if (callCount <= failTimes) {
                throw new Error(`Failed attempt ${callCount}`);
            }
            return successValue;
        };
    };

    // Test 1: Succeeds on first try
    callCount = 0;
    const fn1 = flakyFn(0, "first try");
    try {
        const result = await retry(fn1, 3, 100);
        console.log("Test 1 passed:", result === "first try" && callCount === 1);
    } catch (e) {
        console.log("Test 1 failed:", e.message);
    }

    // Test 2: Fails twice, succeeds on third try (uses 2 retries)
    callCount = 0;
    const fn2 = flakyFn(2, "recovered");
    try {
        const result = await retry(fn2, 3, 100);
        console.log("Test 2 passed:", result === "recovered" && callCount === 3);
    } catch (e) {
        console.log("Test 2 failed:", e.message);
    }

    // Test 3: Always fails → should exhaust retries and throw last error
    callCount = 0;
    const fn3 = flakyFn(10); // fails forever
    try {
        await retry(fn3, 2, 100); // 1 initial + 2 retries = 3 attempts
        console.log("Test 3 failed: should have thrown");
    } catch (e) {
        console.log("Test 3 passed:", e.message === "Failed attempt 3" && callCount === 3);
    }

    // Test 4: Zero retries → should fail immediately on first error
    callCount = 0;
    const fn4 = flakyFn(1);
    try {
        await retry(fn4, 0, 1000);
        console.log("Test 4 failed: should have thrown");
    } catch (e) {
        console.log("Test 4 passed:", e.message === "Failed attempt 1" && callCount === 1);
    }

    // Test 5: Negative retries treated as 0
    callCount = 0;
    const fn5 = flakyFn(1);
    try {
        await retry(fn5, -5, 100);
        console.log("Test 5 failed");
    } catch (e) {
        console.log("Test 5 passed:", callCount === 1);
    }
}

runTests();