import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '02-ANGULAR-TASK';
  files: File[] = [];
  imgValue : any = []

  @HostListener('dragover', ['$event']) onDragOver(event: any) {
    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener('dragleave', ['$event']) onDragLeave(event: any) {
    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener('drop', ['$event']) onDrop(event: any) {
    event.preventDefault();
    event.stopPropagation();

    const droppedFiles = event.dataTransfer.files;

    for (let i = 0; i < droppedFiles.length; i++) {
      console.log(111);
      this.files.push(droppedFiles[i]);
    }

    this.uploadFiles();
  }

  removeFile(index: number) {
    this.files.splice(index, 1);
  }

  uploadFiles() {
    console.log('Uploading files:', this.files);
  }

  onFileChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;

    if (inputElement.files) {
      this.imgValue = (inputElement.files[0].name)
    }
  }

}
