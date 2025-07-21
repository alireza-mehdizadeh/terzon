import React, { Component } from "react"
import "./Newsletters.css"

export default class Newsletters extends Component {
  constructor(props) {
    super(props)
    this.state = {
      phoneNumberBox: "",
      submitBtn: "عضوم کن",
    }

    this.phoneNumberBoxHandler = this.phoneNumberBoxHandler.bind(this)
    this.submitPhoneNumber = this.submitPhoneNumber.bind(this)
  }

  phoneNumberBoxHandler(ev) {
    this.setState({ phoneNumberBox: ev.target.value })
  }

  submitPhoneNumber() {
    this.setState({ submitBtn: "ارسال..." })

    fetch("http://localhost:3000/newsletters", {
      method: "POST",
      body: JSON.stringify(this.state.phoneNumberBox),
    }).then((res) => {
      console.log(res)
      this.setState({ phoneNumberBox: "" })
      this.setState({ submitBtn: "ارسال شد" })
      setTimeout(() => {
        this.setState({ submitBtn: "عضوم کن" })
      }, 3000)
    })
  }

  render() {
    return (
      <div className="newsletters-wrapper">
        <span>عضویت در خبرنامه</span>
        <p>با عضویت در خبرنامه از آخرین محصولات سایت مطلع شوید...</p>
        <div>
          <input
            onChange={this.phoneNumberBoxHandler}
            value={this.state.phoneNumberBox}
            type="tel"
            placeholder="شماره تماس..."
          />
          <button
            disabled={this.state.submitBtn !== "عضوم کن" || !this.state.phoneNumberBox}
            onClick={this.submitPhoneNumber}
          >
            {this.state.submitBtn}
          </button>
        </div>
      </div>
    )
  }
}
