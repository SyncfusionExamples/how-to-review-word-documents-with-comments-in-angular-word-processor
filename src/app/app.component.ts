import { Component, ViewChild } from '@angular/core';
import { DocumentEditorComponent, DocumentEditorContainerComponent } from '@syncfusion/ej2-angular-documenteditor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myangularproject';
  @ViewChild('documentEditor') editorObj !: DocumentEditorContainerComponent;
  public onBtnClk(){
    // this.editorObj.documentEditor.editor.insertComment('Need more clarification on this sentence');
    this.editorObj.documentEditor.editor.deleteAllComments();
  }

  public nextComment(){
    this.editorObj.documentEditor.selection.navigateNextComment();
  }

  public previousComment(){
    this.editorObj.documentEditor.selection.navigatePreviousComment();
  }

  public protection(){
    this.editorObj.documentEditor.editor.enforceProtection('123', 'CommentsOnly');
  }

  public removeProtection(){
    this.editorObj.documentEditor.editor.stopProtection('123');
  }
}
