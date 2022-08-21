import { useState, useEffect } from 'react';
import axios from "axios";

const API_BASE_URL_POST = 'http://localhost:5000/link/short-url';
const API_BASE_URL_GET = 'http://localhost:5000/longlink/';


export const usePostHttp = (link) => {
	const [shortUrl, setShortUrl] = useState('');

	useEffect(() => {
		axios.post(`${API_BASE_URL_POST}`, { longUrl: link })
			.then(res => {
				setShortUrl(res.data.shortUrl);
			})
			.catch(e => {
				console.log(e.message);
			});
	}, [link]);

	return shortUrl;
};


export const useGetHttp = (code) => {

	const [longUrl, setLongUrl] = useState('');

	useEffect(() => {
		axios.get(`${API_BASE_URL_GET}${code}`)
			.then(res => {
				setLongUrl(res.data);
			})
			.catch(e => {
				console.log(e.message);
			});
	}, [code]);

	return longUrl;
};