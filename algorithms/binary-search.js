function binary_search(arr, target){
    let start = 0
    let end = arr.length

    while(start < end){
        let mid = Math.floor((start + end)/ 2)
        if(arr[mid] === target){
            return true
        }
        else if( arr[mid] < target){
            start = mid + 1
        }
        else{
            end = mid
        }
    }

    return false
}

let arr = [5, 7,9, 10, 12, 15, 17, 18, 20, 15, 28, 30, 34, 37, 39, 40, 42, 44, 46, 50, 52, 65, 69, 72, 80, 85,88,90,94,96,100]
let result = binary_search(arr,900)

if(result){
    console.log('Number found')
}
else{
    console.log('Number not found')
}