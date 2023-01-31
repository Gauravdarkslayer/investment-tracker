import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.less']
})
export class ToolbarComponent {
  @Input() backUrl:string='';
  @Input() text:string='Home';

  @Output() backButtonEvent = new EventEmitter<string>();

  onBackButtonClicked(){
    this.backButtonEvent.emit();
  }
}
