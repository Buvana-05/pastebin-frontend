import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PasteService } from './paste.service';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-paste-view',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './paste-view.component.html'
})
export class PasteViewComponent implements OnInit {
  paste$!: Observable<{ content: string }>;

  constructor(
    private route: ActivatedRoute,
    private pasteService: PasteService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.paste$ = this.pasteService.getPaste(id);
  }
}
