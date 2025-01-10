
'use client'

import React from 'react';

const BlogDetailsArea = () => {
  return (
    <>
      <section className="service_area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
              <div className="single_blog_details">
                <img src="assets/img/blog/blog_details.jpg" className="img-fluid sbd" alt="image" />
                  {/* <span><img src="assets/img/blog/b_icon1.png" alt="" /> William Smith</span>
                  <span><img src="assets/img/blog/b_icon2.png" alt="" /> 30 April, 2024</span>
                  <span><img src="assets/img/blog/b_icon3.png" alt="" /> 05 min read</span> */}
                  <h2>India Comes Up With Digital Data Rules With Severe Reprimand And Cybersecurity Requirements</h2>
                  <p>The Indian government has released a draft of the Digital Personal Data Protection (DPDP) Rules for public consultation, aimed at implementing the provisions of the Digital Personal Data Protection Act, 2023.
                  According to the Press Information Bureau (PIB), the proposed rules mandate data fiduciaries to provide clear and accessible information regarding the processing of personal data, thereby facilitating informed consent. Citizens are empowered with rights to demand the erasure of their data, appoint digital nominees, and access user-friendly mechanisms to manage and control their personal information.
                  </p>
                                    <p>The draft rules also emphasize enhanced data protection measures, requiring companies operating in India to adopt robust security protocols, including encryption, access control, and data backup systems, to ensure the confidentiality, integrity, and availability of personal data.

                  The draft rules of the Digital Personal Data Protection (DPDP) Act outline several critical obligations for data fiduciaries to ensure compliance with the legislation. Key provisions include:
                  </p>
              </div>
              <div className="single_ssd_info">
                <h4>Breach Detection and Reporting:</h4>
                <ul>
                    <li>Implement mechanisms to detect and address data breaches, maintaining detailed logs.</li>
                    <li>
                        In the event of a breach, provide a comprehensive report to the Data Protection Board (DPB) within 72 hours 
                        (or longer if permitted), detailing the sequence of events, mitigation measures, and, if known, the identities of those involved.
                    </li>
                </ul>
              </div>
              <div className="single_ssd_info">
                <h4>Data Retention and Erasure:</h4>
                <ul>
                    <li>Delete personal data that is no longer required after a three-year period.</li>
                    <li>
                    Notify individuals at least 48 hours before erasing their data.
                    </li>
                </ul>
              </div>
              <div className="single_ssd_info">
                <h4>Transparency and Accountability:</h4>
                <ul>
                    <li>Clearly display the contact details of a designated Data Protection Officer (DPO) on websites or apps to address queries regarding data processing.</li>
                   
                </ul>
              </div>
              <div className="single_ssd_info">
                <h4>Processing Children's Data:</h4>
                <ul>
                    <li>Obtain verifiable consent from parents or legal guardians before processing personal data of individuals under 18 or persons with disabilities.</li>
                    <li>
                    Exemptions are granted for healthcare professionals, educational institutions, and childcare providers, limited to activities such as health services, education, safety monitoring, and transportation tracking.
                    </li>
                </ul>
              </div>
              <div className="single_ssd_info">
                <h4>Annual Assessments:</h4>
                <ul>
                    <li>Conduct a Data Protection Impact Assessment (DPIA) and a comprehensive audit annually, submitting the results to the DPB.</li>
                    <li>
                    These requirements apply primarily to data fiduciaries classified as "significant."
                    </li>
                </ul>
              </div>
              <div className="single_ssd_info">
                <h4>Cross-Border Data Transfers:</h4>
                <ul>
                    <li>Adhere to federal guidelines on cross-border data transfers.</li>
                    <li>
                    Categories of personal data restricted to storage within India will be determined by a specialized committee.
                    </li>
                </ul>
              </div>
              <div className="single_ssd_info">
                <h4>Government Data Processing Safeguards:</h4>
                <ul>
                    <li>Federal and state agencies must process personal data lawfully, transparently, and in line with established legal and policy standards.</li>
                  
                </ul>
              </div>
              <div className="single_ssd_info">
                <h4>Penalties for Non-Compliance:</h4>
                <ul>
                    <li>Organizations that misuse or fail to protect individuals’ data or neglect to notify the DPB of security breaches may face fines of up to ₹250 crore (approximately $30 million).</li>
                  
                </ul>
              </div>

              {/* <img src="assets/img/blog/blog_details2.jpg" className="img-fluid" alt="image" /> */}
                {/* <div className="comment_form">
                  <h3 className="blog_head_title">Add a Comment</h3>
                  <div className="contact comment-box">
                    <form id="contact-form" onClick={(e) => e.preventDefault()}>
                      <div className="row">
                        <div className="form-group col-md-6">
                          <input type="text" name="name" className="form-control" id="first-name" placeholder="Name" required />
                        </div>
                        <div className="form-group col-md-6">
                          <input type="email" name="email" className="form-control" id="first-email" placeholder="Email" required />
                        </div>
                        <div className="form-group col-md-12">
                          <input type="text" name="subject" className="form-control" id="subject" placeholder="Subject" required />
                        </div>
                        <div className="form-group col-md-12">
                          <textarea rows={6} name="message" className="form-control" id="description" placeholder="Your Message" required ></textarea>
                        </div>
                        <div className="col-md-12">
                          <div className="actions">
                            <button type="submit" value="Send message" name="submit" id="submitButton" className="btn btn_one" title="Submit Your Message!">Submit Comment</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsArea;