import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IConfirmationData } from './confirmation-data.interface';
import { ConfirmIcon } from './confirm-icon.enum';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmationDialogComponent {
  icons = ConfirmIcon;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IConfirmationData,
    private dialogRef: MatDialogRef<ConfirmationDialogComponent>
  ) { }

  close(confirm: boolean) {
    this.dialogRef.close(confirm);
  }
}
