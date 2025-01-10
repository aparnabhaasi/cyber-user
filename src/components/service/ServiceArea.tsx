

import Link from 'next/link';
import React from 'react';

const ServiceArea = () => {
  return (
    <>
      <section className="service_area section-padding">
			<div className="container">	
				<div className="row">								
					<div className="col-lg-6 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
						<div className="single_service">
							<img src="assets/img/service1.png" className="img-fluid" alt="image" />
							<h2>Physical Protection</h2>
							<p>Physical security encompasses strategies and measures implemented to protect personnel, assets, and information from unauthorized access, damage, theft, or other security breaches.</p>
							<Link href="/service-details">Read More <i className="ti-arrow-top-right"></i></Link>
						</div>
					</div>
					<div className="col-lg-6 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
						<div className="single_service">
							<img src="assets/img/service2.png" className="img-fluid" alt="image" />
							<h2>Network protection</h2>
							<p>Organizations and companies managing significant volumes of data implement a range of solutions to counter various cyber threats</p>
							<Link href="/service-details">Read More <i className="ti-arrow-top-right"></i></Link>
						</div>
					</div>
					</div>
					<div className="row">	
					<div className="col-lg-6 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
						<div className="single_service">
							<img src="assets/img/service3.png" className="img-fluid" alt="image" />
							<h2>Endpoint protection</h2>
							<p>Endpoint security refers to the practice of safeguarding devices such as workstations, servers, and other systems capable of supporting security clients from malicious threats and cyberattacks.</p>
							<Link href="/service-details">Read More <i className="ti-arrow-top-right"></i></Link>
						</div>
					</div>
					<div className="col-lg-6 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
						<div className="single_service">
							<img src="assets/img/service8.png" className="img-fluid" alt="image" />
							<h2>Application protection</h2>
							<p>Application security encompasses a comprehensive set of measures aimed at safeguarding data and code within applications from theft or manipulation.</p>
							<Link href="/service-details">Read More <i className="ti-arrow-top-right"></i></Link>
						</div>
					</div>
					
				</div>
			</div>
		</section>
    </>
  );
};

export default ServiceArea;