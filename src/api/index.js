import axios from 'axios';

const url = 'https://www.reddit.com/.json';
export default function getSubReddits() {
  return axios.get(url);
}
