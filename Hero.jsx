import './Hero.css';
import arrow from '../../assets/arrow.png';
import play_icon from '../../assets/play_icon.png';
import pause_icon from '../../assets/pause_icon.png';

const Hero = ({ heroData, setHeroCount, heroCount, setPlayStatus, playStatus }) => {
  return (
    <div className="hero">
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>

      <div className="hero-explore">
        <p>Explore the features</p>
        <img src={arrow} alt="Arrow icon" />
      </div>

      <div className="hero-dot-play">
        <ul className="hero-dots">
          {[0, 1, 2].map((index) => (
            <li
              key={index}
              onClick={() => setHeroCount(index)}
              className={heroCount === index ? "hero-dot orange" : "hero-dot"}
            />
          ))}
        </ul>

        <div className="hero-play">
          <img
            onClick={() => setPlayStatus(!playStatus)}
            src={playStatus ? pause_icon : play_icon}
            alt={playStatus ? "Pause video" : "Play video"}
          />
          <p>See the video</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
