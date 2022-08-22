// map

Array.prototype.myMap = function(func){
    let result = [];

    for(let i = 0; i < this.length; ++i) {
        const elements = this[i];
        result.push(func(elements, i, this));
    }

    return result;
}

let array = [1, 2, 3];
console.log(array.myMap(x => x * 2));

// reduce

Array.prototype.myReduce = function(func, initial) {
    let accumulate; // set our 'previous'
    let index;
    if(initial === "undefined") {
        // type error
        if(this.length === 0) {
            throw new Exception("initialValue is undefined and the array contains no elements!");
        }
        if(this.length === 1) {
            return this[0];
        }

        accumulate = this[0];
        index = 1; 
    }
    else {
        if(this.length === 0) {
            return initial;
        }

        accumulate = initial;
        index = 0;
    }

    console.log(initial);
    for(let i = index; i < this.length; ++i) {
        accumulate = func(accumulate, this[i], i, this);
    }

    return accumulate;
}

console.log(array.myReduce((previousValue, currentValue) => previousValue + currentValue, 0));