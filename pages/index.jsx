import Head from "next/head";
import Button from "./components/Button";
import Posts from "./components/Posts";

export default function Home() {
  const newsletters = [
    {
      path: "/forbes.png",
      alt: "Forbes",
    },
    {
      path: "/times.png",
      alt: "NY Times",
    },
    {
      path: "/telegram.png",
      alt: "The telegram",
    },
    {
      path: "/guardian.png",
      alt: "The Guardian",
    },
    {
      path: "/today.png",
      alt: "USA Today",
    },
  ];

  return (
    <>
      <Head>
        <title>Take Home Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <section className="landing">
          <div className="landing__content--left">
            <div className="landing__header">
              <img
                className="landing__content--logo"
                src="/tidal.png"
                alt="Tidal Traffic"
              />
              <Button>START QUIZ</Button>
            </div>
            <div className="landing__info">
              <h4>Attention Online Advertisers</h4>
              <h1>What’s Your Online Advertising Readiness Rating?</h1>
              <p>
                When you take this quiz, you’ll get a free report that outlines
                YOUR Readiness Rating.
              </p>
              <Button primary>START QUIZ</Button>
              <p>Learn more about Readiness Raitings</p>
            </div>
          </div>
          <div className="landing__content--right">
            <div className="landing__footer">
              <small>
                Learning about my rating - and WHAT to do about it, has really
                changed the way I do online advertising. It is all about being a
                master at this craft, and staying there.{" "}
                <strong> Andrea - Barranquilla, Colombia.</strong>
              </small>
            </div>
          </div>
        </section>
        <section className="feed">
          <div className="feed__newsletters">
            {newsletters.map((paper) => (
              <img key={paper.path} src={paper.path} alt={paper.alt} />
            ))}
          </div>
          <Posts />
        </section>
        <section className="feed__content">
          <div className="feed__content--info">
            <h4>Why IT IS IMPORTANT</h4>
            <h2>Knowing Your Online Ads Readiness Raiting...</h2>
            <p>
              ...will help you understand just how bullish you should be with
              your ad spend and where your blind spots are.
              <br />
              <br />
              When it comes to online advertising the more informed and ready
              you are, the more effective your advertising will be (and the
              greater your chances of a healthy Return on your Ad Spend (ROAS)).
              <br />
              <br />
              Find Out your Online Advertising Readiness Rating so you can make
              more money and avoid risks with your online advertising.
            </p>
          </div>
          <img className="feed__content--img" src="/img-1.png" alt="" />
        </section>
      </main>

      <footer>
        <div className="footer__promo">
          <h3>Find Out YOUR Online Advertising Readiness Rating!</h3>
          <Button primary>START QUIZ</Button>
        </div>
        <div className="footer__info">
          <small>©2019 Tidal Traffic. All rights reserved.</small>
          <small>©2019 Tidal Traffic. All rights reserved.</small>
          <small>About Us | Terms of Service | Privacy Policy</small>
        </div>
      </footer>
    </>
  );
}
