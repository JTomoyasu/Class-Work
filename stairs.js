function stairs(n) {
    var str = "";
    for (j = 0; j < n; j++) {
        str = "  " + str;
        //spaces accumulate 
    }
    for (i = 0; i < n; i++) {
        /* for (j = i; j < (n - 1); j++) {
            str = "  " + str;
            //spaces accumulate 
        } */
        str=str.substring(2);
        str += " _";
        console.log(str);
    }
}
stairs(20);