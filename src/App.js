import React,{useState} from "react";
import "./styles.css";
import Navbar from "./components/Navbar";
import Titlebar from "./components/titlebar";
import Content from "./components/Content";
import Sidecolumn from "./components/Sidecolumn";

export default function App() {

  const [showbar,setShowbar]=useState(false);
  const [contentData, setContentData] = useState(""); // ✅ Store Content data

  return (
    <div className="App">
      <Navbar />
      <Titlebar />
      <div className="main-layout">
        <Content 
        setShowbar={setShowbar}
        showbar={showbar} 
        setContentData={setContentData}/>
        {showbar && <Sidecolumn text={contentData} />}
      </div>
    </div>
  );
}
