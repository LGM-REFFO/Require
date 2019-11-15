define(["isarray"],function(isArray){
    function sort(arr){
        if(isArray(arr)){
            return arr.sort(function(a,b){
                return a - b;
            });
        }
        else{
            return "Error!!!!!"
        }
    }
    return sort;
});