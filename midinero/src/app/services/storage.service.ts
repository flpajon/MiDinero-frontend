import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService, StorageTranscoders } from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class StorageAppService {

  constructor(@Inject(LOCAL_STORAGE) private storageService: StorageService) { }

  set(keyName: string, value: any): void {
    this.storageService.set(keyName, value);
  }

  get(keyName: string): any {
    return this.storageService.get(keyName, StorageTranscoders.JSON);
  }

  clear() {
    this.storageService.clear();
  }
}
