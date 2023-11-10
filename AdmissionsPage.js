import React from 'react';
import './Styles/AdmissionsPage.css';

const AdmissionsPage = () => {
  return (
    <div className="admission-process">
      <h1>Admission Process</h1>
      <p>
        At Milton Margai Technical University, we have a straightforward and
        transparent admission process to help you join our diverse and
        innovative community.
      </p>

      <h2>Step 1: Check Eligibility</h2>
      <p>
        Before applying, make sure to review our admission requirements and
        ensure you meet the eligibility criteria for your chosen program.
      </p>

      <h2>Step 2: Submit Application</h2>
      <p>
        Visit our <a href="https://www.example.com/application">online application platform</a> to complete your application. Please provide all required documents and information accurately.
      </p>

      <h2>Step 3: Application Review</h2>
      <p>
        Our admission committee will review your application and supporting
        documents. You will be notified of the admission decision via email.
      </p>

      <h2>Step 4: Acceptance and Enrollment</h2>
      <p>
        Upon acceptance, you will receive instructions on how to enroll in your
        chosen program. Make sure to complete all required enrollment steps.
      </p>

      <p>
        If you have any questions or need assistance during the admission
        process, please don't hesitate to <a href="mailto:admissions@example.com">contact our admissions office</a>.
      </p>
    </div>
  );
};

export default AdmissionsPage;
