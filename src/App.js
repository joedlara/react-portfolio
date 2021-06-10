import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"
import { CSSTransition, TransitionGroup } from "react-transition-group"

import Main from "./components/Main"
import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Router>
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                unmountOnExit={true}
                mountOnEnter={true}
                exit={false}
                timeout={500}
                classNames="fade"
              >
                <Switch location={location}>
                  <Route exact path="/">
                    <Main />
                  </Route>
                  <Route path="/home">
                    <Header />
                    <Content />
                    <Footer />
                  </Route>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </Router>
    </div>
  )
}

export default App
