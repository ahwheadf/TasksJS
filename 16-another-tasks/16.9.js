'use strict';
const ToDoList = {
    lastId: 0,
    tasks: [],

    addTask(data) {
        if (!data) {
            return this;
        }

        data.id = ++this.lastId;
        this.tasks = [...this.tasks, data];
        return this;
    },
    getTask: function (id) {
        return this.tasks.find(({ id: taskId }) => taskId === id);
    },

    deleteTask(id) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
        return this;
    },

    updateTask(id, data) {
        const task = this.getTask(id);
        if (!task) {
            return this;
        }
        Object.assign(task, data);
        return this;
    },
    getList: function () {
        return this.tasks;
    },
    sortTask: function (sortedBy, desc = false) {
        const ALLOW_SORT_PARAMS = ['id', 'priority', 'order'];

        if(!ALLOW_SORT_PARAMS.includes(sortedBy)){
            sortedBy = 'id';
        }
        
        this.tasks.sort(({ [sortedBy]: a }, { [sortedBy]: b }) => (desc ? b - a : a - b));
        return this;
    },
};

const data1 = { title: 'Данные номер 1', priority: 5 },
    data2 = { title: 'Данные номер 2', priority: 2 },
    data3 = { title: 'Данные номер 3', priority: 7 },
    data4 = { title: 'Данные номер 4', priority: 4 },
    data5 = { title: 'Данные номер 5', priority: 11 };

ToDoList.addTask(data1)
    .addTask(data2)
    .addTask(data3)
    .addTask(data4)
    .addTask(data5)
    .deleteTask(10003)
    .updateTask(10004, { title: 'Новое название', priority: 22 })
    .sortTask('priority', true);


console.log(ToDoList.tasks);


// Новый объект 

const newTask = {
	lastId: 0,
	tasks: [],
}

newTask.addTask = ToDoList.addTask.bind(newTask);
newTask.getTask = ToDoList.getTask.bind(newTask);
newTask.deleteTask = ToDoList.deleteTask.bind(newTask);
newTask.updateTask = ToDoList.updateTask.bind(newTask);
newTask.getList = ToDoList.getList.bind(newTask);
newTask.sortTask = ToDoList.sortTask.bind(newTask);

const newData1 = {name: 'Имя 1', description: 'Описание 1', order: 0},
	newData2 = {name: 'Имя 2', description: 'Описание 2', order: 5},
	newData3 = {name: 'Имя 3', description: 'Описание 3', order: 15},
	newData4 = {name: 'Имя 4', description: 'Описание 4', order: 2},
	newData5 = {name: 'Имя 5', description: 'Описание 5', order: 7};


newTask.addTask(newData1)
	.addTask(newData2)
	.addTask(newData3)
	.addTask(newData4)
	.addTask(newData5)
	.deleteTask(1)
	.deleteTask(100)
	.updateTask(2, {name: 'Имя 000', description: 'Описание 0000', order: 0})
	.sortTask('id', false);


console.log(newTask.getList());
console.log(newTask.getTask(2));