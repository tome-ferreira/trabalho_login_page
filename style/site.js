document.addEventListener("DOMContentLoaded", function() {
    const newTaskButton = document.getElementById('newTaskButton');
    const popup = document.getElementById('popup');
    const closeButton = document.getElementById('closeButton');
    const editPopup = document.getElementById('editPopup');
    const editCloseButton = document.getElementById('editCloseButton');
    
    // Edit task button
    const editButtons = document.querySelectorAll('.edit-button');

    // Function to open the popup
    function openPopup(popupElement) {
        popupElement.style.display = "block";
    }

    // Function to close the popup
    function closePopup(popupElement) {
        popupElement.style.display = "none";
    }

    // Event listener for the "New Task" button click
    newTaskButton.addEventListener('click', function() {
        openPopup(popup);
    });

    // Event listener for the close button click
    closeButton.addEventListener('click', function() {
        closePopup(popup);
    });

    // Event listener for the edit buttons
    editButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            openPopup(editPopup);
            // Get current task details
            const taskRow = button.closest('tr');
            const taskName = taskRow.querySelector('.task-name').innerText;
            const taskDate = taskRow.querySelector('.task-date').innerText;

            // Fill edit form with current task details
            document.getElementById('editTaskInput').value = taskName;
            document.getElementById('editTaskDate').value = taskDate ? taskDate : ''; // Set initial value for the date input
        });
    });

    // Event listener for the close button in edit popup
    editCloseButton.addEventListener('click', function() {
        closePopup(editPopup);
    });
});
