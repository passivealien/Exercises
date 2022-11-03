    let target = {};
    let key = 'response';
    let attributes = {
        value: 200,
        writable: true,
        configurable: true
    };
    Reflect.defineProperty(
        target,
        key,
        attributes
    );
console.log("response wasn't configurable up untill we add the attribute configurable")
console.log(Reflect.deleteProperty( target, key ))
console.log(target)
