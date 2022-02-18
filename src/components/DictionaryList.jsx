import React from "react";
import DictionaryItem from "./DictionaryItem";
import emojipedia from "../emojipedia";

function createDictionaryItem(emojiItem){
    return (
        <DictionaryItem 
        key={emojiItem.id}
        emoji={emojiItem.emoji}
        name={emojiItem.name}
        meaning={emojiItem.meaning}
        />
    )
}

function DictionaryList (){
    return (
        <dl className="dictionary">
            {emojipedia.map(createDictionaryItem)}
        </dl>
        
    )
}

export default DictionaryList