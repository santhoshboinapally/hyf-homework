function wait(resolveAfter) {
    return new Promise((resolve) => {
        const delay = resolveAfter * 1000;
        setTimeout(() => {
            resolve();
        }, delay);
    });
}
async function getResolvAfter() {
    console.log("beginning to logout after 8 sec");
    await wait(8);
    console.log("loged out after 8 seconds");
}
getResolvAfter();