import styles from "./Share.module.css";
import { useState, useRef } from "react";

const Share = () => {
  const [display, setDisplay] = useState({ display: "none" });
  const pageDataShare = useRef({
    url: encodeURI(document.location.href),
    content: encodeURI("Check out timer for current Mission Launch")
  });

  function handleClick() {
    if (display.display == "none") {
      setDisplay({ display: "block" });
    } else {
      setDisplay({ display: "none" });
    }
  }

  return (
    <div className={styles.shareContainer}>
      <div onClick={handleClick} className={styles.sharebtn}>
        <i className="fas fa-share"></i>
      </div>

      <div style={display} className={styles.socialMedia}>
        <div className={styles.whatsapp}>
          <a
            href={`https://api.whatsapp.com/send?text=${pageDataShare.current.content} ${pageDataShare.current.url}`}
            target="_blank"
          >
            <i id={styles.whats} className="fab fa-whatsapp"></i>
          </a>
        </div>
        <div>
          <a
            href={`https://www.facebook.com/sharer.php?u=${pageDataShare.current.url}`}
            target="_blank"
          >
            <i id={styles.facebook} className="fab fa-facebook"></i>
          </a>
        </div>
        <div>
          <a
            href={`https://pinterest.com/pin/create/bookmarklet/?media=[post-img]&url=${pageDataShare.current.url}&is_video=[is_video]&description=${pageDataShare.current.content}
`}
            target="_blank"
          >
            <i id={styles.pinterest} className="fab fa-pinterest"></i>
          </a>
        </div>
        <div>
          <a
            href={`https://twitter.com/share?url=${pageDataShare.current.url}&text=${pageDataShare.current.content}
`}
            target="_blank"
          >
            <i id={styles.twitter} className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Share;
