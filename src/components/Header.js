import React from "react";

const Header = () => {
  return (
    <header id="top-head" className="uk-position-fixed">
			<div className="uk-container uk-container-expand uk-background-primary">
				<nav className="uk-navbar uk-light" data-uk-navbar="mode:click; duration: 250">
					<div className="uk-navbar-left">
						<div className="uk-navbar-item uk-hidden@m">
							<a className="uk-logo" href="1"><img className="custom-logo" src="img/dashboard-logo-white.svg" alt=""/></a>
						</div>
						<ul className="uk-navbar-nav uk-visible@m">
							<li><a href="1">Accounts</a></li>
							<li>
								<a href="1">Settings <span data-uk-icon="icon: triangle-down"></span></a>
								<div className="uk-navbar-dropdown">
									<ul className="uk-nav uk-navbar-dropdown-nav">
										<li className="uk-nav-header">YOUR ACCOUNT</li>
										<li><a href="1"><span data-uk-icon="icon: info"></span> Summary</a></li>
										<li><a href="1"><span data-uk-icon="icon: refresh"></span> Edit</a></li>
										<li><a href="1"><span data-uk-icon="icon: settings"></span> Configuration</a></li>
										<li className="uk-nav-divider"></li>
										<li><a href="1"><span data-uk-icon="icon: image"></span> Your Data</a></li>
										<li className="uk-nav-divider"></li>
										<li><a href="1"><span data-uk-icon="icon: sign-out"></span> Logout</a></li>
									</ul>
								</div>
							</li>
						</ul>
						<div className="uk-navbar-item uk-visible@s">
							<form action="dashboard.html" className="uk-search uk-search-default">
								<span data-uk-search-icon></span>
								<input className="uk-search-input search-field" type="search" placeholder="Search"/>
							</form>
						</div>
					</div>
					<div className="uk-navbar-right">
						<ul className="uk-navbar-nav">
							<li><a href="1" data-uk-icon="icon:user" title="Your profile" data-uk-tooltip><span></span></a></li>
							<li><a href="1" data-uk-icon="icon: settings" title="Settings" data-uk-tooltip><span></span></a></li>
							<li><a href="1" data-uk-icon="icon:  sign-out" title="Sign Out" data-uk-tooltip><span></span></a></li>
							<li><a className="uk-navbar-toggle" data-uk-toggle data-uk-navbar-toggle-icon href="#offcanvas-nav" title="Offcanvas" data-uk-tooltip><span></span></a></li>
						</ul>
					</div>
				</nav>
			</div>
		</header>
  );
};

export default Header;
