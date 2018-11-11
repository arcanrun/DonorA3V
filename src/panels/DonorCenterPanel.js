import React from "react";
import {
  Panel,
  PanelHeader,
  Group,
  Div,
  Cell,
  List,
  Button,
  Radio,
  FormLayout
} from "@vkontakte/vkui";
import { BarChart } from "react-easy-chart";

import Icon24Phone from "@vkontakte/icons/dist/24/phone";
import Icon24Place from "@vkontakte/icons/dist/24/place";
import Icon12OnlineVkmobile from "@vkontakte/icons/dist/12/online_vkmobile";
const uri = "http://127.0.0.1:8000/donor/tocenter";
class DonorCenterPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timeradio: null,
      idCenter: null
    };

    this.addToDb.bind(this);
    this.getRadio.bind(this);
  }

  componentDidMount() {
    this.setState({
      idCenter: this.props.idCenter
    });
  }
  addToDb() {
    fetch(uri, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify({
        day: "day",
        time: "time",
        who: "who",
        title: "SPb donor"
      })
    })
      .then(respone => console.log(respone))
      .catch(err => console.log(err));
    console.log(this.state.timeradio);
  }

  getRadio(e) {
    this.setState({
      timeradio: e.target.value
    });

    // console.log(this.state.timeradio);
  }

  render() {
    const load = (
      <span>
        <Icon12OnlineVkmobile style={{ display: "inline", float: "left" }} />
      </span>
    );
    return (
      <Panel id={this.props.id}>
        <PanelHeader>Донорский центр</PanelHeader>
        <Group title="Лучший донорский центр">
          <List>
            <Cell expandable before={<Icon24Place />}>
              г. Санкт-Петербург, ул. Красного Курсанта 20
            </Cell>
            <Cell expandable before={<Icon24Phone />}>
              +7(999)-999-99-99
            </Cell>
          </List>
        </Group>
        <Group
          title="Прием крови"
          description={
            <span>
              {
                <Icon12OnlineVkmobile
                  style={{ display: "inline", float: "left" }}
                />
              }
              загруженность
            </span>
          }
        >
          <FormLayout>
            <Radio
              name="radio"
              value="1"
              onChange={this.getRadio.bind(this)}
              description={
                <span>
                  {load}
                  {load}
                  {load}
                  {load}
                </span>
              }
            >
              <b>пн</b> 09:00-12:00
            </Radio>
            <Radio
              name="radio"
              value="2"
              onChange={this.getRadio.bind(this)}
              description={
                <span>
                  {load}
                  {load}
                  {load}
                </span>
              }
            >
              <b>вт</b> 09:00-12:00
            </Radio>
            <Radio name="radio" value="3" disabled>
              ср
            </Radio>
            <Radio
              name="radio"
              value="4"
              onChange={this.getRadio.bind(this)}
              description={
                <span>
                  {load}
                  {load}
                  {load}
                  {load}
                </span>
              }
            >
              <b>чт</b> 09:00-12:00
            </Radio>
            <Radio
              name="radio"
              onChange={this.getRadio.bind(this)}
              value="5"
              description={<span>{load}</span>}
            >
              <b>пт</b> 09:00-12:00
            </Radio>
            <Radio
              name="radio"
              onChange={this.getRadio.bind(this)}
              value="6"
              disabled
            >
              <b>сб</b>
            </Radio>
            <Radio
              name="radio"
              onChange={this.getRadio.bind(this)}
              value="7"
              disabled
            >
              <b>вс</b>
            </Radio>

            <Button onClick={this.addToDb.bind(this)}>Оставить заявку</Button>
          </FormLayout>
        </Group>
      </Panel>
    );
  }
}

export default DonorCenterPanel;
