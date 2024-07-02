function linear_search(target, arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return 'Element Found'
        }
    }
                   
    return 'Element Was not Found'
}

const numbers = [12, 87, 98, 78, 63, 68, 45, 12, 1, 56]
console.log(linear_search(56,numbers)) // O(n) => linear time complexity