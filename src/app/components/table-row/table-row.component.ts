import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: '[app-table-row]',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})
export class TableRowComponent implements OnInit, OnChanges{

  @Input() id!: number;
  @Input() title!: string;
  @Input() author!: string;
  @Input() status!: string;


  nextStatus!: string;
  detailsUrl!: string;
  editUrl!: string;

  constructor(private bookService: BookService) {

  }

  ngOnChanges(): void {
    this.nextStatus = this.status === 'Libre' ? 'Pris' : 'Libre';
  }

  ngOnInit(): void {
    this.detailsUrl = '/book/' + this.id;
    this.editUrl = '/book/edit/' + this.id;
  }


  onClickSwitchBookStatus(newStatus: string) {
    this.bookService.switchBookStatus(+this.id, newStatus);
  }

}
