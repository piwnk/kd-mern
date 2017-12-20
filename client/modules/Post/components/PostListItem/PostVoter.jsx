import React from 'react';
import PropTypes from 'prop-types';

const PostVoter = ({ onVoteUp, onVoteDown, voteCount }) => (
  <div className="voter">
    <i className="fa fa-chevron-up" onClick={onVoteUp} />
    <p>{voteCount}</p>
    <i className="fa fa-chevron-down" onClick={onVoteDown} />
  </div>
);

PostVoter.propTypes = {
  onVoteUp: PropTypes.func.isRequired,
  onVoteDown: PropTypes.func.isRequired,
  voteCount: PropTypes.number.isRequired,
};

export default PostVoter;
