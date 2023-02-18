
export type SearchRecordOptions = {
  isDrawerRecord: boolean;
}

export class SearchRecord{
  id: number;
  name: string;
  link: string;
  price: number;
  imageSrc: string;
  options: SearchRecordOptions;

  constructor(id: number, name: string, link: string, price: number, imageSrc: string, options: SearchRecordOptions = { isDrawerRecord: false } ){
    this.id = id;
    this.name = name;
    this.link = link;
    this.price = price;
    this.imageSrc = imageSrc;
    this.options = options;
  }
}
