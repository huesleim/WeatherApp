const cityInput = document.getElementById("city-input");
const header = document.querySelector("h2");

const formatDate = (date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
};

const buildURL = (city) => {
    const date1 = new Date();
    const date2 = new Date(date1);

    date2.setDate(date2.getDate() + 5);

    const startDate = formatDate(date1);
    const endDate = formatDate(date2);

    return `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(
        city,
    )}/${startDate}/${endDate}?key=47VSRLKCTV56B834ERHCJTXDG`;
};

const getInfo = async (city) => {
    const url = buildURL(city);
    const res = await fetch(url);
    return res.json();
};

const getRain = async (city) => {
    const response = await getInfo(city);
    let totalPrecip = 0;
    response.days.forEach((day) => {
        totalPrecip += day.precip;
    });

    return totalPrecip;
};

const changeWeather = async (city) => {
    const totalPrecip = await getRain(city);

    if (totalPrecip <= 1) {
        changeSkin("sunny");
    } else if (totalPrecip > 1 && totalPrecip <= 12) {
        changeSkin("light-rain");
    } else {
        changeSkin("rainy");
    }
};

const changeSkin = (weather) => {
    switch (weather) {
        case "sunny":
            document.body.style.backgroundColor = "orange";
            header.innerText = "You'll see the sun a lot this week!\n☀️";
            break;

        case "light-rain":
            document.body.style.backgroundColor = "grey";
            header.innerText = "There's a drizzle in your forecast!\n🌧️";
            break;

        case "rainy":
            document.body.style.backgroundColor = "blue";
            header.innerText = "Cats and dogs shall rain in the next few days!\n⛈️";
            break;

        default:
            document.body.style.backgroundImage = "";
    }
};

cityInput.addEventListener("change", () => {
    const city = cityInput.value.trim();
    if (city) changeWeather(city);
});
