import "./App.css";
import Content from "./components/contents/Content";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import TopMenu from "./components/topmenu/TopMenu";

const App = () => {
  return (
    <div className="App">
      <TopMenu />
      <Header />

      <Content
        srcImage="assets/img/01.jpg"
        alt="For those about to rock..."
        title="For those about to rock..."
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."
        orderLg="2"
      />
      <Content
        srcImage="assets/img/02.jpg"
        alt="We salute you!"
        title="We salute you!"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."
        orderLg="1"
      />
      <Content
        srcImage="assets/img/03.jpg"
        alt="Let there be rock!"
        title="Let there be rock!"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."
        orderLg="2"
      />
      <Footer />
    </div>
  );
};

export default App;
