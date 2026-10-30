const MENU_ID = "parseJson";
const STORAGE_KEY = "pendingJson";

chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: MENU_ID,
        title: "Parsuj JSON",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener(async (info) => {
    if (info.menuItemId !== MENU_ID) return;

    await chrome.storage.session.set({ [STORAGE_KEY]: info.selectionText });
    chrome.windows.create({
        url: chrome.runtime.getURL("viewer/viewer.html"),
        type: "popup",
        width: 1400,
        height: 900
    });
});
