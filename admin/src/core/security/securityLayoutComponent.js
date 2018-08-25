import React, { Component } from 'react';
import { I18n } from 'react-redux-i18n';

require('./security.scss');

export default class securityLayout extends Component {
  render() {
    return (
      <section className="page-login">
        <div className="row">
          <div className="col-md-5 col-sm-6">
            <div>{this.props.children}</div>
          </div>
        </div>
      </section>
    )
  }
}
