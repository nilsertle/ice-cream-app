import './App.css';
import Main from './components/Main/Main';
import DetailPage from "./components/DetailPage/DetailPage"
import AddLocationScreen from './components/AddLocationScreen/AddLocationScreen';
import { useState } from "react";

let globalCardContent = [];


export default function App() {
  const [activePage, setActivePage] = useState({ page: "main", props: {} });
  const [cardContent, setCardContent] = useState(globalCardContent)

  function handleActivePage() {
    switch (activePage.page) {
      case "add":
        return <AddLocationScreen activePageHandler={setActivePage} cardContentHandler={setCardContent} />
      case "detail":
        return <DetailPage activePageHandler={setActivePage} cardContent={activePage.props} />
      default:
        return <Main activePageHandler={setActivePage} cardContent={cardContent} />
    }
  }

  return (
    handleActivePage()
  );
}
