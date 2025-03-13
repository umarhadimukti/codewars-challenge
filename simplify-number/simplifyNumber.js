const simplifyNumber = (number) =>
{
    const numStr = number.toString();
    const length = numStr.length;

    const result = numStr
        .split('')
        .map((digit, index) => {
            if (digit === '0') return '';
            const pow = length - index - 1;
            return pow === 0 ? digit : `${digit}*${10**pow}`;
        })
        .filter(Boolean)
        .join('+');

    return result;
}

console.log(simplifyNumber(2834))