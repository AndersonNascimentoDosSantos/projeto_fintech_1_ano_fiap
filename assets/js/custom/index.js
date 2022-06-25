function geraGrafico(ctx, data, label) {
  new Chart(ctx, {
    type: "line",
    data: {
      labels: [
        "Oct",
        "Nov",
        "Dec",
        "jan",
        "fev",
        "mar",
        "Apr",
        "May",
        "Jun",
        "jul",
        "ago",
      ],
      datasets: [
        {
          label,
          tension: 0,
          borderWidth: 0,
          pointRadius: 5,
          pointBackgroundColor: "rgba(255, 255, 0, .8)",
          pointBorderColor: "transparent",
          borderColor: "rgba(255, 255, 255, .8)",
          borderColor: "rgba(0, 255, 255, .8)",
          borderWidth: 4,
          backgroundColor: "transparent",
          fill: true,
          data,
          maxBarThickness: 6,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          display: false,
        },
      },
      interaction: {
        intersect: false,
        mode: "index",
      },
      scales: {
        y: {
          grid: {
            drawBorder: false,
            display: true,
            drawOnChartArea: true,
            drawTicks: false,
            borderDash: [5, 5],
            color: "rgba(255, 0, 255, 1)",
          },
          ticks: {
            display: true,
            color: "black",
            padding: 10,
            font: {
              size: 14,
              weight: 300,
              family: "Roboto",
              style: "normal",
              lineHeight: 2,
            },
          },
        },
        x: {
          grid: {
            drawBorder: false,
            display: false,
            drawOnChartArea: false,
            drawTicks: false,
            borderDash: [5, 5],
          },
          ticks: {
            display: true,
            color: "black",
            padding: 10,
            font: {
              size: 14,
              weight: 300,
              family: "Roboto",
              style: "normal",
              lineHeight: 2,
            },
          },
        },
      },
    },
  });
}
var ctx1 = document.getElementById("chart-line-receitas").getContext("2d");
var ctx2 = document.getElementById("chart-line-despesas").getContext("2d");
var ctx3 = document.getElementById("chart-line-investimentos").getContext("2d");
var data_ctx1 = [50, 40, 100, 250, 400, 300, 100, 130, 50];
var data_ctx2 = [150, 640, 200, 150, 500, 100, 600, 1130, 750];
var data_ctx3 = [110, 140, 210, 150, 40, 100, 10, 30, 50];

geraGrafico(ctx1, data_ctx1, "despesas");
geraGrafico(ctx2, data_ctx2, "receitas");
geraGrafico(ctx3, data_ctx3, "investimentos");
