function createNavHeader() {
    const menuScrollContainer = document.getElementById("nav-header");

    if (!menuScrollContainer) {
        console.error("Error: #menu-scroll container not found.");
        return;
    }
    const menuDiv = document.createElement("div");

    menuDiv.innerHTML = `
            <a href="index.html" class="brand-logo">

				<div class="brand-title">
					<div style="color: #fff;">${CONFIG.SYSTEM_NAME}</div>
				</div>

			</a>
			<div class="nav-control">
				<div class="hamburger">
					<span class="line"></span><span class="line"></span><span class="line"></span>
				</div>
			</div>
    `;

    menuScrollContainer.appendChild(menuDiv);
}

export { createNavHeader };