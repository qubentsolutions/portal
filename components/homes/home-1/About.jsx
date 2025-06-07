"use client";
import Image from "next/image";

export default function About() {
	return (
		<div className="row wow fadeInUp" data-wow-delay="0.5s">
			<div className="col-lg-6 mb-md-60">
				<div className="position-relative">
					{/* Image */}
					<div className="position-relative overflow-hidden">
						<Image
							width={960}
							height={539}
							src="/assets/images/about-image.jpg"
							className="image-fullwidth relative"
							alt="Image Description"
						/>
					</div>
					{/* End Image */}
					{/* Decorative Waves */}
					<div
						className="decoration-1 d-none d-sm-block"
						data-rellax-y=""
						data-rellax-speed={1}
						data-rellax-percentage="0.1"
					>
						<Image
							width="159"
							height="74"
							src="/assets/images/decoration-1.svg"
							className="svg-shape"
							alt=""
						/>
					</div>
					{/* End Decorative Waves */}
				</div>
			</div>
			<div className="col-lg-6 col-xl-5 offset-xl-1">
				<h4 className="h5">Our Mission</h4>
				<p className="text-gray">
					We collaborate closely with our clients to craft and implement
					powerful, enterprise-grade technology solutions — turning complex
					challenges into opportunities for streamlined growth and long-term
					success.
				</p>
				<h4 className="h5">Our Vision</h4>
				<p className="text-gray">
					To build a future where every business effortlessly leverages secure,
					scalable, and affordable IT to achieve its highest aspirations.
				</p>
			</div>
		</div>
	);
}
