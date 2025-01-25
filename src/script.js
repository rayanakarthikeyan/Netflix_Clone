// Select all elements with the class "FAQ__title"
let accordian = document.getElementsByClassName("FAQ__title");

// Loop through each "FAQ__title" element
for (let i = 0; i < accordian.length; i++) {
  // Add a click event listener to each element
  accordian[i].addEventListener("click", function () {
    // Get the icon element within the FAQ__title
    let icon = this.querySelector("i");

    // Toggle between "fa-plus" and "fa-times" classes
    icon.classList.toggle("fa-plus");
    icon.classList.toggle("fa-times");

    // Get the next sibling element (content panel) of the clicked "FAQ__title"
    let content = this.nextElementSibling;

    // Toggle the max-height property of the content panel
    if (content.style.maxHeight) {
      // If maxHeight is set, collapse the panel by setting it to null
      content.style.maxHeight = null;
      this.setAttribute("aria-expanded", "false"); // Update accessibility attribute
    } else {
      // If maxHeight is not set, expand the panel to match its scroll height
      content.style.maxHeight = content.scrollHeight + "px";
      this.setAttribute("aria-expanded", "true"); // Update accessibility attribute
    }
  });
}
