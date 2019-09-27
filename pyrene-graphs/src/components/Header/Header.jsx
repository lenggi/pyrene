import React from 'react';
import PropTypes from 'prop-types';
import './header.css';

/**
 * Headers are used to display a header, description and legends along with chart components.
 */
const Header = props => (
  <div styleName="container">
    <div styleName="header">
      {props.header}
    </div>
    {(props.description || (props.legend && props.legend.length > 0)) && (
      <div styleName="subContainer">
        {props.description && (
          <div styleName="description">
            {props.description}
          </div>
        )}
        {props.legend && props.legend.length > 0 && (
          <div styleName="legend">
            {props.legend.map((item, idx) => (
              <div
                key={item}
                styleName="legendItem"
              >
                <span
                  styleName="circle"
                  style={{ backgroundColor: props.colors[idx] }}
                />
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    )}
  </div>
);

Header.displayName = 'Header';

Header.defaultProps = {
  description: '',
  legend: [],
  colors: [],
};

Header.propTypes = {
  /**
   * Sets the colors of the legend. Type: [ string ]
   */
  colors: PropTypes.arrayOf(PropTypes.string),
  /**
    * Sets the description.
    */
  description: PropTypes.string,
  /**
   * Sets the header.
   */
  header: PropTypes.string.isRequired,
  /**
    * Sets the legend. Type: [ string ]
    */
  legend: PropTypes.arrayOf(PropTypes.string),
};

export default Header;
