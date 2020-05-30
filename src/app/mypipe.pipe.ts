import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: any, fields: string): string {
    let array = (fields == null ? null : fields.split(','));
    let result = JSON.stringify(value, array);
    return result;
  }

}
