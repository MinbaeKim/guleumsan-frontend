// src/lib/http.js
import axios from 'axios';
const BASE = import.meta.env.DEV ? (import.meta.env.VITE_API_BASE_URL || '') : '';
export default axios.create({ baseURL: BASE, withCredentials: true });
// 사용은 http.get('/api/data')
