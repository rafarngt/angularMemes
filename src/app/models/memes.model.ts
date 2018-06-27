export class Memes {
    constructor(
        public _score: number,
​​        public bitly_gif_url: string,
​​        public bitly_url: string,
        public content_url: string,
​​        public embed_url: string,
​​        public id: string,
​​        public images: any,
​​        public import_datetime: Date,
​​        public is_sticker: number,
        public rating: string,
​        public slug: string,
        public source: string,
​        public source_post_url: string,
        public source_tld: string,
        public title: string,
​​        public trending_datetime: Date,
​​        public type: string,
​​        public url: string,
​        public user: any,
    ) {
    }
}
