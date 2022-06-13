// const channel = {
//   title: "Javascript",
//   Names: ["Gokul", "Raj", "Siva"],
//   subscribe() {
//     console.log(this);
//   },
//   showvideos() {
//     this.Names.forEach(function (names) {
//       console.log(this.title + ` - ` + names.toUpperCase());
//     }, this);
//   },
// };
// channel.showvideos();

// const channel = {
//   title: "Javascript",
//   Names: ["Gokul", "Raj", "Siva"],
//   subscribe() {
//     console.log(this);
//   },
//   showvideos() {
//     // let that = this; //this keyword create using that variable
//     this.Names.forEach(
//       function (names) {
//         console.log(this.title + ` - ` + names.toUpperCase());
//       }.bind(this) // Bind Method
//     );
//   },
// };
// channel.showvideos();

const channel = {
  title: "Javascript",
  Names: ["Gokul", "Raj", "Siva"],
  subscribe() {
    console.log(this);
  },
  showvideos() {
    // let that = this; //this keyword create using that variable
    this.Names.forEach((names) => {
      console.log(this.title + ` - ` + names.toUpperCase());
    });
  },
};
channel.showvideos();

// function playvideo(){
//     console.log(this);
// }
// playvideo.call({videoTitle:"JS call"});
// playvideo.apply({videoTitle:"JS apply"});
// let val= playvideo.bind({videoTitle:"JS bind"});
// console.log(val());
