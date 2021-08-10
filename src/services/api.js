import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '991ff16483a100f396ca10d88d1c08de',
    language: 'he',
  },
})
