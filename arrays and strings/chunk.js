function chunk(arr,size) {
    let chunked = new Array();
    for(let i = 0; i< arr.length; i+= size){
        chunked.push(arr.slice(i,i + size));
    }
    return chunked;
}


console.log(chunk([1,2,3,4,5,6,7],2))