import { $authHost, $host } from './index';

export const createCategory = async (type) => {
  const { data } = await $authHost.post('api/news_category', type);
  return data;
};

export const fetchCategories = async () => {
  const { data } = await $host.get('api/news_category');
  return data;
};

export const fetchOneCategory = async (id) => {
  const { data } = await $host.get('api/news_category/' + id);
  return data;
};

export const createNews = async (news) => {
  const { data } = await $authHost.post('api/news', news);
  return data;
};

export const fetchNews = async (newsCategoryId, page, limit = 20) => {
  const { data } = await $host.get('api/news', {
    params: {
      newsCategoryId,
      page,
      limit,
    },
  });
  return data;
};

export const fetchOneNews = async (id) => {
  const { data } = await $host.get('api/news/' + id);
  return data;
};
