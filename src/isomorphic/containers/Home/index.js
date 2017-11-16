import React, { Component } from 'react';

import './styles.css';

class Home extends Component {
  render() {
    return (
      <div>
        <p className="text">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
        <p className="text">
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum
          dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit
          praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit
          amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
          aliquam erat volutpat.
        </p>
      </div>
    );
  }
}

export default Home;
