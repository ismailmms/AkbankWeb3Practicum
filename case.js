
	function oddishOrEvenish(sayi) {
    sum = 0;
    while (sayi > 0) {
        sum += sayi % 10;
        sayi = Math.floor(sayi / 10);
    }

    if (sum % 2 === 0) {
        console.log("Evenish")
    } else {
        console.log("Oddish");
    }
}

//Test sayilar
oddishOrEvenish(610);
oddishOrEvenish(5352);
oddishOrEvenish(81861);
oddishOrEvenish(7348);
oddishOrEvenish(711);
 