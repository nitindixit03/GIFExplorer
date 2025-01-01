import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Followon = () => {
  return (
    <div className="faded-text pt-2">
      <span>Follow on:</span>
      <div className="flex gap-4 pt-3">
        <a href="https://www.linkedin.com/in/nitin-dixit-b1bb37289/">
            <FaLinkedin size={20}/>
        </a>
        <a href="https://www.instagram.com/im.nitindixit/">
            <FaInstagram size={20}/>
        </a>
        <a href="https://x.com/Nitin_Dixit03">
            <FaTwitter size={20}/>
        </a>
      </div>
    </div>
  )
}

export default Followon
