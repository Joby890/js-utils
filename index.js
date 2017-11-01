const bind = (obj, thisCtx, ...args) => {
    return () => {
        return obj.call(thisCtx, args);
    }
};


function testBind() {
    console.log(this)
}


const bound = bind(testBind, "hello world");

bound();