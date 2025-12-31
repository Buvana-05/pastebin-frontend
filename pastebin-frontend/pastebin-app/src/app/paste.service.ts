import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PasteService {

  private apiUrl = 'https://pastebin-backend-kwjl.onrender.com/api/pastes';

  constructor(private http: HttpClient) {}

  createPaste(content: string, ttl?: number, maxViews?: number) {
    return this.http.post<any>('https://pastebin-backend-kwjl.onrender.com/api/pastes', {
      content: content,
      ttl: ttl,
      maxViews: maxViews
    });
  }
  

  getPaste(id: string) {
    return this.http.get<{ content: string }>(`${this.apiUrl}/${id}`);
  }
}
