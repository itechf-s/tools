function calculate() {
  let amtInvested = document.querySelector("#amtinvested").value;
  let noOfYears = document.querySelector("#nofoyears").value;
  let rateOfReturn = document.querySelector("#rateofreturn").value;
  let feq = 1;
  let test = document.querySelector(".test");
  let test1 = document.querySelector(".test1");
  let test2 = document.querySelector(".test2");
  let notice = document.querySelector(".notice");
  let displayTotal = document.querySelector("#totalAmt");
  let displaywealth = document.querySelector("#wealth");
  let displayMaturity = document.querySelector("#maturity");

  if (amtInvested < 500 || amtInvested >= 200001) {
    test.classList.add("animate__animated", "animate__headShake");
    notice.style.display = "block";
    notice.classList.add("animate__animated", "animate__lightSpeedInRight");
    setTimeout(() => {
      notice.classList.add("animate__animated", "animate__lightSpeedOutRight");
    }, 10000);
    setTimeout(() => {
      test.classList.remove("animate__animated", "animate__headShake");
    }, 1000);
    setTimeout(() => {
      notice.classList.remove(
        "animate__animated",
        "animate__lightSpeedOutRight"
      );
    }, 11000);
    setTimeout(() => {
      notice.style.display = "none";
    }, 11000);
  } else if (noOfYears < 1 || noOfYears >= 31) {
    test1.classList.add("animate__animated", "animate__headShake");
    notice.style.display = "block";
    notice.classList.add("animate__animated", "animate__lightSpeedInRight");
    setTimeout(() => {
      notice.classList.add("animate__animated", "animate__lightSpeedOutRight");
    }, 10000);
    setTimeout(() => {
      test1.classList.remove("animate__animated", "animate__headShake");
    }, 1000);
    setTimeout(() => {
      notice.classList.remove(
        "animate__animated",
        "animate__lightSpeedOutRight"
      );
    }, 11000);
    setTimeout(() => {
      notice.style.display = "none";
    }, 11000);
  } else if (rateOfReturn < 1 || rateOfReturn >= 16) {
    test2.classList.add("animate__animated", "animate__headShake");
    notice.style.display = "block";
    notice.classList.add("animate__animated", "animate__lightSpeedInRight");
    setTimeout(() => {
      notice.classList.add("animate__animated", "animate__lightSpeedOutRight");
    }, 10000);
    setTimeout(() => {
      test2.classList.remove("animate__animated", "animate__headShake");
    }, 1000);
    setTimeout(() => {
      notice.classList.remove(
        "animate__animated",
        "animate__lightSpeedOutRight"
      );
    }, 11000);
    setTimeout(() => {
      notice.style.display = "none";
    }, 11000);
  } else {
    let p = amtInvested;
    let time = (12 / feq) * noOfYears;
    let intRatePerPeriod = rateOfReturn / (12 / feq) / 100;
    let totalAmtInvest = p * time;
    let totalAmtExpected =
      p *
      ((Math.pow(1 + intRatePerPeriod, time) - 1) / intRatePerPeriod) *
      (1 + intRatePerPeriod);

    let amtExpect = Math.round(totalAmtExpected);
    let wealthGain = amtExpect - totalAmtInvest;

    nfObject = new Intl.NumberFormat("en-IN");
    outputTotal = nfObject.format(totalAmtInvest);
    outputWealth = nfObject.format(wealthGain);
    outputMaturity = nfObject.format(amtExpect);
    displayTotal.innerHTML = `₹${outputTotal}`;
    displaywealth.innerHTML = `₹${outputWealth}`;
    displayMaturity.innerHTML = `₹${outputMaturity}`;
    document.querySelector(".chart-container").innerHTML = "&nbsp;";
    document.querySelector(".chart-container").innerHTML =
      '<canvas id="myChart"></canvas>';

    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["TOTAL INVESTMENT", "MATURITY VALUE", "WEALTH GAINED"],
        datasets: [
          {
            data: [totalAmtInvest, amtExpect, wealthGain],
            backgroundColor: ["#01a9b4", "#ffab2f", "#ffd300"],
            borderColor: ["#fff", "#fff", "#fff"],
            borderWidth: 0.5,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        segmentShowStroke: false,
        responsive: true,
      },
      plugins: {
        font: function (context) {
          var width = context.chart.width;
          var size = Math.round(width / 32);
          return {
            size: size,
            weight: 900,
          };
        },
      },
    });
  }
}
