<script type="text/javascript">
    function reverseString(message){
        var tmp = '';
        for(var i = message.length - 1; i >= 0; i--){
            tmp = tmp + message[i];
        }
        console.log(tmp);
        return tmp;
    }
    reverseString('hello'); // should return 'olleh'
</script>