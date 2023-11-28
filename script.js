
    let n1= 1
    let n2= 2
    let n3= 3
    let valorM;

    function cualEsMayor(n1, n2, n3) {
    if (n1 >= n2 && n1 >= n3) {
        valorM = n1;
    } else if (n2 >= n1 && n2 >= n3) {
        valorM = n2;
    } else {
        valorM = n3;
    }

    return valorM;
}

console.log(cualEsMayor(1, 2, 3));

