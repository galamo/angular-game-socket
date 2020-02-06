import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'currencySign'
})
export class CurrencySignPipe implements PipeTransform {

    transform(value: any, ...args): any {
        const [country] = args;
        const cur = currencies[country]
        const { sign, rate } = cur;
        return `${value * rate} ${sign}`
    }

}

const currencies = { usa: { rate: 3.4, sign: "$" }, eu: { rate: 3.8, sign: "\u20AC" } }
