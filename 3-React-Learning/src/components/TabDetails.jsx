import { useState } from 'react';
import { tabsData } from '../data';

import TabButton from './TabButton';
import Section from './Section';

export default function TabDetails(){
    const [selectedContent, setNewContent] = useState('')
    function handleTabSelect(content) {
        setNewContent(content)
        // console.log(selectedContent);
    }
    return (
        
        <Section title="Skincare Categories" className="section2" id="details">

       
        <menu>
          <TabButton isSelected={selectedContent==="cleanse"} onSelectAction={() => handleTabSelect("cleanse")}>Cleanse</TabButton>
          <TabButton isSelected={selectedContent==="tone"} onSelectAction={() => handleTabSelect("tone")}>Tone</TabButton>
          <TabButton isSelected={selectedContent==="moisturize"} onSelectAction={() => handleTabSelect("moisturize")}>Moisturize</TabButton>
          <TabButton isSelected={selectedContent==="protect"} onSelectAction={() => handleTabSelect("protect")}>Protect</TabButton>
        </menu>

        <div id="tabContent">
          {(!selectedContent) ? (
            <p>Please Select Topic</p>
          ):(
            <div>
              <h3>{tabsData[selectedContent].title}</h3>
              <p>{tabsData[selectedContent].description}</p>
            </div>
          )}

        </div>
       </Section>
    )
}