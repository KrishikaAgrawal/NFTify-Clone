
document.addEventListener("DOMContentLoaded", function() {

    const sidebarOptions = document.querySelectorAll(".sidebar-options");
    const contents = document.querySelectorAll(".main-contents");


    sidebarOptions.forEach(option => {
        option.addEventListener("click", function() {
            const contentId = this.getAttribute("data-content");


            contents.forEach(content => {
                content.style.display = "none";
            });


            const selectedContent = document.getElementById(contentId);
            selectedContent.style.display = "block";

            sidebarOptions.forEach(option => {
                option.style.backgroundColor = '';
            });

            this.style.backgroundColor = 'rgba(243, 0, 80, 1)';
        });
    });
    
});
