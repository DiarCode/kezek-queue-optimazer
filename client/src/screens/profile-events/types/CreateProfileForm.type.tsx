import { File } from "buffer";

export interface ICreateProfileForm {
  title: string;
  description: string;
  address: string;
  timeBegin: Date;
  timeEnd: Date;
  image: File;
}
