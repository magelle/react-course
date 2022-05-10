import React, {memo} from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = props => {
  console.log('DEMO OUTPUT RUNNING');
  return (<MyParagraph>{props.show && 'Hi there!'}</MyParagraph>)
}

export default memo(DemoOutput);