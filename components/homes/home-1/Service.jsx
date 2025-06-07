import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
import React from "react";

export default function Service() {
	return (
		<div className="container position-relative">
			<div className="row">
				<div className="col-lg-6 mb-md-60 mb-sm-30">
					<h2 className="section-caption mb-xs-10">Our Services</h2>
					<h3 className="section-title mb-30">
						<AnimatedText text="We craft solutions with intent and precision" />
					</h3>
					<div className="row">
						<div className="col-lg-10">
							<p
								className="section-descr mb-50 mb-sm-30 wow fadeInUp"
								data-wow-delay="0.4s"
							>
								We help businesses overcome complexity with smart design, clear
								thinking, and scalable development — transforming ideas into
								powerful digital solutions.
							</p>
						</div>
					</div>
					<ul
						className="nav nav-tabs services-tabs wow fadeInUp"
						data-wow-delay="0.55s"
						role="tablist"
					>
						<li role="presentation">
							<a
								href="#services-item-1"
								className="active"
								aria-controls="services-item-1"
								role="tab"
								aria-selected="true"
								data-bs-toggle="tab"
							>
								Branding Stategy <span className="number">01</span>
							</a>
						</li>
						<li role="presentation">
							<a
								href="#services-item-2"
								aria-controls="services-item-2"
								role="tab"
								aria-selected="false"
								data-bs-toggle="tab"
							>
								UI/UX Design<span className="number">02</span>
							</a>
						</li>
						<li role="presentation">
							<a
								href="#services-item-3"
								aria-controls="services-item-3"
								role="tab"
								aria-selected="false"
								data-bs-toggle="tab"
							>
								Web Development <span className="number">03</span>
							</a>
						</li>
						<li role="presentation">
							<a
								href="#services-item-4"
								aria-controls="services-item-4"
								role="tab"
								aria-selected="false"
								data-bs-toggle="tab"
							>
								App Development <span className="number">04</span>
							</a>
						</li>
						<li role="presentation">
							<a
								href="#services-item-5"
								aria-controls="services-item-5"
								role="tab"
								aria-selected="false"
								data-bs-toggle="tab"
							>
								DevOps Enablement <span className="number">05</span>
							</a>
						</li>
						<li role="presentation">
							<a
								href="#services-item-6"
								aria-controls="services-item-6"
								role="tab"
								aria-selected="false"
								data-bs-toggle="tab"
							>
								Third-Party Audit <span className="number">06</span>
							</a>
						</li>
					</ul>
				</div>
				<div
					className="col-lg-6 d-flex wow fadeInLeft"
					data-wow-delay="0.55s"
					data-wow-offset={275}
				>
					<div className="tab-content services-content">
						{/* Tab Content */}
						<div
							className="tab-pane services-content-item show fade active"
							id="services-item-1"
							role="tabpanel"
						>
							<div className="services-text">
								<div className="services-text-container">
									<h4 className="services-title">Branding Strategy</h4>
									<p className="text-gray mb-0">
										We help shape your brand identity with clarity and purpose —
										crafting strategies that resonate with your audience and lay
										the foundation for long-term success.
									</p>
								</div>
							</div>
							<Image
								width={945}
								height={1016}
								className="services-image"
								src="/assets/images/services/service-1.jpg"
								alt="Image Description"
							/>
						</div>
						{/* End Tab Content */}
						{/* Tab Content */}
						<div
							className="tab-pane services-content-item fade"
							id="services-item-2"
							role="tabpanel"
						>
							<div className="services-text">
								<div className="services-text-container">
									<h4 className="services-title">UI/UX Design</h4>
									<p className="text-gray mb-0">
										Our design-first approach ensures every product is
										intuitive, accessible, and built around real user needs. We
										blend empathy with aesthetics to create experiences that
										truly connect.
									</p>
								</div>
							</div>
							<Image
								width={945}
								height={1016}
								className="services-image"
								src="/assets/images/services/service-2.jpg"
								alt="Image Description"
							/>
						</div>
						{/* End Tab Content */}
						{/* Tab Content */}
						<div
							className="tab-pane services-content-item fade"
							id="services-item-3"
							role="tabpanel"
						>
							<div className="services-text">
								<div className="services-text-container">
									<h4 className="services-title">Web Development</h4>
									<p className="text-gray mb-0">
										From sleek frontends to powerful backends, we build
										scalable, secure, and future-ready digital platforms
										tailored to your business goals.
									</p>
								</div>
							</div>
							<Image
								width={945}
								height={1016}
								className="services-image"
								src="/assets/images/services/service-3.jpg"
								alt="Image Description"
							/>
						</div>
						{/* End Tab Content */}
						{/* Tab Content */}
						<div
							className="tab-pane services-content-item fade"
							id="services-item-4"
							role="tabpanel"
						>
							<div className="services-text">
								<div className="services-text-container">
									<h4 className="services-title">App Development</h4>
									<p className="text-gray mb-0">
										We craft fast, reliable, and engaging mobile applications
										that deliver performance on every platform — native or
										cross-platform — always with a user-first mindset.
									</p>
								</div>
							</div>
							<Image
								width={945}
								height={1016}
								className="services-image"
								src="/assets/images/services/service-4.jpg"
								alt="Image Description"
							/>
						</div>
						{/* End Tab Content */}
						{/* Tab Content */}
						<div
							className="tab-pane services-content-item fade"
							id="services-item-5"
							role="tabpanel"
						>
							<div className="services-text">
								<div className="services-text-container">
									<h4 className="services-title">DevOps Enablement</h4>
									<p className="text-gray mb-0">
										We streamline your development and deployment workflows
										through automation, continuous integration, and cloud-native
										practices — helping you scale faster, with fewer hiccups.
									</p>
								</div>
							</div>
							<Image
								width={945}
								height={1016}
								className="services-image"
								src="/assets/images/services/service-5.jpg"
								alt="Image Description"
							/>
						</div>
						{/* End Tab Content */}
						{/* Tab Content */}
						<div
							className="tab-pane services-content-item fade"
							id="services-item-6"
							role="tabpanel"
						>
							<div className="services-text">
								<div className="services-text-container">
									<h4 className="services-title">Third-Party Audit</h4>
									<p className="text-gray mb-0">
										Our independent audits identify hidden gaps in performance,
										security, and usability — ensuring your digital products
										stay sharp, reliable, and ahead of the curve.
									</p>
								</div>
							</div>
							<Image
								width={945}
								height={1016}
								className="services-image"
								src="/assets/images/services/service-6.jpg"
								alt="Image Description"
							/>
						</div>
						{/* End Tab Content */}
					</div>
				</div>
			</div>
		</div>
	);
}
