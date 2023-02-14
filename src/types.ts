
type SearchRecordOptions = {
  isDrawerRecord: boolean;

}

export class SearchRecord{
  name: string;
  link: string;
  price: number;
  imageUrl: string;
  options: SearchRecordOptions;

  constructor(name: string, link: string, price: number, imageUrl: string, options: SearchRecordOptions = { isDrawerRecord: false } ){
    this.name = name;
    this.link = link;
    this.price = price;
    this.imageUrl = imageUrl;
    this.options = options;
  }
}
