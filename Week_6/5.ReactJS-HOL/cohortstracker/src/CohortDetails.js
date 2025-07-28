import React from "react";
import styles from "./CohortDetails.module.css"; // Step 8

function CohortDetails(props) {
  const cohort = props.cohort;

  // Step 10: Dynamic color for heading
  const headingStyle = {
    color: cohort.currentStatus === "Ongoing" ? "green" : "blue"
  };

  return (
    <div className={styles.box}> {/* Step 9: Apply box class */}
      <h3 style={headingStyle}>
        {cohort.cohortCode} - <span>{cohort.technology}</span>
      </h3>
      <dl>
        <dt>Started On</dt>
        <dd>{cohort.startDate}</dd>
        <dt>Current Status</dt>
        <dd>{cohort.currentStatus}</dd>
        <dt>Coach</dt>
        <dd>{cohort.coachName}</dd>
        <dt>Trainer</dt>
        <dd>{cohort.trainerName}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
