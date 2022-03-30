import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { noWhitespaceValidator } from 'src/app/core/helpers/form.helper';
import { UtilitiesService } from 'src/app/core/services/utilities.service';
import { Task } from '../../models/tasks.model';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit, OnDestroy {
  tasksForm: FormGroup;
  prevTaskDetails: string;
  searchText: string = '';
  taskList: Task[] = [];
  today = new Date();
  dayString: string;
  isAddButtonDisabled: boolean = false;
  private _subscription: Subscription;

  constructor(
    private _fb: FormBuilder,
    private _tasksService: TasksService,
    private _utilitiesService: UtilitiesService,
    private _translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this._subscription = new Subscription();
    this.dayString = this._translateService.instant(
      `Day.${this._utilitiesService.days[this.today.getDay()]}`
    );
    this.initForm();
    this.getTasksList();
    this._subscription.add(
      this._translateService.onLangChange.subscribe((lang) => {
        this.dayString = this._translateService.instant(
          `Day.${this._utilitiesService.days[this.today.getDay()]}`
        );
      })
    );
  }

  initForm() {
    this.tasksForm = this._fb.group({
      tasksGroup: this._fb.array([]),
    });
  }

  get f(): any {
    return this.tasksForm.controls;
  }
  get taskFormArray(): FormArray {
    return this.tasksForm.get('tasksGroup') as FormArray;
  }

  initTasksFormGroup(data = null) {
    return this._fb.group({
      id: [(data && data.id) || null],
      taskDetails: [
        (data && data.taskDetails) || null,
        [Validators.required, Validators.maxLength(300), noWhitespaceValidator],
      ],
      isChecked: [(data && data.isChecked) || false],
      editMode: [data ? false : true],
    });
  }

  getTaskModel(taskControl): Task {
    return {
      id: taskControl.value.id,
      taskDetails: taskControl.value.taskDetails,
      isChecked: taskControl.value.isChecked,
    };
  }

  onSearch() {
    const filteredTaskList = this.taskList.filter((i) =>
      i.taskDetails.trim().includes(this.searchText)
    );
    while (this.taskFormArray.length !== 0) {
      this.taskFormArray.removeAt(0);
    }
    for (let task of filteredTaskList) {
      this.onAddNewRecord(task);
    }
  }

  onEnableEditMode(index) {
    const taskControl = this.taskFormArray.controls[index];
    if (taskControl.value.isChecked) {
      return;
    }
    this.prevTaskDetails = taskControl.value.taskDetails;
    taskControl.patchValue({ editMode: true });
  }

  onCancelEditMode(index) {
    const taskControl = this.taskFormArray.controls[index];
    taskControl.patchValue({
      editMode: false,
      taskDetails: this.prevTaskDetails,
    });
    this.prevTaskDetails = '';
  }

  onRemoveRecord(index) {
    this.taskFormArray.removeAt(index);
    this.isAddButtonDisabled = false;
  }

  onDeleteTask(index) {
    const taskControl = this.taskFormArray.controls[index];
    this.onRemoveRecord(index);
    this.deleteTask(taskControl.value.id);
  }

  onCheckedTask(isChecked, index) {
    const taskControl = this.taskFormArray.controls[index];
    taskControl.patchValue({ isChecked: isChecked });
    const taskObj = this.getTaskModel(taskControl);
    this.updateTask(taskObj);
  }

  onSaveChanges(index) {
    const taskControl = this.taskFormArray.controls[index];
    if (taskControl.invalid) {
      return;
    }
    const taskObj = this.getTaskModel(taskControl);
    if (taskControl.value.id) {
      this.updateTask(taskObj);
      taskControl.patchValue({ editMode: false });
    } else {
      this.addTask(index, taskObj);
    }
  }

  onAddNewRecord(task = null) {
    this.taskFormArray.push(this.initTasksFormGroup(task));
    !task && (this.isAddButtonDisabled = true);
  }

  getTasksList() {
    this._subscription.add(
      this._tasksService.getTasksList().subscribe((response) => {
        if (response) {
          for (let key in response) {
            const task: Task = {
              id: key,
              taskDetails: response[key].taskDetails,
              isChecked: response[key].isChecked,
            };
            this.taskList.push(task);
            this.onAddNewRecord(task);
          }
        } else {
          this.onAddNewRecord();
        }
      })
    );
  }

  addTask(taskControlIndex, task) {
    this._subscription.add(
      this._tasksService.addTask(task).subscribe((response) => {
        if (response) {
          const id = response.name;
          const taskControl = this.taskFormArray.controls[taskControlIndex];
          taskControl.patchValue({ id: id, editMode: false });
          this.taskList.push(task);
          this.isAddButtonDisabled = false;
        }
      })
    );
  }

  deleteTask(id) {
    this._subscription.add(
      this._tasksService.deleteTaskById(id).subscribe((response) => {
        if (response) {
          this.taskList = this.taskList.filter((i) => i.id != id);
        }
      })
    );
  }

  updateTask(task: Task) {
    this._subscription.add(
      this._tasksService.updateTask(task.id, task).subscribe((response) => {
        if (response) {
          const taskObj = this.taskList.find((i) => i.id == task.id);
          taskObj.isChecked = task.isChecked;
          taskObj.taskDetails = task.taskDetails;
        }
      })
    );
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
