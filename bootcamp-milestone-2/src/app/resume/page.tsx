import React from "react";
import style from "./navbar.module.css";

export default function Page() {
  return (
    <div className="resume">
      <h1>Resume</h1>
      <a href="Pierre_Sanaia_Updated_Resume.pdf" download></a>

      <div>
        <div>
          <section>
            <h2>Education</h2>

            <div>
              <h3>
                Califonia Polytechnic State University, San Luis Obispo |
                September 2022 - June 2026
              </h3>
              <p>
                Bachelor of Science in Software Engineering | minor in
                Architecture
              </p>
            </div>
          </section>

          <section>
            <h2>Experience</h2>

            <div>
              <h3>Architecture Intern</h3>
              <p>NIA Architects | July 2022 - August 2022</p>
              <p>
                Through the ACE Mentor Program of Chicago, I was awarded an
                internship at the NIA Architects firm. Put together a company
                budget list and organized site photos. Observed other interns
                and architects working on an apartment complex in
                Auburn-Gresham.
              </p>
            </div>
          </section>

          <section>
            <h2>Projects</h2>

            <div>
              <h3>Website Reconstruction</h3>
              <p>Lindblom Math & Science Academy</p>
              <p>
                Redeveloped and redesigned the Dutch’s Portland website using
                HTML/CSS/Javascript. Then could use that and add my own
                information and media to replace existing content.
              </p>
            </div>
          </section>
        </div>

        <div>
          <section>
            <h2>Coursework</h2>

            <ul>
              <li>Web Development I & II</li>
              <li>CSC 123 Introduction to Computing</li>
              <li>CSC 101 Fundamentals of Computer Science</li>
            </ul>
          </section>

          <section>
            <h2>Skills</h2>

            <ul>
              <li>AutoDesk Fusion360</li>
              <li>HTML/CSS</li>
              <li>SketchUp</li>
            </ul>
          </section>
        </div>
      </div>

      <p>Here's some of my accomplishments!</p>
    </div>
  );
}
