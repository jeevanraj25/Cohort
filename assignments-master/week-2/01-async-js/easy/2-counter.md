## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.







<script>
    const counter =0;
    const counterelement = document.getElementById('counter');

    setTimeOut(()=>{
     counter++;
       counterelement=counter;
    },1000)

</script>
































































(Hint: setTimeout)