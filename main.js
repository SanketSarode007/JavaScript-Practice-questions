const objA = {
    foo() {
        console.log(this)
    },
    bar: () => console.log(this),
}

const objB = {
    foo: objA.foo,
    bar: () => objA.bar(),
    baz() { objA.foo() }
}

objB.foo();
objB.bar();
objB.baz();
