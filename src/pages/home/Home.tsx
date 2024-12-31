import { useEffect, useState } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import classNames from "classnames";

import { Inputs, UserInfo } from "./type";
import {
  IconGithub,
  IconInfo,
  IconUpload,
  LogoFull,
  LogoMark,
} from "../../assets/images";
import styles from "./Home.module.scss";

const Home = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<Inputs>({ mode: "onChange" });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    avatar: null,
    fullName: null,
    email: null,
    githubUsername: null,
  });

  const onSubmit: SubmitHandler<Inputs> = (data): Promise<void> => {
    return new Promise((resolve) =>
      setTimeout(() => {
        setUserInfo({
          avatar: imagePreview,
          fullName: data.fullName,
          email: data.email,
          githubUsername: data.githubUsername,
        });
        resolve();
      }, 1500),
    );
  };

  useEffect(() => {
    const avatar = watch("avatar");
    if (avatar && avatar.length > 0) {
      if (validateFile(avatar) === true) {
        const objectUrl = URL.createObjectURL(avatar[0]);
        setImagePreview(objectUrl);
      }
    } else {
      setImagePreview(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch("avatar")]);

  const validateFile = (val: FileList | null) => {
    if (!val) return false;
    if (val && val[0].size > 5 * 1024) {
      return "File too large. Please upload a photo under 500KB.";
    }
    return true;
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <img className={styles.logo} src={LogoFull} alt="logo" />

        <div className={styles.toggleContainer}>
          <div
            className={classNames({
              [styles.formContainer]: true,
              [styles.hide]: isSubmitSuccessful,
            })}
          >
            <h1 className={styles.heroTitle}>
              Your Journey to Coding Conf 2025 Starts Here!
            </h1>
            <h2 className={styles.heroDesc}>
              Secure your spot at next year's biggest coding conference.
            </h2>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
              <div
                className={classNames({
                  [styles.field]: true,
                  [styles.fileField]: true,
                  [styles.error]: errors.avatar,
                })}
              >
                <label className={styles.label}>Upload Avatar</label>
                <label
                  className={classNames({
                    [styles.customInput]: true,
                    [styles.fullState_]: imagePreview ? true : false,
                  })}
                  htmlFor="avatar"
                >
                  <input
                    type="file"
                    id="avatar"
                    {...register("avatar", {
                      required: { value: true, message: "Avatar is required" },
                      validate: (val) => validateFile(val),
                    })}
                    accept="image/png, image/jpeg"
                  />
                  {!imagePreview ? (
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
                  ) : (
                    <span className={styles.fullState}>
                      <img
                        className={styles.fileImage}
                        src={imagePreview ? imagePreview : undefined}
                        alt="image-preview"
                      />
                      <span className={styles.btnContainer}>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setValue("avatar", null, { shouldValidate: true });
                          }}
                          className={styles.btn}
                        >
                          Remove Image
                        </button>
                        <label htmlFor="avatar" className={styles.btn}>
                          Change Image
                        </label>
                      </span>
                    </span>
                  )}
                </label>
                <div className={styles.helperText}>
                  <img src={IconInfo} alt="icon-info" />
                  <span>
                    {errors.avatar?.message
                      ? errors.avatar.message
                      : "Upload your photo (JPG or PNG, max size: 500KB)"}
                  </span>
                </div>
              </div>
              <div
                className={classNames({
                  [styles.field]: true,
                  [styles.textField]: true,
                  [styles.error]: errors.fullName,
                })}
              >
                <label className={styles.label} htmlFor="fullName">
                  Full Name
                </label>
                <div className={styles.inputWrapper}>
                  <span className={styles.focusOutline} />
                  <input
                    type="text"
                    id="fullName"
                    {...register("fullName", {
                      required: {
                        value: true,
                        message: "Full name is required",
                      },
                      pattern: {
                        value: /^(?!\s*$).+/,
                        message: "Full name is required",
                      },
                    })}
                  />
                </div>
                <div className={styles.errorText}>
                  <img src={IconInfo} alt="icon-info" />
                  <span>{errors.fullName?.message}</span>
                </div>
              </div>
              <div
                className={classNames({
                  [styles.field]: true,
                  [styles.textField]: true,
                  [styles.error]: errors.email,
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
                    placeholder="example@email.com"
                    {...register("email", {
                      required: { value: true, message: "Email is required" },
                      pattern: {
                        value: /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/,
                        message: "Please enter a valid email address",
                      },
                    })}
                  />
                </div>
                <div className={styles.errorText}>
                  <img src={IconInfo} alt="icon-info" />
                  <span>{errors.email?.message}</span>
                </div>
              </div>
              <div
                className={classNames({
                  [styles.field]: true,
                  [styles.textField]: true,
                  [styles.error]: errors.githubUsername,
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
                    placeholder="@yourusername"
                    {...register("githubUsername", {
                      required: {
                        value: true,
                        message: "GitHub username is required",
                      },
                      pattern: {
                        value: /^(?!\s*$).+/,
                        message: "GitHub username is required",
                      },
                    })}
                  />
                </div>
                <div className={styles.errorText}>
                  <img src={IconInfo} alt="icon-info" />
                  <span>{errors.githubUsername?.message}</span>
                </div>
              </div>
              <div className={styles.btnWrapper}>
                <span className={styles.focusOutline} />
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className={styles.submitBtn}
                >
                  <span>Generate My Ticket</span>
                </button>
              </div>
            </form>
          </div>

          <div
            className={classNames({
              [styles.ticketContainer]: true,
              [styles.show]: isSubmitSuccessful,
            })}
          >
            <h2 className={styles.heroTitleVarient}>
              Congrats,{" "}
              <span className={styles.gradient}>{userInfo.fullName}!</span>
              <br></br> Your ticket is ready.
            </h2>
            <h2 className={styles.heroDescVarient}>
              We've emailed your ticket to{" "}
              <span className={styles.active}>{userInfo.email}</span> and will
              send updates in the run up to the event.
            </h2>
            <div className={styles.ticketWrapper}>
              <div
                className={classNames({
                  [styles.ticket]: true,
                  [styles.animate]: isSubmitSuccessful,
                })}
              >
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
                    src={userInfo.avatar ? userInfo.avatar : undefined}
                    alt="avatar"
                  />
                  <div className={styles.userInfo}>
                    <span className={styles.userName}>{userInfo.fullName}</span>
                    <div className={styles.github}>
                      <img src={IconGithub} alt="icon-github" />
                      <span>{userInfo.githubUsername}</span>
                    </div>
                  </div>
                </div>
                <span className={styles.idText}>#01609</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
