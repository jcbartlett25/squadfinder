import React from "react"
import Parse from "parse"
import ParseReact from "parse-react"
import { Link } from "react-router"

import ProfPic from "./ProfPic"

class Bio extends React.Component {

  render() {
    return (
      <div>
        <h3>{Parse.User.current().getUsername()}</h3>
        <ProfPic />
      </div>
    );
  }
}

export default Bio