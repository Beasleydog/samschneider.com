import homeStyles from "./homeStyles.module.css";
import BouncyText from "@/components/bouncyText/bouncyText";
import StackedCards from "@/components/stackedCards/stackedCards";
import Image from "next/image";
export default function Home() {
  return (
    <div id="mainWrapper">
      <div className="twoColumns">
        <span id={homeStyles.mainText}>
          <div id={homeStyles.welcomeText}>
            <div>
              Hi,
              <br />
              I`m
              <span id={homeStyles.samName}>
                <BouncyText>
                  Sam Schneider
                </BouncyText>
              </span>
            </div>
            {/* <div id={homeStyles.welcomeTextUnderline} /> */}
          </div>
          <div id={homeStyles.subText}>
            <div>
              <SubLink>Software Engineer.</SubLink>
            </div>
            <div>
              <SubLink>Game Developer.</SubLink>
            </div>
            <div>
              <SubLink>Maker.</SubLink>
            </div>
          </div>
        </span>
        <div id={homeStyles.stackedCardsWrapper}>
          <StackedCards cards={getImageCards()} />
        </div>
      </div>
    </div >
  );
}
function getImageCards() {
  const wrap = (content) => <div className={homeStyles.imageCardImageWrapper}>{content}</div>;
  const images = [
    "/images/ballCombine.png",
    "/images/collaborativeCrossword.png",
    "/images/customTab.png",
    "/images/guitarChess.png",
    "/images/planscape.png",
    "/images/scrambled.png",
    "/images/seekingConnection.png",
    "/images/udplGenres.png",
  ]
  return (
    images.map((image) => {
      return wrap(<Image src={image} fill style={{ objectFit: "cover" }} />)
    })
  )
}
function SubLink({ children, href }) {
  return (
    <a href
      className="fancyLink"
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}