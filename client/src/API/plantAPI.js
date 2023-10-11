import { $authHost, $host } from './index';

export const createType = async (type) => {
  const { data } = await $authHost.post('api/type', type);
  return data;
};

export const fetchTypes = async () => {
  const { data } = await $host.get('api/type');
  return data;
};

export const createPlant = async (device) => {
  const { data } = await $authHost.post('api/plant', device);
  return data;
};

export const fetchPlants = async (typeId, brandId, page, limit = 20) => {
  const { data } = await $host.get('api/plant', {
    params: {
      typeId,
      brandId,
      page,
      limit,
    },
  });
  return data;
};

export const fetchOnePlant = async (id) => {
  const { data } = await $host.get('api/plant/' + id);
  return data;
};
