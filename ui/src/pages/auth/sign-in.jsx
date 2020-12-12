import React from "react";
import { Des, Forms, Wrapper } from "../../styles/auth.stc";
import { Search, MessageCircle, User } from "react-feather";
const Signin = () => {
  return (
    <Wrapper>
      <Des>
        <h2>
          <Search size="20" color="#202020" style={{ marginRight: 20 }} />
          Lorem ipsum dolor sit.
        </h2>
        <h2>
          <MessageCircle
            size="20"
            color="#202020"
            style={{ marginRight: 20 }}
          />
          Lorem ipsum dolor sit.
        </h2>
        <h2>
          <User size="20" color="#202020" style={{ marginRight: 20 }} />
          Lorem ipsum dolor sit.
        </h2>
      </Des>
      <Forms>
          helo
      </Forms>
    </Wrapper>
  );
};

export default Signin;
