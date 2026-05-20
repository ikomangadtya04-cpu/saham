 const searchInput =
        document.getElementById("searchInput");

        searchInput.addEventListener(
        "keyup",

        function(){

            const filter =
            searchInput.value.toLowerCase();

            const rows =
            document.querySelectorAll(
            "#stockTable tbody tr"
            );

            rows.forEach(row => {

                const text =
                row.textContent
                .toLowerCase();

                row.style.display =
                text.includes(filter)
                ? ""
                : "none";

            });

        });