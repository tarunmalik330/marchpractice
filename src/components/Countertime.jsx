import React, { Component } from "react";

class Countertime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }
  timer;
  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }
  componentDidMount() {
    this.timer = setInterval(
      () => this.getTimeUntil(this.props.deadline),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  leading0(num) {
    return num < 10 ? "0" + num : num;
  }
  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      this.setState({ days, hours, minutes, seconds });
    }
  }
  render() {
    return (
      <>
        <div className="mt-[50px]">
          <h2 className="text-center text-[42px]">Timer</h2>
          <div className="flex gap-[16px] justify-center mt-[30px]">
            <div className="max-w-[62.25px] w-full">
              <p className="text-[12px] 2xl:text-[16px] leading-[102%] ff_bloker font-[250] text-black mb-[6px] uppercase text-center">
                days
              </p>
              <div className="w-full bg-[#29ABE2] hover:bg-[#2491d1] cursor-pointer transition-colors duration-300 ease-linear rounded-[5px] py-[16px]">
                <p className="text-[34px] ff_bloker font-[250] cursor-pointer text-white text-center leading-[72%] pb-[1px]">
                  {this.leading0(this.state.days)}
                </p>
              </div>
            </div>
            <div className="max-w-[62.25px] w-full">
              <p className="text-[12px] 2xl:text-[16px] leading-[102%] ff_bloker font-[250] text-black mb-[6px] uppercase text-center">
                hours
              </p>
              <div className="w-full bg-[#29ABE2] hover:bg-[#2491d1] cursor-pointer transition-colors duration-300 ease-linear rounded-[5px] py-[16px]">
                <p className="text-[34px] ff_bloker font-[250] text-white text-center leading-[72%]">
                  {this.leading0(this.state.hours)}
                </p>
              </div>
            </div>
            <div className="max-w-[62.25px] w-full">
              <p className="text-[12px] 2xl:text-[16px] leading-[102%] ff_bloker font-[250] text-black mb-[6px] uppercase text-center">
                minutes
              </p>
              <div className="w-full bg-[#29ABE2] hover:bg-[#2491d1] cursor-pointer transition-colors duration-300 ease-linear rounded-[5px] py-[16px]">
                <p className="text-[34px] ff_bloker font-[250] text-white text-center leading-[72%]">
                  {" "}
                  {this.leading0(this.state.minutes)}
                </p>
              </div>
            </div>
            <div className="max-w-[62.25px] w-full">
              <p className="text-[12px] 2xl:text-[16px] leading-[102%] ff_bloker font-[250] text-black mb-[6px] uppercase text-center">
                seconds
              </p>
              <div className="w-full bg-[#29ABE2] hover:bg-[#2491d1] cursor-pointer transition-colors duration-300 ease-linear rounded-[5px] py-[16px]">
                <p className="text-[34px] ff_bloker font-[250] text-white text-center leading-[72%]">
                  {this.leading0(this.state.seconds)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Countertime;
