var createCounter = function(cnt) {
    i = cnt;
    function increment(){
        return ++cnt;
    }
    function decrement(){
        return --cnt;
    }
    function reset(){
        cnt = i;
        return cnt;
    }
    return{increment, decrement, reset}
};