// The Lounge - https://github.com/thelounge/lounge
/* global clients */
"use strict";

self.addEventListener("push", function(event) {
	if (!event.data) {
		return;
	}

	const payload = event.data.json();

	if (payload.type !== "notification") {
		return;
	}

	// get current notification, get its body, close it, and draw new
	event.waitUntil(
		self.registration
			.getNotifications({
				tag: "lounge-message"
			})
			.then((notifications) => {
				let title = payload.title;
				let body = payload.body;
				let mentions = 1;

				for (const notification of notifications) {
					mentions += +notification.data.mentions;
					body += "\n" + notification.body;
					notification.close();
				}

				if (mentions > 1) {
					body = title + ": " + body;
					title = `The Lounge: ${mentions} mentions`;
				}

				return self.registration.showNotification(title, {
					tag: "lounge-message",
					badge: "img/logo-64.png",
					icon: "img/touch-icon-192x192.png",
					body: body,
					timestamp: payload.timestamp,
					data: {
						mentions: mentions
					}
				});
			})
	);
});

self.addEventListener("notificationclick", function(event) {
	event.notification.close();

	event.waitUntil(clients.matchAll({
		type: "window"
	}).then(function(clientList) {
		for (var i = 0; i < clientList.length; i++) {
			var client = clientList[i];
			if ("focus" in client) {
				return client.focus();
			}
		}

		if (clients.openWindow) {
			return clients.openWindow(".");
		}
	}));
});
