import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

function Tracking() {
	const location = useLocation();
	const [analytics, setAnalytics] = useState();

	useEffect(() => {
		const app = initializeApp({
			apiKey: process.env.REACT_APP_API_KEY,
			authDomain: `${process.env.REACT_APP_PROJECT_ID}.firebaseapp.com`,
			projectId: process.env.REACT_APP_PROJECT_ID,
			storageBucket: `${process.env.REACT_APP_PROJECT_ID}.appspot.com`,
			messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
			appId: process.env.REACT_APP_APP_ID,
			measurementId: process.env.REACT_APP_MEASUREMENT_ID,
		});
		setAnalytics(getAnalytics(app));

		(function (c, l, a, r, i, t, y) {
			c[a] =
				c[a] ||
				function () {
					(c[a].q = c[a].q || []).push(arguments);
				};
			t = l.createElement(r);
			t.async = 1;
			t.src = "https://www.clarity.ms/tag/" + i;
			y = l.getElementsByTagName(r)[0];
			y.parentNode.insertBefore(t, y);
		})(window, document, "clarity", "script", process.env.REACT_APP_CLARITY_ID);
	}, []);

	useEffect(() => {
		if (analytics) {
			logEvent(analytics, "page_view", {
				path: location.pathname + location.search,
			});
		}
	}, [location, analytics]);
}

export default Tracking;
