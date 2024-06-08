const toDoList = {
	tasks: [],
	addTask: function(title, priority){

		const newId = this.tasks.length > 0 ? this.tasks.reduce((maxId, task) => task.id > maxId ? task.id : maxId, this.tasks[0].id) + 1 : 0;
		const task = {
			title: title,
			id: newId,
			priority: priority,
		}
		this.tasks.push(task);
	},

	deleteTask: function(id){
		this.tasks =  this.tasks.filter(object => object.id !== id);
	},
	
	updateTask: function(id, title, priority){
		this.tasks = this.tasks.map(object => {
			if(object.id === id){
				return {
					title: title,
					id: id,
					priority: priority,
				}
			}
			return object;
		});
	},

	sortTask: function(keyword, mode){
		switch(keyword){
			case 'id': 
				switch(mode){
					case 'inc':
						this.tasks.sort((a, b) => b.id - a.id);
						break;
					case 'dec':
						this.tasks.sort((a, b) => a.id - b.id);
						break;
					default: console.log('Неверно передан аргумент');
				}
				break;
			case 'priority': 
				switch(mode){
					case 'inc':
						this.tasks.sort((a, b) => a.priority - b.priority);
						break;
					case 'dec':
						this.tasks.sort((a, b) => b.priority - a.priority);
						break;
					default: console.log('Неверно передан аргумент');
				}
				break;
			default: console.log('Неверно передан аргумент');
		}
	},
};

toDoList.addTask('Помыть посуду', 10);
toDoList.addTask('Прочитать книгу', 7);
console.log(toDoList.tasks);
toDoList.deleteTask(0);
console.log(toDoList.tasks);
// toDoList.addTask('Поспать', 15);
// console.log(toDoList.tasks);
toDoList.updateTask(1, 'Сделать дз', 1);
console.log(toDoList.tasks);
toDoList.addTask('Помыть посуду', 10);
toDoList.addTask('Прочитать книгу', 7);
console.log(toDoList.tasks);
toDoList.updateTask(3, 'Сходить в кино', 5);
console.log(toDoList.tasks);
toDoList.sortTask('priority', 'dec');
// toDoList.sortTask('id', 'dec');