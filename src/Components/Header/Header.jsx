import React, { useState } from "react";
import styles from "./Header.module.css";
import { HashLink as Link } from "react-router-hash-link";
import { HiMenu } from "react-icons/hi";
function Header() {
  const [displayMenu, setDisplayMenu] = useState(false);
  const toggleDisplay = () => {
    setDisplayMenu(!displayMenu);
  };
  return (
    <div className={styles.headerContainer}>
      <div className={styles.title}>
        <Link
          smooth
          to="#home"
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "start" })
          }
          onClick={toggleDisplay}
        >
          certificate generator
        </Link>
      </div>

      <div className={`${styles.menu} ${displayMenu ? styles.show : ""}`}>
        <Link
          smooth
          to="#about"
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "start" })
          }
          onClick={toggleDisplay}
        >
          about
        </Link>
        <Link
          smooth
          to="#templates"
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "start" })
          }
          onClick={toggleDisplay}
        >
          templates
        </Link>
        <Link
          smooth
          to="#upload"
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "start" })
          }
          onClick={toggleDisplay}
        >
          upload
        </Link>
        <Link
          smooth
          to="#view_imports"
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "start" })
          }
          onClick={toggleDisplay}
        >
          view_imports
        </Link>
        <Link
          smooth
          to="#download"
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "start" })
          }
          onClick={toggleDisplay}
        >
          download
        </Link>
      </div>
      <div className={styles.expandBar} onClick={toggleDisplay}>
        <HiMenu />
      </div>
    </div>
  );
}

export default Header;
