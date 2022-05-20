import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';

import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import JobsList from "./components/jobslist.js";

const langIndex = {
	"es": localeEsMessages,
	"en-US": localeEnMessages
}

ReactDOM.render(
	<IntlProvider locale={navigator.language} messages={langIndex[navigator.language]}>
		<JobsList/>
	</IntlProvider>, document.getElementById("root")
);
