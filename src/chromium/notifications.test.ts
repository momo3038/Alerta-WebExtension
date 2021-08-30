import { defaultState } from "../model/extensionState";
import { sendNotification } from "./notifications";
import { PlaySound } from "../services/playSound";
jest.mock('./playSound');

beforeEach(() => {
    jest.clearAllMocks();
});

test('Should not launch notification if notification disabled in user preference', () => {
    sendNotification({
        ...defaultState.userPreferences,
        showNotifications: false
    }, [{
        id: "1",
        service: ["MyService"],
        event: "MyEvent",
        value: "This is a test"
    }]);

    expect(chrome.notifications.create).not.toHaveBeenCalled();
});

test('Should launch notification if new alerts', () => {

    sendNotification({
        ...defaultState.userPreferences,
    }, [{
        id: "1",
        service: ["MyService"],
        event: "MyEvent",
        value: "This is a test"
    }]
    );

    const expectedAlert = {
        type: 'basic',
        title: `MyService - MyEvent`,
        message: "This is a test",
        iconUrl: "alert.png",
        isClickable: true,
        requireInteraction: false,
        buttons: [{ title: 'Ack' }, { title: 'View alert details' }],
    }

    expect(chrome.notifications.create).toHaveBeenCalledWith("Alert_1", expectedAlert);
});

test('Should launch persistant notification if enabled in user preference', () => {
    sendNotification({
        ...defaultState.userPreferences,
        persistentNotifications: true
    }, [{
        id: "1",
        service: ["MyService"],
        event: "MyEvent",
        value: "This is a test"
    }]);

    const expectedAlert = {
        type: 'basic',
        title: `MyService - MyEvent`,
        message: "This is a test",
        requireInteraction: true,
        iconUrl: "alert.png",
        isClickable: true,
        buttons: [{ title: 'Ack' }, { title: 'View alert details' }],
    }

    expect(chrome.notifications.create).toHaveBeenCalledWith("Alert_1", expectedAlert);
});

test('Should launch a list notifications is more than one new alert', () => {
    sendNotification({
        ...defaultState.userPreferences,
    }, [{
        id: "1",
        service: ["MyService2"],
        event: "MyEvent2"
    }, {
        id: "2",
        service: ["MyService3"],
        event: "MyEvent3"
    }]);

    const expectedListAlert = {
        type: 'list',
        title: `2 new alerts detected !`,
        message: 'Click to open Alerta',
        items: [],
        iconUrl: "alert.png",
        isClickable: true,
        buttons: [{ title: 'Go to alerta' }]
    }

    expect(chrome.notifications.create).toHaveBeenCalledWith("GoToAlertaHome", expectedListAlert);
});

test('Should do nothing if no new alert', () => {
    sendNotification({
        ...defaultState.userPreferences,
    }, []);

    expect(chrome.notifications.create).not.toHaveBeenCalled();
});

test('Should play a sound if selected in user preferences', () => {
    sendNotification({
        ...defaultState.userPreferences,
        playAudio: true
    }, [{
        id: "1",
        service: ["MyService2"],
        event: "MyEvent2"
    }]);
    expect(PlaySound).toHaveBeenCalled();
});