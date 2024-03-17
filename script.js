const foo = function() {

let counter = 0;
    return function() {
        console.log(++counter);
    };
};

const inner = foo();

inner();
inner();