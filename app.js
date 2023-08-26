// Wait for the DOM to be fully loaded before running the code
document.addEventListener("DOMContentLoaded", function() {
    // Get all the sidebar options and content areas
    const sidebarOptions = document.querySelectorAll(".sidebar-options");
    const contents = document.querySelectorAll(".main-contents");

    // Attach a click event listener to each sidebar option
    sidebarOptions.forEach(option => {
        option.addEventListener("click", function() {
            // Get the content ID associated with the clicked option
            const contentId = this.getAttribute("data-content");

            // Hide all content areas
            contents.forEach(content => {
                content.style.display = "none";
            });

            // Show the selected content
            const selectedContent = document.getElementById(contentId);
            selectedContent.style.display = "block";

            sidebarOptions.forEach(option => {
                option.style.backgroundColor = ''; // Reset to default
            });

            // Change color of clicked sidebar option
            this.style.backgroundColor = 'rgba(243, 0, 80, 1)';
        });
    });
    
});
