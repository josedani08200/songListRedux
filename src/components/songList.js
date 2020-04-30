import React from "react";
import { connect } from "react-redux";

class songList extends React.Component {
  render() {
    return <div>SongList</div>;
  }
}

const mapStateToProps = () => {};

export default connect()(songList);
