import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Plyr from 'react-plyr';

import styles from './Player.scss';

class Player extends React.Component {
  renderYoutube() {
    const { videoId } = this.props;

    return <div className={styles.Player}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?modestbranding=1&showinfo=0&rel=0`}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="true">
        </iframe>
      </div>;
  }

  renderAudio() {
    const { title, source } = this.props;

    return <Plyr
      type="audio"
      title={title}
      url={source}
      />
  }

  render() {
    const { type, provider, poster } = this.props;

    if (type == 'audio') return this.renderAudio();
    if (provider == 'youtube') return this.renderYoutube();

    return <div className={styles.Player__NotAvailable}>
      <img src={poster} />
      <span>Inhalt aktuell nicht verfügbar.</span>
    </div>;
  }
}

export default Player;
