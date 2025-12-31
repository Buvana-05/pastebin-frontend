import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PasteService {

  private apiUrl = 'http://localhost:8080/api/pastes';

  constructor(private http: HttpClient) {}

  createPaste(content: string, ttl?: number, maxViews?: number) {
    return this.http.post<any>('http://localhost:8080/api/pastes', {
      content: content,
      ttl: ttl,
      maxViews: maxViews
    });
  }
  

  getPaste(id: string) {
    return this.http.get<{ content: string }>(`${this.apiUrl}/${id}`);
  }
}
