function checkSign(num1, num2, num3) {
    let negativeCount = 0;
    if (num1 < 0)  negativeCount ++;
    if (num2 < 0)  negativeCount ++;
    if (num3 < 0)  negativeCount ++;
    if (negativeCount % 2 == 0) {
        console.log('Positive');
    } else{
        console.log('Negative');
    }
    
}

checkSign(5,12,-15)
checkSign(-5,-12,45)