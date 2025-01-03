//document.addEventListener("DOMContentLoaded", () => {//gpt
    const rowsPerPage = 10; 
    let currentPage = 1; 
  
    const rows = document.querySelectorAll("#data-table tbody tr"); // Select all rows
    const paginationDiv = document.querySelector(".pagination"); // Select pagination container
  
    const totalPages = Math.ceil(rows.length / rowsPerPage);
  
    // rows of current page
    function renderTable(page) {
      const start = (page - 1) * rowsPerPage;
      const end = start + rowsPerPage;

      //gpt
      rows.forEach((row, index) => {
        row.style.display = index >= start && index < end ? "" : "none"; // Show or hide rows
      });
    }
  
    // pagination buttons
    function renderPagination() {
      paginationDiv.innerHTML = ""; // gpt (clear prev content)

      // Previous button
      const prevButton = document.createElement("button");
      prevButton.textContent = "Previous";
      prevButton.className = currentPage === 1 ? "disabled" : "";
      prevButton.addEventListener("click", () => {
        if (currentPage > 1) {
          currentPage--;
          updateTableAndPagination();
        }
      });
      paginationDiv.appendChild(prevButton);
  
      // Create pgNo button
      for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement("button");
        button.textContent = i;
        button.className = i === currentPage ? "active" : ""; //bolding
        button.addEventListener("click", () => {//gpt
          currentPage = i;
          updateTableAndPagination();
        });
        paginationDiv.appendChild(button);
      }
  
      // Next button
      const nextButton = document.createElement("button");
      nextButton.textContent = "Next";
      nextButton.className = currentPage === totalPages ? "disabled" : "";
      nextButton.addEventListener("click", () => {
        if (currentPage < totalPages) {
          currentPage++;
          updateTableAndPagination();
        }
      });
      paginationDiv.appendChild(nextButton);
    }
  
    // update
    function updateTableAndPagination() {
      renderTable(currentPage); // rows of current page
      renderPagination(); // Update pagination buttons
    }
  
    // Initial render
    updateTableAndPagination();
  //});
  