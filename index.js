const bind = (obj, thisCtx, ...args) => {
    return () => {
        return obj.call(thisCtx, ...args);
    }
};


function testBind(a,b,c) {
    console.log(this, a && b && c)
}


const bound = bind(testBind, "hello world");

bound();



const boundWithArgs = bind(testBind, "str with a args", "a", "b", "c")
boundWithArgs();