import { Component, OnInit,Input, Inject, Pipe, PipeTransform } from '@angular/core';
import { ToolActions } from './community-tool-actions.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Params, RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { MD_DIALOG_DATA, MdDialog, MdDialogRef, MdSnackBar} from '@angular/material';
import { KeysPipe } from './community-tool-actions.pipe';

@Component({
  selector: 'calvin-community-tool-actions',
  templateUrl: './community-tool-actions.component.html',
  styleUrls: ['./community-tool-actions.component.css']
})
export class CommunityToolActionsComponent implements OnInit {
  selected = [];
  getresults=[];
  
  checkBoxValue: boolean = false;
  sample = [];
  a=[];
  domainName;
  roleName;
  toolActions=[];
  y={};
  @Input() community;
 
  constructor(private tool: ToolActions, private snackBar:MdSnackBar, private route:ActivatedRoute,@Inject(MD_DIALOG_DATA) public data: any,
  public dialogRef: MdDialogRef<CommunityToolActionsComponent>) { 
  this.domainName = data.domain ; 
  this.roleName=data.role;
  this.toolActions=data.tool;
  console.log('domain name from dialog',this.roleName);  
  console.log('tool',this.toolActions)  ; 
    this.tool.listTools(this.domainName).subscribe(res => {return this.sample.push(res);
    });
    
}

  getCheckboxValue(toolId, status) {
    // console.log(id);
    const grant="true";
    //console.log(status)
    const x={};
    x[status]=grant;
    
    //console.log(x)
    // console.log(action);
    const actions=x;
     const index = this.selected.indexOf(toolId);
     //console.log(index)
    if (index === -1) {
      this.selected.push({toolId,actions});
    } else {
      this.selected.splice(index, 1);
    }
    console.log(this.selected,"fdsgsdgsdg");
    
    return this.selected;
    
  }
  
  exists(toolId, status) {
    console.log(this.selected);
    return this.selected.indexOf({toolId,status}) > -1;
  }
  update()
  {
    // console.log(this.selected);
    // console.log(this.domainName);
    // console.log(this.roleName);
    return this.tool.updateTools(this.domainName,this.roleName,this.selected).subscribe(res=>{
      this.dialogRef.close('close');
      this.snackBar.open('Updated Actions Successfully','X',{
        duration:2000
      });
      return this.sample.push(res);
    });
  }

  ngOnInit() {
    
  }
 
 }
 