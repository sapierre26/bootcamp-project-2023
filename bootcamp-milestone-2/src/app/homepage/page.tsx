import React from "react";
import style from "./navbar.module.css";

export default function Page() {
  return (
    <div className="homepage">
        <h1 >My Intro</h1>

        <div>
            <div><img src="IMG-5028.jpg" alt="That's me"/></div>

            <div>
                <p>Hello World! My name is <strong>Sanaia Pierre</strong>. I am a second-year student at the California Polytechnic State University in San Luis Obispo, California. I am
                pursuing a major in Software Engineering and a minor in Architcture. I'm interested in design regarding building and computers.</p>

                <p>Outside of school, I enjoy watching movies and TV shows. I am a really big fan of the superhero genre and Star Wars. I enjoy <em>analyzing</em> movies and finding 
                hidden easter eggs throughout. I love seeing callbacks to past movies, I'm <strong>big</strong> on nostalgia.</p>
            </div>
        </div>
    </div>
  );
}
