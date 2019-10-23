function foo(){
    let iterator = arguments[Symbol.iterator]()
    console.log( iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
}
foo("terry","larry","tom");
