const taskButtons=initialTaskAssign();
const activityLogContainer = document.getElementById("activity-log");
taskButtons.forEach(function (taskButton, index) {
  console.log(index);
  console.log(taskButtons.length);

  taskButton.addEventListener("click", function () {
    alert(`Board updated successfully`);

    let { taskCount, navAmount } = updateTaskCount();
    if (taskCount === 0) {
      alert(`congrats!!! you have completed all current task`);
    }
    setText(taskCount, navAmount);
    taskButton.disabled = true;
    taskButton.classList.add("opacity-50", "cursor-not-allowed");

    // updated activity
    let now = new Date();
    let timeString = now.toLocaleTimeString();
    const task = taskButton.parentNode.parentNode.childNodes[5].innerText;
    updatedActivity(task, timeString);
  });
});
document.getElementById("clear-history").addEventListener("click", function () {
   activityLogContainer.textContent= "";
});
