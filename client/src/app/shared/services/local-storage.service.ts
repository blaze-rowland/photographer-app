import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() { }

  getItem(name) {
    return localStorage.getItem(name);
  }

  setItem(name, value) {
    return localStorage.setItem(name, value);
  }

  removeItem(name) {
    return localStorage.removeItem(name);
  }
}
