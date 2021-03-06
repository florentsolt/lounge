"use strict";

const colorCodeMap = [
	["00", "White"],
	["01", "Black"],
	["02", "Blue"],
	["03", "Green"],
	["04", "Red"],
	["05", "Brown"],
	["06", "Magenta"],
	["07", "Orange"],
	["08", "Yellow"],
	["09", "Light Green"],
	["10", "Cyan"],
	["11", "Light Cyan"],
	["12", "Light Blue"],
	["13", "Pink"],
	["14", "Grey"],
	["15", "Light Grey"],
];

const commands = [
	"/as",
	"/away",
	"/back",
	"/ban",
	"/banlist",
	"/bs",
	"/close",
	"/collapse",
	"/connect",
	"/cs",
	"/ctcp",
	"/cycle",
	"/deop",
	"/devoice",
	"/disconnect",
	"/expand",
	"/ho",
	"/hs",
	"/invite",
	"/join",
	"/kick",
	"/leave",
	"/list",
	"/me",
	"/mode",
	"/ms",
	"/msg",
	"/nick",
	"/notice",
	"/ns",
	"/op",
	"/os",
	"/part",
	"/query",
	"/quit",
	"/raw",
	"/rejoin",
	"/rs",
	"/say",
	"/send",
	"/server",
	"/slap",
	"/topic",
	"/unban",
	"/voice",
	"/whois"
];

const actionTypes = [
	"away",
	"back",
	"ban_list",
	"invite",
	"join",
	"mode",
	"kick",
	"nick",
	"part",
	"quit",
	"topic",
	"topic_set_by",
	"action",
	"whois",
	"ctcp",
	"channel_list",
];

const condensedTypes = [
	"away",
	"back",
	"join",
	"part",
	"quit",
	"nick",
	"kick",
	"mode",
];

const timeFormats = {
	msgDefault: "HH:mm",
	msgWithSeconds: "HH:mm:ss"
};

module.exports = {
	colorCodeMap: colorCodeMap,
	commands: commands,
	condensedTypes: condensedTypes,
	condensedTypesQuery: "." + condensedTypes.join(", ."),
	actionTypes: actionTypes,
	timeFormats: timeFormats
};
