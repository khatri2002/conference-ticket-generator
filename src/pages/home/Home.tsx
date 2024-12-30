import classNames from "classnames";
import {
  IconGithub,
  IconInfo,
  IconUpload,
  ImageAvatar,
  LogoFull,
  LogoMark,
} from "../../assets/images";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <img className={styles.logo} src={LogoFull} alt="logo" />
        <div className={styles.formContainer}>
          <h1 className={styles.heroTitle}>
            Your Journey to Coding Conf 2025 Starts Here!
          </h1>
          <h2 className={styles.heroDesc}>
            Secure your spot at next year's biggest coding conference.
          </h2>
          <form className={styles.form}>
            <div
              className={classNames({
                [styles.field]: true,
                [styles.fileField]: true,
                [styles.error]: false,
              })}
            >
              <label className={styles.label}>Upload Avatar</label>
              <label
                className={classNames({
                  [styles.customInput]: true,
                  [styles.fullState_]: false,
                })}
                htmlFor="avatar"
              >
                <input type="file" id="avatar" name="avatar" />
                <span className={styles.emptyState}>
                  <img
                    className={styles.iconUpload}
                    src={IconUpload}
                    alt="icon-upload"
                  />
                  <span className={styles.text}>
                    Drag and drop or click to upload
                  </span>
                </span>
                {/* <span className={styles.fullState}>
                  <img
                    className={styles.fileImage}
                    src={ImageAvatar}
                    alt="image-avatar"
                  />
                  <span className={styles.btnContainer}>
                    <button className={styles.btn}>Remove Image</button>
                    <label htmlFor="avatar" className={styles.btn}>
                      Change Image
                    </label>
                  </span>
                </span> */}
              </label>
              <div className={styles.helperText}>
                <img src={IconInfo} alt="icon-info" />
                <span>Upload your photo (JPG or PNG, max size: 500KB).</span>
              </div>
            </div>
            <div
              className={classNames({
                [styles.field]: true,
                [styles.textField]: true,
                [styles.error]: false,
              })}
            >
              <label className={styles.label} htmlFor="full-name">
                Full Name
              </label>
              <div className={styles.inputWrapper}>
                <span className={styles.focusOutline} />
                <input type="text" id="full-name" name="full-name" />
              </div>
              <div className={styles.errorText}>
                <img src={IconInfo} alt="icon-info" />
                <span>Please enter a full name</span>
              </div>
            </div>
            <div
              className={classNames({
                [styles.field]: true,
                [styles.textField]: true,
                [styles.error]: false,
              })}
            >
              <label className={styles.label} htmlFor="email">
                Email Address
              </label>
              <div className={styles.inputWrapper}>
                <span className={styles.focusOutline} />
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="example@email.com"
                />
              </div>
              <div className={styles.errorText}>
                <img src={IconInfo} alt="icon-info" />
                <span>Please enter an email address</span>
              </div>
            </div>
            <div
              className={classNames({
                [styles.field]: true,
                [styles.textField]: true,
                [styles.error]: false,
              })}
            >
              <label className={styles.label} htmlFor="githubUsername">
                GitHub Username
              </label>
              <div className={styles.inputWrapper}>
                <span className={styles.focusOutline} />
                <input
                  type="text"
                  id="githubUsername"
                  name="githubUsername"
                  placeholder="@yourusername"
                />
              </div>
              <div className={styles.errorText}>
                <img src={IconInfo} alt="icon-info" />
                <span>Please enter an email address</span>
              </div>
            </div>
            <div className={styles.btnWrapper}>
              <span className={styles.focusOutline} />
              <button type="submit" className={styles.submitBtn}>
                <span>Generate My Ticket</span>
              </button>
            </div>
          </form>
        </div>

        {/* <div className={styles.ticketContainer}>
          <h2 className={styles.heroTitleVarient}>
            Congrats, <span className={styles.gradient}>Jonatan Kristof!</span>{" "}
            Your ticket is ready.
          </h2>
          <h2 className={styles.heroDescVarient}>
            We've emailed your ticket to{" "}
            <span className={styles.active}>jonatan@email.com</span> and will
            send updates in the run up to the event.
          </h2>
          <div className={styles.ticket}>
            <div className={styles.header}>
              <div className={styles.brandContainer}>
                <div className={styles.logoWrapper}>
                  <img src={LogoMark} alt="logo-mark" />
                </div>
                <span>Coding Conf</span>
              </div>
              <span className={styles.dateLocation}>
                Jan 31, 2025 / Austin, TX
              </span>
            </div>
            <div className={styles.footer}>
              <img
                className={styles.avatarImage}
                src={ImageAvatar}
                alt="avatar"
              />
              <div className={styles.userInfo}>
                <span className={styles.userName}>Jonatan Kristof</span>
                <div className={styles.github}>
                  <img src={IconGithub} alt="icon-github" />
                  <span>@jonatankristof0101</span>
                </div>
              </div>
            </div>
            <span className={styles.idText}>#01609</span>
          </div>
        </div> */}
      </div>
    </main>
  );
};

export default Home;
