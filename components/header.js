function createHeader(pageTitle, systemName) {
    // Set the document title
    document.title = `${pageTitle} | ${systemName}`;

    // Define metadata elements
    const metaTags = [
        { name: "charset", content: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "author", content: "Dexignlabs" },
        { name: "robots", content: "index, follow" },
        { name: "description", content: "Empower your cryptocurrency trading platform with Jiade, the ultimate Crypto Trading UI Admin Bootstrap 5 Template." },
        { name: "keywords", content: "Admin Dashboard, Bootstrap Template, Responsive Design, Crypto Trading, UI Components" },
    ];

    // Add metadata to head
    metaTags.forEach(({ name, content }) => {
        const meta = document.createElement("meta");
        meta.setAttribute("name", name);
        meta.setAttribute("content", content);
        document.head.appendChild(meta);
    });

    // Create header element
    const header = document.createElement("header");
    header.classList.add("header");
    header.innerHTML = `
        <link rel="shortcut icon" type="image/png" href="images/favicon.png">
        <link href="vendor/bootstrap-select/dist/css/bootstrap-select.min.css" rel="stylesheet">
        <link rel="stylesheet" href="vendor/swiper/css/swiper-bundle.min.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0">
        <link class="main-css" href="css/style.css" rel="stylesheet">

    `;

    document.body.prepend(header);
}

// Export function
export { createHeader };
