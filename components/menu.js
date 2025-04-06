function createMenu() {
	const menuScrollContainer = document.getElementById("menu-scroll");

	if (!menuScrollContainer) {
		console.error("Error: #menu-scroll container not found.");
		return;
	}
	const menuDiv = document.createElement("div");
	menuDiv.classList.add("menu-scroll");

	menuDiv.innerHTML = `
				<div class="dlabnav-scroll">	
					<ul class="metismenu" id="menu">
						<li><a href="dashboard.html" class="" aria-expanded="false">
								<i class="material-symbols-outlined">dashboard</i>
								<span class="nav-text">Dashboard</span>
							</a>
						</li>
						<li><a class="has-arrow" href="javascript:void()" aria-expanded="false">
								<i class="material-symbols-outlined">package</i>
								<span class="nav-text">Package</span>
							</a>
							<ul aria-expanded="false">
								<li><a href="package-create.html">Create Package</a></li>
								<li><a href="package-list.html">List Packages</a></li>
							</ul>

						</li>
						<li><a class="has-arrow" href="javascript:void()" aria-expanded="false">
								<i class="material-symbols-outlined">dashboard</i>
								<span class="nav-text">Dashboard</span>
							</a>
							<ul aria-expanded="false">
								<li><a href="index.html">Dashboard Light</a></li>
								<li><a href="index-2.html">Dashboard Dark</a></li>
								<li><a href="market.html">Market</a></li>
								<li><a href="coin-details.html">Coin Details</a></li>
								<li><a href="portofolio.html">Portofolio</a></li>
							</ul>

						</li>
						<li><a class="has-arrow" href="javascript:void()" aria-expanded="false">
								<i class="material-symbols-outlined">monitoring</i>
								<span class="nav-text">Trading</span>
							</a>
							<ul aria-expanded="false">
								<li><a href="trading-market.html">Market</a></li>
								<li><a href="ico-listing.html">Ico Listing</a></li>
								<li><a href="p2p.html">P2P</a></li>
								<li><a href="future.html">Future</a></li>
							</ul>
						</li>
						<li><a class="has-arrow" href="javascript:void()" aria-expanded="false">
								<i class="material-symbols-outlined">monetization_on</i>
								<span class="nav-text">Crypto</span>
							</a>
							<ul aria-expanded="false">
								<li><a href="market-watch.html">Market Watch </a></li>
								<li><a href="exchange.html">Exchange</a></li>
								<li><a href="banking.html">Banking</a></li>
							</ul>
						</li>
						<li><a class="has-arrow" href="javascript:void()" aria-expanded="false">
								<i class="material-symbols-outlined">lab_profile</i>
								<span class="nav-text">Reports</span>
							</a>
							<ul aria-expanded="false">
								<li><a href="history.html">History</a></li>
								<li><a href="orders.html">Orders</a></li>
								<li><a href="reports.html">Report</a></li>
								<li><a href="user.html">User</a></li>
							</ul>
						</li>
						<li><a class="has-arrow " href="javascript:void()" aria-expanded="false">
								<i class="material-symbols-outlined">apps_outage</i>
								<span class="nav-text">Apps</span>
							</a>
							<ul aria-expanded="false">
								<li><a href="app-profile.html">Profile</a></li>
								<li><a href="edit-profile.html">Edit Profile</a></li>
								<li><a href="post-details.html">Post Details</a></li>
								<li><a class="has-arrow" href="javascript:void()" aria-expanded="false">Email</a>
									<ul aria-expanded="false">
										<li><a href="email-compose.html">Compose</a></li>
										<li><a href="email-inbox.html">Inbox</a></li>
										<li><a href="email-read.html">Read</a></li>
									</ul>
								</li>
								<li><a href="app-calender.html">Calendar</a></li>
								<li><a class="has-arrow" href="javascript:void()" aria-expanded="false">Shop</a>
									<ul aria-expanded="false">
										<li><a href="ecom-product-grid.html">Product Grid</a></li>
										<li><a href="ecom-product-list.html">Product List</a></li>
										<li><a href="ecom-product-detail.html">Product Details</a></li>
										<li><a href="ecom-product-order.html">Order</a></li>
										<li><a href="ecom-checkout.html">Checkout</a></li>
										<li><a href="ecom-invoice.html">Invoice</a></li>
										<li><a href="ecom-customers.html">Customers</a></li>
									</ul>
								</li>
							</ul>
						</li>
						<li><a class="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
							<i class="fa-regular fa-gear fw-bold"></i>
							<span class="nav-text">CMS</span>
						</a>
						<ul aria-expanded="false">
							<li><a href="content.html">Content</a></li>
							<li><a href="content-add.html">Add Content</a></li>
							<li><a href="menu.html">Menus</a></li>	
							<li><a href="email-template.html">Email Template</a></li>		
							<li><a href="add-email.html">Add Email</a></li>		
							<li><a href="blog.html">Blog</a></li>	
							<li><a href="add-blog.html">Add Blog</a></li>	
							<li><a href="blog-category.html">Blog Category</a></li>	
						</ul>
					</li>
						<li><a class="has-arrow " href="javascript:void()" aria-expanded="false">
								<i class="material-symbols-outlined">donut_large</i>
								<span class="nav-text">Charts</span>
							</a>
							<ul aria-expanded="false">
								<li><a href="chart-flot.html">Flot</a></li>
								<li><a href="chart-morris.html">Morris</a></li>
								<li><a href="chart-chartjs.html">Chartjs</a></li>
								<li><a href="chart-chartist.html">Chartist</a></li>
								<li><a href="chart-sparkline.html">Sparkline</a></li>
								<li><a href="chart-peity.html">Peity</a></li>
							</ul>
						</li>
						<li><a class="has-arrow " href="javascript:void()" aria-expanded="false">
								
								<i class="material-symbols-outlined">favorite</i>
								<span class="nav-text">Bootstrap</span>
							</a>
							<ul aria-expanded="false">
								<li><a href="ui-accordion.html">Accordion</a></li>
								<li><a href="ui-alert.html">Alert</a></li>
								<li><a href="ui-badge.html">Badge</a></li>
								<li><a href="ui-button.html">Button</a></li>
								<li><a href="ui-modal.html">Modal</a></li>
								<li><a href="ui-button-group.html">Button Group</a></li>
								<li><a href="ui-list-group.html">List Group</a></li>
								<li><a href="ui-card.html">Cards</a></li>
								<li><a href="ui-carousel.html">Carousel</a></li>
								<li><a href="ui-dropdown.html">Dropdown</a></li>
								<li><a href="ui-popover.html">Popover</a></li>
								<li><a href="ui-progressbar.html">Progressbar</a></li>
								<li><a href="ui-tab.html">Tab</a></li>
								<li><a href="ui-typography.html">Typography</a></li>
								<li><a href="ui-pagination.html">Pagination</a></li>
								<li><a href="ui-grid.html">Grid</a></li>

							</ul>
						</li>
						<li><a class="has-arrow " href="javascript:void()" aria-expanded="false">
								<i class="material-symbols-outlined">scatter_plot</i>
								<span class="nav-text">Plugins</span>
							</a>
							<ul aria-expanded="false">
								<li><a href="uc-select2.html">Select 2</a></li>
								<li><a href="uc-nestable.html">Nestedable</a></li>
								<li><a href="uc-noui-slider.html">Noui Slider</a></li>
								<li><a href="uc-sweetalert.html">Sweet Alert</a></li>
								<li><a href="uc-toastr.html">Toastr</a></li>
								<li><a href="map-jqvmap.html">Jqv Map</a></li>
								<li><a href="uc-lightgallery.html">Light Gallery</a></li>
							</ul>
						</li>
						<li><a href="widget-basic.html" class="" aria-expanded="false">
								<i class="material-symbols-outlined">widgets</i>
								<span class="nav-text">Widget</span>
							</a>
						</li>
						<li><a class="has-arrow " href="javascript:void()" aria-expanded="false">
								<i class="material-symbols-outlined">request_quote</i>
								<span class="nav-text">Forms</span>
							</a>
							<ul aria-expanded="false">
								<li><a href="form-element.html">Form Elements</a></li>
								<li><a href="form-wizard.html">Wizard</a></li>
								<li><a href="form-ckeditor.html">CkEditor</a></li>
								<li><a href="form-pickers.html">Pickers</a></li>
								<li><a href="form-validation.html">Form Validate</a></li>
							</ul>
						</li>
						<li><a class="has-arrow " href="javascript:void()" aria-expanded="false">
								<i class="material-symbols-outlined">table_chart</i>
								<span class="nav-text">Table</span>
							</a>
							<ul aria-expanded="false">
								<li><a href="table-bootstrap-basic.html">Bootstrap</a></li>
								<li><a href="table-datatable-basic.html">Datatable</a></li>
							</ul>
						</li>
						<li><a class="has-arrow " href="javascript:void()" aria-expanded="false">
								<i class="material-symbols-outlined">lab_profile</i>
								<span class="nav-text">Pages</span>
							</a>
							<ul aria-expanded="false">
								<li><a href="page-login.html">Login</a></li>
								<li><a href="page-register.html">Register</a></li>
								<li><a class="has-arrow" href="javascript:void()" aria-expanded="false">Error</a>
									<ul aria-expanded="false">
										<li><a href="page-error-400.html">Error 400</a></li>
										<li><a href="page-error-403.html">Error 403</a></li>
										<li><a href="page-error-404.html">Error 404</a></li>
										<li><a href="page-error-500.html">Error 500</a></li>
										<li><a href="page-error-503.html">Error 503</a></li>
									</ul>
								</li>
								<li><a href="page-lock-screen.html">Lock Screen</a></li>
								<li><a href="empty-page.html">Empty Page</a></li>
							</ul>
						</li>
					</ul>
					<div class="support-box">
						<div class="media"> 
							<span>
								<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="46" viewBox="0 0 40 46">
									  <image id="headphones_1_" data-name="headphones (1)" width="40" height="46" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAuCAYAAABap1twAAAD90lEQVRYhdWZa4hVVRTHf3fUbOjJkGaSHzITShSitJjsTRQZZga9MSGoDxYmfesBamBp9GWo+VDSe7KXlRWEhUVRNllQiCVMhGXJaAk1Fo1G8pc9rBOL3b7nPs493ukPG9Z+rf2/a5+91tr7ViRRABOAM4DpwFTgRFP1K7ADGAC2A4PNLjG2yXnXANcD3cCUGmMDuX7gNSt/N7RSsGCd5UhJKyTtVPPYLWmNpOPqXbfeLV4ErAYmJfrCdm4Bvgf2ht8MdAGnArOBkxJzfgPuB3qLWnCcpHUJe30r6R5JJ9RhhWMlLZH0VULP29ZfdX6e4kmStkUKv5N0ixszxRbvk7RZ0nYr/ZJelrRM0jQ3foGkrZHOH6IxdRGcIGkwUtTj+hcbkXqxQ9Kdbv7D0bw/JE1thOBApGCR67s3h9RBK9XQF1nTY4+kzphLR+KzfBM4zdUvB55z9U4nBxfypLmd4A8nWzkduBp4Atjlxp8crXOOq08E3q91SG6IftXNCeuOkfSgpKUm1zokHZLuktQrqSvRf2W05tK8LR52A3sb8JFFy8qIZGeK4H1uwK7DSC4r/tA9liLorXddGwheHFlxnCfoT9RgG8ilrHi73Cm+zZ2bnprhpzw86jSH8DoSi4+3ONplHTOBbW0iGNzQTyYfAKYFC17gyO1vI7mAn4EfTR4PXNhhmUWGDe3j9i8+cHIlS7dCJDgTWAP82V5+Iyldj2Xjy4um/KUjFYtHFbI7yY3AKY7YMPAF8MlhIns2cB5wlGsLicjTwTnenZMerZc0tmTn/EzO+g+ELZ6b88sWAhtLtFwfcGtO/6zYzWwGHgHWubZLgEtLIDcLuMnV37C1fU44FN+LXwQeN3kfcIfJ84BNLSY4z8mvA9eavAC4LOuIT/FEJ3/j5DJO+5gqa032g/IWPsbJ/7SOV1Ln0U6u+EGj3g+ORoL/Pwse4ere5fzu5GZfwfLgdQ5V4TBCcL+re6ft76xlY3YVDiN3kvlReHlJ0gtR21UlhLg5ibAah7212eCNOfHw8xLj8Fs56wY8lR2SK4D3Etv4qYW6shCeR97N0a04Yb3IvoFA/LPkW0l1zLT5Ye5HwNcNzA33ovOB3cAyYIa1r2zVVvUltufVJvSE1G6f09HdCnKv5HxD7zSgp1vSkJu7SQ28UVfDWcCXrm+t3WeXuLaQQu2JkoMMBy2LDnrmu3bZ5emXotZ7yLsE176qxunMwwFJ52a6ioY6Hw2GnfxXk/rW20Nof9ZQdIvDyfvY1Vcb0eWu7Xn7e6KSmF+xT2KneYyB/wwoSDDgQ3MvKWwpGjJbkc2E9DyQjBHuN9WI141WviyE21n47y4gWO7Zwpk4cAiPK9af4ZZaXAAAAABJRU5ErkJggg=="/>
								</svg>
							</span>	

						</div>
						<div class="info">
							<p>Jiade Crypto Trading UI Template</p>
							<a href="javascript:void(0);" class="btn bg-white text-black w-75 btn-sm">Supports</a>
						</div>
					</div>
					<div class="copyright">
						<p><strong>Jiade Crypto Trading UI Template</strong> © <span class="current-year">2024</span> All Rights Reserved</p>
						<p class="fs-12">Made with <span class="heart"></span> by DexignLab</p>
					</div>
				</div>
    `;

	menuScrollContainer.appendChild(menuDiv);
}

export { createMenu };