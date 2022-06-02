import { ReplaySubject } from 'rxjs';
import { Injectable, TemplateRef } from '@angular/core';

@Injectable()
export class WtListDetailsService {
  tplRef = new ReplaySubject<TemplateRef<any>>();
  tpl$ = this.tplRef.asObservable();

  set tpl(template: TemplateRef<any>) {
    this.tplRef.next(template);
  }

  public clear(): void {
    this.tplRef.next(null);
  }
}
