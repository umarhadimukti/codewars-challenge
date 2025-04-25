const nbYear = (p0, percentage, aug, p) => {
    let percent = percentage / 100;
    let years = 0;

    while (p0 < p) {
        p0 = Math.floor(p0 + (p0 * percent) + aug);
        years++;
    }

    return years;
}

const growth1 = nbYear(1500, 5, 100, 5000);
console.log(growth1);
const growth2 = nbYear(1500000, 2.5, 10000, 2000000);
console.log(growth2);