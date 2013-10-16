// Config parameters
var target = "http://127.0.0.1:8000";

// Preparing DOM
var enema = document.createElement("div");
enema.innerHTML = "Login with " +
					" <a href='" + target + "/auth/twitter'>Twitter</a>" +
					" or, <a href='" + target + "/auth/github'>GitHub</a>";

// Injecting DOM
document.body.appendChild(enema);
