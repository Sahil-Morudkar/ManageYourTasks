const express = require("express")
const { getTask, createTask, getsingleTask, updateTask, deleteTask } = require("../controllers/controls")
const router = express.Router()


router.route('/').get(getTask).post(createTask)
router.route('/:id').get(getsingleTask).patch(updateTask).delete(deleteTask)

module.exports = router