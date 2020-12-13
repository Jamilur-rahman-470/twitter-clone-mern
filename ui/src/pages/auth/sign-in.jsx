import React, { useState } from "react";
import { Des, Forms, Wrapper } from "../../styles/auth.stc";
import { Search, MessageCircle, User } from "react-feather";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/user-action";

const Signin = ({ auth, signinUser }) => {
  const [signIndata, setSignInData] = useState({
    email: "",
    password1: "",
  });
  return (
    <Wrapper>
      <Des>
        <h2>
          <Search size="20" color="#fff" style={{ marginRight: 20 }} />
          Lorem ipsum dolor sit.
        </h2>
        <h2>
          <MessageCircle size="20" color="#fff" style={{ marginRight: 20 }} />
          Lorem ipsum dolor sit.
        </h2>
        <h2>
          <User size="20" color="#fff" style={{ marginRight: 20 }} />
          Lorem ipsum dolor sit.
        </h2>
      </Des>
      <Forms>
        <form className="sign-in-form" onSubmit={(e) => signinUser(e, signIndata)}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={signIndata.email}
            required
            minLength="8"
            onChange={(e) =>
              setSignInData({ ...signIndata, [e.target.name]: e.target.value })
            }
          />
          <input
            type="password"
            name="password1"
            value={signIndata.password1}
            placeholder="Password"
            required
            minLength="8"
            onChange={(e) =>
              setSignInData({ ...signIndata, [e.target.name]: e.target.value })
            }
          />
          <input type="submit" value="SIGNIN" />
        </form>
      </Forms>
    </Wrapper>
  );
};
const mapStateToProps = (state) => {
  return {
    auth: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signinUser: (e, data) => dispatch(signIn(e, data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Signin);
