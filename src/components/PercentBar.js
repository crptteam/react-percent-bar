import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Heading from '../styled/Heading';
import LeftPart from '../styled/LeftPart';
import RightPart from '../styled/RightPart';
import BarInnerWrap from '../styled/BarInnerWrap';
import Bar from '../styled/Bar';
import LinesWrap from '../styled/LinesWrap';
import LineWrap from '../styled/LineWrap';
import LineHeading from '../styled/LineHeading';
import LineContent from '../styled/LineContent';
import LineBarBackground from '../styled/LineBarBackground';
import LineBar from '../styled/LineBar';
import LinePercentLabel from '../styled/LinePercentLabel';
import Arrow from '../styled/Arrow';
import IconWrap from '../styled/IconWrap';
import ClickWrap from '../styled/ClickWrap';

import { BottomArrow } from '../svg/';

import {
  getPercentFromTotalPercentByValuesAndPercent,
  getTotalCount,
  getTotalPercent,
  formatForThousands
} from '../utils';

class PercentBar extends Component {
  constructor(props) {
    super(props);
    this.displayName = 'PercentBar';

    this.state = {
      isOpen: false
    };

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.renderLine = this.renderLine.bind(this);
  }

  open(e) {
    this.setState({
      isOpen: true
    });
    e.preventDefault();
  }

  close(e) {
    this.setState({
      isOpen: false
    });
    e.preventDefault();
  }

  renderLine(item, i, values) {
    return (
      <LineWrap key={i}>
        <LineHeading>{item.title}</LineHeading>
        <LineContent>
          <LineBarBackground>
            <LineBar
              percent={getPercentFromTotalPercentByValuesAndPercent(
                values,
                item.percent
              )}
            />
          </LineBarBackground>
          <LinePercentLabel>
            <Arrow />
            {item.percent}%
          </LinePercentLabel>
        </LineContent>
      </LineWrap>
    );
  }

  render() {
    const values = this.props.values || [];
    const title = this.props.title;
    const percent =
      this.props.value !== undefined
        ? this.props.value
        : getTotalPercent(values);
    const count = this.props.count ? this.props.count : getTotalCount(values);

    return (
      <div>
        <Heading>
          <LeftPart>{title}</LeftPart>
          <RightPart>
            <ClickWrap onClick={values.length ? (this.state.isOpen ? this.close : this.open) : null}>
              {formatForThousands(count)} шт
              {values.length ? (
                <IconWrap rotation={this.state.isOpen}>
                  <BottomArrow />
                </IconWrap>
              ) : null}
            </ClickWrap>
          </RightPart>
        </Heading>

        {this.state.isOpen ? (
          <LinesWrap>{values.map(this.renderLine)}</LinesWrap>
        ) : (
          <BarInnerWrap>
            <Bar percent={percent}>{percent >= 10 ? `${percent}%` : <LinePercentLabel stick>
              <Arrow />
              {percent}%
            </LinePercentLabel>}</Bar>
          </BarInnerWrap>
        )}
      </div>
    );
  }
}

PercentBar.propTypes = {
  values: PropTypes.array,
  title: PropTypes.string
};

PercentBar.defaultProps = {};

export default PercentBar;
