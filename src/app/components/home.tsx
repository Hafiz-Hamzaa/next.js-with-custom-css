import Image from "next/image";
import logo from "@/app/assets/facebook-logo.png"
import github from "@/app/assets/github-logo.png"
import pic from "@/app/assets/yellow-image.jpeg"

export default function Hero(){
    return(
        <div className="home-section">
        {/* <!-- Text Content --> */}
        <div className="text-content">
          <h1 className="title">
            Hello, Its Me <br/>
            <span className="name">Hafiz Hamza</span> <br/>
            <span>And I am a <span className="highlight">Junior Developer</span></span>
          </h1>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel veniam
            enim et, obcaecati porro veritatis qui nobis libero quia. <br />
            Consequuntur architecto aliquid! Consequuntur hic tempore assumenda
            ratione cupiditate aliquam ex.
          </p>
          <div className="social-icons">
            <Image className="icon" src={logo} alt="logo"/>
            <Image className="icon" src={github} alt="github"/>
          </div>
          <a href="https://milestone5-fawn-omega.vercel.app/" className="download-btn">
            Download CV
          </a>
        </div>
    
        {/* <!-- Profile Image --> */}
        <div className="profile-image">
          <Image src={pic} alt="profile" className="profile-img"/>
        </div>
        </div>
      
    )
}