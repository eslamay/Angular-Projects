import { Component } from '@angular/core';
import { DownloadComponent } from "./components/download/download.component";
import { EditableResumeComponent } from "./components/editable-resume/editable-resume.component";
import { ResumeComponent } from "./components/resume/resume.component";

@Component({
  selector: 'app-root',
  imports: [DownloadComponent, EditableResumeComponent, ResumeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'resume-builder';
}
