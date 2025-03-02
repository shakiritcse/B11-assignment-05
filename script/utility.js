function initialTaskAssign() {
  const taskButtons = document.querySelectorAll(".btn-task");
  const mytaskCount = taskButtons.length;
  document.getElementById("task-count").innerText = mytaskCount;
  return taskButtons
}
function updateTaskCount() {
  const assignedTasksCounts = document.getElementById("task-count");
  let navAmount = parseInt(document.getElementById("amount").innerText);
  let taskCount = parseInt(assignedTasksCounts.innerText);
  taskCount--;
  navAmount++;
  return { taskCount, navAmount };
}
function setText(taskCount, navAmount) {
  document.getElementById("task-count").innerText = taskCount;
  document.getElementById("amount").innerText = navAmount;
}
// function for updated activty
function updatedActivity(task, realTime) {
  let activityDiv = document.createElement("div");
  activityDiv.classList.add(
    "p-4",
    "border-b",
    "border-gray-300",
    "mb-1",
    "rounded",
    "bg-slate-200",
    "last:border-b-0",
    "text-sm",
    "text-gray-700"
  );
  activityDiv.innerHTML = `
       <p>You have completed the task ${task} at ${realTime}</p>
      `;
  activityLogContainer.appendChild(activityDiv);
}
