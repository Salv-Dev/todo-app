exports.tb_users = 
    [
        {
            "id": 1,
            "name": "Fulano de tal",
            "email": "email@email.com",
            "pass": "1234",
            "avatar_url": "http://localhost:4000/todo-app/static/avatars/01.jpg"
        },
        {
            "id": 2,
            "name": "Fulano de tal 2",
            "email": "teste@email.com",
            "pass": "5678",
            "avatar_url": "http://localhost:4000/todo-app/static/avatars/11.jpg"
        }
    ]

exports.tb_tasks = 
    [
        {
            "user_id": 1,
            "group_task": [
                {
                    "id": 1,
                    "title_group_task": "Nome do grupo de tarefas",
                    "tasks": [
                        {
                            "task_id": 1,
                            "title_task": "Nome da tarefa 1",
                            "desc_task": "descrição da tarefa",
                            "checked": false,
                            "tags": ["importante", "muito importante"],
                            "date": "01/01/2020"
                        },
                        {
                            "task_id": 2,
                            "title_task": "Nome da tarefa 2",
                            "desc_task": "descrição da tarefa",
                            "checked": false,
                            "tags": ["importante", "muito importante"],
                            "date": "01/01/2020"
                        }
                    ]
                }
            ]
        },
        {
            "user_id": 2,
            "group_task": [
                {
                    "id": 1,
                    "title_group_task": "Nome do grupo de tarefas",
                    "tasks": [
                        {
                            "task_id": 1,
                            "title_task": "Nome da tarefa 1",
                            "desc_task": "descrição da tarefa",
                            "checked": false,
                            "tags": ["importante", "muito importante"],
                            "date": "01/01/2020"
                        },
                        {
                            "task_id": 2,
                            "title_task": "Nome da tarefa 2",
                            "desc_task": "descrição da tarefa",
                            "checked": false,
                            "tags": ["importante", "muito importante"],
                            "date": "01/01/2020"
                        }
                    ]
                }
            ]
        }
]