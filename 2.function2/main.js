<script type="text/javascript">
    function palindrome(message){
        var tmp = '';
        if(message.length % 2 ==0){
            for(var i = message.length - 1; i > (message.length / 2) - 1 ; i--){
                tmp = tmp + message[i];
            }
        } else {
            for(var i = message.length - 1; i > message.length / 2; i--){
                tmp = tmp + message[i];
            }
        }
        var messageTmp = message.substring(0, message.length/2);
        if(messageTmp == tmp){
            return true;
        } else {
            return false;
        }
    }
    palindrome('hello'); // should return false
    palindrome('abccba'); // should return true
</script>