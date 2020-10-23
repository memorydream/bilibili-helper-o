import {Feature} from "Libs/feature";

export class globalSubPageBug extends Feature {
    constructor() {
        super({
            name: 'globalSubPageBug',
            kind: 'global',
            description: '当kind设置为global时，subpage报错的问题复现',
            settings: {
                on: true,
                title: 'global sub page bug',
                description: '当kind设置为global时，subpage报错的问题复现',
                subPage: {
                    type: 'checkbox',
                    title: 'global sub page bug',
                    options: [
                        {
                            key: 'to',
                            title: 'test one',
                            on: false,
                        },
                    ],
                },
            },
        });
    }
}