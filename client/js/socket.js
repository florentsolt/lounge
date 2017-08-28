"use strict";

const $ = require("jquery");
const io = require("socket.io-client");
const path = window.location.pathname + "socket.io/";
const status = $("#loading-page-message, #connection-error");

const socket = io({
	transports: $(document.body).data("transports"),
	path: path,
	autoConnect: false,
	reconnection: !$(document.body).hasClass("public")
});

window.lounge_socket = socket; // TODO: Remove later, this is for debugging

[
	"connect_error",
	"connect_timeout",
	"reconnect_error",
	"reconnect_failed",
	"error",
].forEach(function(e) {
	socket.on(e, function(data) {
		status.one("click", function() {
			window.onbeforeunload = null;
			window.location.reload();
		});

		handleDisconnect(data);

		console.error(data);
	});
});

socket.on("disconnect", function(data) {
	handleDisconnect(data);
});

socket.on("reconnecting", function(attempt) {
	status.text(`Reconnecting… (${attempt})`);
});

socket.on("connecting", function() {
	status.text("Connecting…");
});

socket.on("connect", function() {
	status.text("Finalizing connection…");
});

socket.on("authorized", function() {
	status.text("Loading messages…");
});

function handleDisconnect(data) {
	status.text("Connection failed: " + data).addClass("shown");
	$(".show-more-button").prop("disabled", true);
	$("#submit").hide();
}

module.exports = socket;
