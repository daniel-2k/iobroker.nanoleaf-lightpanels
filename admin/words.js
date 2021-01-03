/*global systemDictionary:true */
'use strict';

systemDictionary = {
    "AdapterSettings": {                             "en": "nanoleaf Light Panels Adapter settings",          "de": "nanoleaf Light Panels Adapter-Einstellungen"},
    "MainSettings": {                                "en": "Main settings",                                   "de": "Haupteinstellungen"},
    "AdditionalSettings": {                          "en": "Additional settings",                             "de": "Zusätzliche Einstellungen"},
    "HostIP": {                                      "en": "Host/IP address",                                 "de": "Host/IP-Adresse"},
    "HostIPDesc": {                                  "en": "Hostname or IP address of nanoleaf Light Panels controller", "de": "Hostname oder IP-Adresse des nanoleaf Light Panels Controllers"},
    "searchDevice": {                                "en": "Search Device",                                   "de": "Gerät suchen"},
    "searchingDevices": {                            "en": "Searching device, please wait...",                "de": "Geräte werden gesucht, bitte warten..."},
    "DevicesFound": {                                "en": "Device(s) found and can be selected in the list above.", "de": "Gerät(e) wurde(n) gefunden und konnen in der Liste oben ausgewählt werden."},
    "DevicesNotFound": {                             "en": "No devices found! Try to enter manually the IP address or hostname.", "de": "Es wurden keine Geräte gefunden! Versuche die manuelle Eingabe der IP-Adresse oder Hostname."},
    "Port": {                                        "en": "Port",                                            "de": "Port"},
    "PortDesc": {                                    "en": "HTTP port of nanoleaf light panels controller",   "de": "HTTP-Port des nanoleaf Light Panels Controllers"},
    "AuthToken": {                                   "en": "Authentification token",                          "de": "Authentifizierungs-Token"},
    "AuthTokenDesc": {                               "en": "Authentification token for nanoleaf Light Panels OpenAPI.<br>Enter if you have already a token.<br>Otherweise this can be obtained by clicking on the \"Obtain authorization token\" button. The device has to be in paring mode (press and hold power button for 5-7 seconds).", "de": "Authentifizierungs-Token der nanoleaf Light Panels OpenAPI.<br>Wenn vorhanden, kann dieser hier eingegeben werden. Ansonsten kann dieser über den Button \"Authentifizierungs-Token anfordern\" angefordert werden. Das Gerät muss sich dazu im Pairing-Modus befinden (Power-Taste 5-7 Sekunden gedrückt halten)."},
    "GetAuthToken": {                                "en": "Obtain authorization token",                      "de": "Authentifizierungs-Token anfordern"},
    "PollingInterval": {                             "en": "Polling interval",                                "de": "Abfrage-Intervall"},
    "PollingIntervalDesc": {                         "en": "Interval in ms for status update polling (only until LightPanels firmware version 3.1.0 and Canvas 1.1.0)", "de": "Intervall in ms für regelmäßige Statusabfrage (nur bis LightPanels Firmware Version 3.1.0 und Canvas 1.1.0)"},
    "ReconnectInterval": {                           "en": "Reconnect interval",                              "de": "Wiederverbindungs-Intervall"},
    "ReconnectIntervalDesc": {                       "en": "Interval in seconds for reconnection attempts",   "de": "Intervall in Sekunden für erneute Versuche die Verbindung herzustellen"},
    "OnSaveRestartHint": {                           "en": "On save adapter restarts with new config immediately", "de": "Beim Speichern wird der Adapter sofort neugestartet."},
    "AdapterNotAlive": {                             "en": "Adapter must be running!",                        "de": "Adater muss gestartet sein!"},
    "AdapterStateTitle": {                           "en": "Adapter state",                                   "de": "Adapter Zustand"},
    "ObtainAuthTokenWait": {                         "en": "Obtaining authorization token, please wait...",   "de": "Authentifizierungs-Token wird angefordert, bitte warten... "},
    "ErrorGetAuthTokenTitle": {                      "en": "Error while obtaining",                           "de": "Fehler beim Anfordern"},
    "ErrorJSON": {                                   "en": "Invalid response (JOSN expected). For more details see log!", "de": "Ungültige Antwort (JSON erwartet). Weitere Details siehe Log!"},
    "ErrorUnauthorized": {                           "en": "Access denied/unauthorized. Is the device in pairing mode?<br>To set the device into pairing mode press and hold the power button at the device for 5-7 seconds until the LEDs at the device flash alternately.", "de": "Zugriff verweigert/nicht autorisiert. Ist das Gerät im Pairing-Modus?<br>Um das Gerät in den Pairing-Modus zu versetzen, muss die Power-Taste am Gerät 5-7 Sekunden gedrückt gehalten werden, bis die LEDs am Gerät abwechselnd leuchten."},
    "ErrorConnection": {                             "en": "Error while connecting. For more details see log!", "de": "Fehler beim Verbindungsaufbau. Weitere Details siehe Log!"},
    "NoAuthTokenFound": {                            "en": "No authentification token found. For more details see log!", "de": "Kein Authentifizierungs-Token gefunden. Weitere Details siehe Log!"},
    "SuccessGetAuthToken": {                         "en": "Authentification token usccessfully obtained!",   "de": "Authentifizierungs-Token anfordern erfolgreich!"},
    "disableSSE": {                                  "en": "Disable Server Sent Events (SSE)",                "de": "Server Sent Events (SSE) deaktivieren"},
    "adapterAddress": {                              "en": "adapterAddress",                                  "de": "Adapter-Adresse"},
    "Listen on all IPs": {                           "en": "Listen on all IPs",                               "de": "Auf alle IPs hören"},
    "keepAlivePolling": {                            "en": "Use polling instead of SSDP notify messages for keep alive detection", "de": "Polling anstatt SSDP Notify Messages für Keep-Alive verwenden"},
    "keepAlivePollingInterval": {                    "en": "Keep alive polling intervall",                    "de": "Keep-Alive Polling-Intervall"},
    "keepAlivePollingIntervalDec": {                 "en": "Interval in seconds for connection detection",    "de": "Intervall in Sekunden für Verbindungserkennung"},
};