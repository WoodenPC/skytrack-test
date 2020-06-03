import axios from 'axios';

const apiUrl = 'https://api.giphy.com/v1/gifs/random?api_key=gR30u9O8KPOanwIQupHbD90d4k57EOeY';

// загрузка картинки
export const getImageUrlAsync = async () => {
  const res = await axios.get(apiUrl);
  const { data } = res;
  const { images, id, import_datetime, title } = data.data;
  return {
    url: images.original.url,
    id,
    time: import_datetime,
    title
  };
}