import * as request from './interface';

interface CityWeather {
    city: string;
}
export const getCityWeather = async (param: CityWeather) => {
    return request.get('/weatherApi', param);
};
