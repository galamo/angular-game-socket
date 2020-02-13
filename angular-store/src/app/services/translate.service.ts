import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TranslateService {

    private dict: any
    constructor() {
        //wrong! use json
        this.dict = {
            spanish: {
                "Lets Move": "Vamos"
            },
            arabic: {
                "Lets Move": "Taal Yazalame"
            }
        }
    }

    translateText(lang: string, keyTranslation: string) {


        const result = this.dict[lang] && this.dict[lang][keyTranslation]
        return result || "No Translation"
    }
}
