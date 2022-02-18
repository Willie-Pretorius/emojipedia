import React from "react";
import Emoji from "./Emoji";

function DictionaryItem(props){
    return (
        <div className="term">
          <dt>
            <Emoji emoji={props.emoji} name={props.name} />
            <span>{props.name}</span>
          </dt>
          <dd>
            {props.meaning}
          </dd>
        </div>
    )
}
export default DictionaryItem