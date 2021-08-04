import { Header, Grid, Segment, Divider, Image } from "semantic-ui-react";

import be from "./BL_LogoBasic.png";
import coaching from "./coaching.png";
// import mailinglist from "./mailinglist.png";
import "./App.css";
import "semantic-ui-css/semantic.min.css";

import Table from "./components/table";
import EmailForm from "./components/form";

const data = [
  {
    Name: "Jessica D.",
    AvailableStart: "11/6/22",
    Industry: "Professional Services",
  },
  {
    Name: "David F.",
    AvailableStart: "8/5/21",
    Industry: "Sports/Fitness",
  },
  { Name: "Keir Y.", AvailableStart: "4/12/22", Industry: "E-Sports" },
];
const headers = ["Coach Name", "Available Starting", "Industry"];

function App() {
  return (
    <div className="App">
      <Header as="h1" dividing icon>
        <img src={be} className="App-logo" alt="logo" />
        <Divider />
        BetterLesson Professional Coaching
        <Header as="h3">Professional Coach Seminars and Mentorship</Header>
      </Header>
      <Grid columns={1}>
        <Grid.Row stretched>
          <Grid.Column>
            <Grid columns={2}>
              <Grid.Row>
                <Grid.Column>
                  <Image
                    src={coaching}
                    className="coaching-img"
                    alt="coaching on laptop"
                    size="medium"
                    fluid
                    style={{
                      display: "inline",
                      height: "96%",
                      "border-radius": "5px",
                    }}
                  />
                </Grid.Column>
                <Grid.Column
                  style={{ "padding-right": "50px", "padding-top": "15px" }}
                >
                  <Segment>
                    <Header>Current Coaches</Header>
                    <Table headers={headers} content={data} />
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Segment
              style={{
                "align-self": "center",
                "box-shadow": "0 3px 10px rgb(0 0 0 / 0.2)",
              }}
            >
              <EmailForm></EmailForm>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid columns={3}>
            <Grid.Row>
              <Grid.Column>
                <Grid.Row>
                  <strong>EMAIL ADDRESS</strong>
                </Grid.Row>
                <Grid.Row>
                  <a href={"mailto:hello@reallygreatsite.com"}>
                    hello@reallygreatsite.com
                  </a>
                </Grid.Row>
              </Grid.Column>
              <Grid.Column>
                <strong>MAILING ADDRESS</strong>
                <Grid.Row>123 Anywhere St. Any City, ST 12345</Grid.Row>
              </Grid.Column>
              <Grid.Column>
                <strong>PHONE NUMBER</strong>
                <Grid.Row>(123) 456-7890</Grid.Row>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default App;
