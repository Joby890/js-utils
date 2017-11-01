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


const each = (obj, cb) => {
    if(Array.isArray(obj)) {
        for(var i = 0; i < obj.length; i++) {
            cb && cb(obj[i], i, obj)
        }
    } else {
        for(var key in obj) {
            cb && cb(obj[i], i, obj)
        }
    }
}



const reduce = (obj, cb, accum) => {
    each(obj, (val) => {
        if(accum === undefined) {
            accum = val;
        } else {
            accum = cb(accum, val);
        }
    });
    return accum;
}

each([1,2,3], x => console.log(x))

const result = reduce([1,2,3], (res, next) => res + next);

console.log(result);


const map = (obj, cb) => {
    return reduce(obj, (accum, val) => {
        accum.push(cb(val));
        return accum;
    }, [])
}

const result2 = map([1,2,3], (x) => x * 2);

console.log(result2);