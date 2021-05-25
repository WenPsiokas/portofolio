import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";
import GoogleButton from "react-google-button";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "104202786935-t41cd2s3jju2a84nfp59rl7r81b4ps60.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  userLoggedIn() {
    if (this.props.isSignedIn) {
      return alert("User signed in");
    }
  }

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <GoogleButton label="Sign Out" onClick={() => this.auth.signOut()} />
      );
    } else {
      return <GoogleButton style={{}} onClick={() => {this.auth.signIn(); this.userLoggedIn();}} />;
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
