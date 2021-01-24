import {api} from "../axios"



function createDogService(data = {numberOfDogsCode:process.env.DOGS_1,frequencyCode:process.env.FREQUENCY_1}) {
  try {
    let res = await api.post(`/service/dogService`, data);
    console.log(res.data);
  } catch (e) {
    console.log(e);
  }

  
}