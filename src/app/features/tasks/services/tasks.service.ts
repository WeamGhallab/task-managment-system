import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { Task } from '../models/tasks.model';

@Injectable({ providedIn: 'root' })
export class TasksService {

  constructor(private _httpService: HttpService) {}

  getTasksList() {
    return this._httpService.get('tasks.json');
  }

  updateTask(name:string,task: Task) {
    return this._httpService.patch(`tasks/${name}.json`, task);
  }

  addTask(task: Task) {
    return this._httpService.post('tasks.json', task);
  }

  deleteTaskById(name) {
    return this._httpService.delete(`tasks/${name}.json`);
  }
}
