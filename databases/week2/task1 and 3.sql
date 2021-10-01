--task1
--Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id.
INSERT INTO task (title,description,created,updated,due_date,status_id,user_id) VALUES ("Adding","Adding new row", "2021-09-22 12:06:06", "2021-09-27 18:06:06","2021-09-30 12:00:00",1, 2);
--•	Change the title of a task.
UPDATE task SET title = "Did HYF Homework"WHERE id = 10;
--•	Change a task due date
UPDATE task SET due_date = now() WHERE id = 1;
--•	Change a task status
UPDATE task SET status_id = 3 WHERE id = 5;
--•	Mark a task as complete.
UPDATE task SET status_id = (SELECT id FROM status WHERE name = 'Done')WHERE id = 19;
---- Delete a task
DELETE FROM task WHERE id = 37;
--task 3
--•	Get all the tasks assigned to users whose email ends in @spotify.com
SELECT user.id,task.title,user.email FROM user, user_task, task WHERE user.id = user_task.user_id AND user_task.task_id = task.id AND user.email LIKE "%@spotify.com";
--•	Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT * FROM task JOIN user_task ON task.id = user_task.task_id JOIN user ON user.id = user_task.user_id WHERE user.name = 'Donald Duck' AND task.status_id = 1;
--•	Get all the tasks for 'Maryrose Meadows' that were created in september
SELECT  task.* FROM task JOIN user_task ON task.id = user_task.task_id JOIN user ON user.id = user_task.user_id WHERE user.name = 'Maryrose Meadows' AND month(created) = 9;
--•	Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november.WHERE
SELECT MONTH(created) AS month_number, count(*) AS total FROM task GROUP BY month(created);