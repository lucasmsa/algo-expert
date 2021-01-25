# O(nlog(n)) Time | O(n) Space, where n is the amount of tasks
def taskAssignment(k, tasks):
    tasks_per_worker = []
    old_tasks_order = {}
    
    for idx, task in enumerate(tasks):
        if task in old_tasks_order:
            old_tasks_order[task].append(idx)
        else:
            old_tasks_order[task] = [idx]
            
    tasks = sorted(tasks)

    for worker in range(k):
        first_task = tasks[worker]
        second_task = tasks[-(worker + 1)]

        first_task_idx = old_tasks_order[first_task].pop()
        second_task_idx = old_tasks_order[second_task].pop()
        
        tasks_per_worker.append([first_task_idx, second_task_idx])

    return tasks_per_worker

taskAssignment(3, [1, 3, 5, 3, 1, 4])
