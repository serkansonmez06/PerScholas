import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Serkan Sonmez</h2>
            <img
              src="https://scontent-bos3-1.xx.fbcdn.net/v/t1.0-9/92550852_10157964189213954_8679101725132455936_n.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_ohc=AA0EtpXlRa0AX95zp-Y&_nc_ht=scontent-bos3-1.xx&oh=97b11f75d6c010d8543a3e6928552780&oe=6032B311"
              alt="avatar"
              style={{ height: "200px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Full-stack developer with excellent technical expertise ( HTML5,
              CSS3, JS - ES6 ) with the ability to analyze and solve problems.
              Write, analyze, review, and rewrite programs, using workflow chart
              and diagram, and applying knowledge of computer capabilities,
              subject matter, and symbolic logic. Adaptable and transformational
              managerial skills with an ability to work independently and
              collaboratively. The skilled financial associate was adept at
              increasing work process efficiency and profitability through
              functional and technical analysis. Successful at advising small
              and medium-size business for marketing.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (617) 797-4820
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    srknsnmz83@gmail.com
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
