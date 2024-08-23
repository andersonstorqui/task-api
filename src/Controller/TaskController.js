const Task = require('../Models/TaskModel');

exports.createTask = async (req, res) => {
    try {
        const newTask = await Task.create(req.body);
        res.status(201).json(newTask);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao criar tarefa', details: err.message });
    }
};

exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar tarefas', details: err.message });
    }
};

exports.getTaskById = async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        if (task) {
            res.json(task);
        } else {
            res.status(404).json({ error: 'Tarefa não encontrada' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar a tarefa', details: err.message });
    }
};

exports.updateTask = async (req, res) => {
    try {
        const [updated] = await Task.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedTask = await Task.findByPk(req.params.id);
            res.json(updatedTask);
        } else {
            res.status(404).json({ error: 'Tarefa não encontrada' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Erro ao atualizar a tarefa', details: err.message });
    }
};

exports.deleteTask = async (req, res) => {
    try {
        const deleted = await Task.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.json({ message: 'Tarefa excluída com sucesso' });
        } else {
            res.status(404).json({ error: 'Tarefa não encontrada' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Erro ao excluir a tarefa', details: err.message });
    }
};
