import { Component } from '@angular/core';
import { TodoItem } from './model/todoItem';
import { TodoList } from './model/todoList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title='TODO';
   private list =new TodoList('Lina Mesrati',[
     new TodoItem('Go to Gym',true),
     new TodoItem('Go for Run',false),
     new TodoItem('Go to Swim',false)
   ]);

    get username():string
    {
      return this.list.user;
    }
    get itemcount():number
    {
      return this.list.items.filter(item => !item.complete).length;
    }
    get item():readonly TodoItem[]
    {
      return this.list.items;
    }
}
