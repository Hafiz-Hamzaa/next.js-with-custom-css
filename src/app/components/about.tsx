import Image from "next/image"
import profile from "@/app/assets/yellow-image.jpeg"
export default function About() {
    return(
        <div className="about-section">
        <h1 className="about-title">About Me</h1>
        <p className="about-description">
          I am Hafiz Hamza and I am a student of Second Year at my D.J College and <br /> 
          Now I am also a student of GIAIC. In this journey, I am learning different technologies like programming, designing, development, etc. <br />
          I have gained my confidence and inshallah I will achieve my goals in the future.
        </p>
        <div className="about-image-container">
          <Image src={profile} alt="profile" className="about-image"/>
        </div>
      </div>
    )
}