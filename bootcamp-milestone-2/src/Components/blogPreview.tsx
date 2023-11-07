import React from "react";
import style from "./blogPreview.module.css";

export default function BlogPreview() {
  return (
    // replace everything between the <div> & </div> tags
    // with your code from earlier milestones
    <div className={style.div}>
      <h3> Blog Name </h3>
      <div>
        // <img src="./imageLinkHere" alt="img" />
        // we will replace img with Image, made to optimize images produced with
        Next.js
        <Image src="./imageLinkHere" alt="img" width={500} height={500}></Image>
        <p>"October 6th, 2023"</p>
        <p>
          "This was a staff vs. student basketball game we did in collaboration
          with the Men and Women's Basketball teams.", slug: "portfolio.html"
        </p>

        <p>"October 27th, 2023"</p>
        <p>
        "This will be a movie and pajama night theme as we get ready for Halloween!",
      slug: "portfolio.html"
        </p>

        <p>"February 18th, 2024"</p>
        <p>
        "This event is meant to recognize the achievements of members of BSU on campus. It's also an excuse to dress up",
      slug: "portfolio.html"
        </p>
      </div>
    </div>
  );
}
