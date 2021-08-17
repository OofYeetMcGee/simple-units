import Group from "../../Group";
import Unit from "../../unit/Unit";

const temperature = new Group("temperature");

temperature.setUnits(
    new Unit({
        short: ["K"],
        long: {
            sg: ["Kelvin"],
            pl: ["Kelvin"],
        }
    }, (val) => val, (val) => val, "metric"),
    new Unit({
        short: ["°C"],
        long: {
            sg: ["degree Celsius"],
            pl: ["degrees Celsius"],
        }
    }, (val) => val + 273.15, (val) => val - 273.15, "metric"),
    new Unit({
        short: ["°F"],
        long: {
            sg: ["degree Fahrenheit"],
            pl: ["degrees Fahrenheit"],
        }
    }, (val) => (val - 32) * 5 / 9 + 273.15, (val) => (val - 273.15) * 9 / 5 + 32, "us"),
    new Unit({
        short: ["°R"],
        long: {
            sg: ["degree Rankine"],
            pl: ["degrees Rankine"],
        }
    }, (val) => val * 5 / 9, (val) => val * 9 / 5, "metric"),
);

export default temperature;